'use strict';

const childProcess = require('child_process');
const globalNodeModules = childProcess.execSync('npm root -g').toString().trim();
const yaml = require(`${globalNodeModules}/js-yaml`);
const fs = require('fs');
const volumes = [
  {
    path: 'stackstorm-configs',
    config: './stackstorm-configs:/opt/stackstorm/configs'
  },
  {
    path: 'medic-exchange',
    config: './medic-exchange:/opt/stackstorm/medic-exchange'
  },
  {
    path: 'stackstorm-env',
    config: './stackstorm-env:/opt/stackstorm/env'
  },
  {
    path: 'stackstorm-bin',
    config: './stackstorm-bin:/opt/stackstorm/bin'
  }
];


// create directories and configure volume
const dockerCompose = yaml.safeLoad(fs.readFileSync('./docker-compose.yml', 'utf8'));
volumes.forEach(volume => {
  fs.mkdirSync(volume.path, 0o755);
  dockerCompose.services.stackstorm.volumes.push(volume.config);
});
fs.writeFileSync('./docker-compose.yml', yaml.safeDump(dockerCompose, {
  noCompatMode: true
}));


// write some shell scripts
fs.writeFileSync('./runtime/st2.d/0-install-packs.sh',
`#/bin/bash

# install stackstorm packs
st2 pack install email st2

# register pack configs
st2ctl reload --register-configs
`);

fs.writeFileSync('./runtime/st2.d/install-medic-exchange.sh',
`#/bin/bash
MEDIC_EXCHANGE_DIRECTORIES=/opt/stackstorm/medic-exchange/*

# remove all packs, first
for d in $MEDIC_EXCHANGE_DIRECTORIES
do
  echo "removing existing medic-exchange pack: $(basename $d)"
  st2 pack remove $(basename $d)
done

# then install all packs
for d in $MEDIC_EXCHANGE_DIRECTORIES
do
  echo "installing medic-exchange pack: $d..."
  st2 pack install file:///$d
done
`);

fs.writeFileSync('./runtime/st2.d/configure-stackstorm-node.sh',
`#/bin/bash
ln -s \`which node\` /opt/stackstorm/bin/node
`);
