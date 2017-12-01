# Docker

This document outlines how to develop Medic and Medic-Exchange packs locally using Docker

## Prerequisites

* [Docker CE for Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)
* [git](https://git-scm.com/)
* [node/npm](https://nodejs.org/)

## Install st2-docker

```
npm install -g js-yaml
git clone https://github.com/StackStorm/st2-docker.git
cd st2-docker
make env
curl -o- https://raw.github.pie.apple.com/icloud-automation-sre/medic/35370319-document-branch-strategy-and-docker-use/docs/guides/configure-medic-st2-docker.js?token=AAAs2BMLC30dKjsCuhZreiKSYsucaWj0ks5aJxnNwA%3D%3D | node
```

> Modify values in `conf/stackstorm.env` appropriately

> **Note** For more information, see install instructions here: [st2-docker repo](https://github.com/stackstorm/st2-docker).

## Start

To start the container, run:
```
docker-compose up
```

Once that's finished, head over to `https://127.0.0.1` and log in with the credentials specified in `conf/stackstorm.env`.

## Stop

To stop the container, run:
```
docker-compose down
```

## What just happened?

The above commands will install st2-docker, configure some volumes that are used with Medic, and set up some install scripts for when the Docker containers start.

### Volumes

Volumes are useful to allow modification of files from outside the docker container while it is running.

> **Note** You can see the relevant volumes in `docker-compose.yml`.

* `st2-docker/medic-exchange` (Docker dir: `/opt/stackstorm/medic-exchange`)
    * This is where all [Medic Exchange](https://github.pie.apple.com/medic-exchange) packs should be installed.
    * When you start the docker container (see below), any medic-exchange pack repositories in this directory will be installed automatically.
* `st2-docker/stackstorm-bin` (Docker dir: `/opt/stackstorm/bin`)
    * The `st2-docker/stackstorm-bin` directory is where all stackstorm executables will be located.
* `st2-docker/stackstorm-env` (Docker dir: `/opt/stackstorm/env`)
    * Many CLI tools in [github.pie.apple.com](https://github.pie.apple.com/icloud-automation-sre) use .env files for configuration.
    * This is where .env files will live for system level CLI tool configurations
* `st2-docker/stackstorm-configs` (Docker dir: `/opt/stackstorm/configs`)
    * Stackstorm's baked-in configuration files live here
* `st2-docker/stackstorm-ssh` (Docker dir: `/opt/stackstorm/.ssh`)
    * **Experimental**
* `st2-docker/stackstorm-gitconfig` (Docker dir: `/opt/stackstorm/.gitconfig`)
    * **Experimental**

### Install Scripts

Scripts in the `/runtime/st2.d` directory will be executed when the Docker container is started (after st2 has been installed).  They are executed alphabetically.

* `/runtime/st2.d/0-install-packs.sh`
    * Installs some useful packs from [StackStorm Exchange](https://exchange.stackstorm.org/) such as email and st2
* `/runtime/st2.d/install-medic-exchange.sh`
    * Installs the packs that exist in the `st2-docker/medic-exchange` directory
* `/runtime/st2.d/configure-stackstorm-node.sh`
    * Sets up a symlink for node inside of `/opt/stackstorm/bin/node`.  This is used by some CLI tools.


### Running Commands

Get a bash shell in the `stackstorm` container:

With st2-docker running (`docker-compose up`), open a new terminal and enter:
```
docker exec -it stackstorm /bin/bash
```

> **Note** You can access other containers (like node or rabbitmq) by changing `stackstorm` to another container name (i.e. `node`) specified in `docker-compose.yml`


## Installing packs from medic-exchange

Clone medic-exchange repositories into the `st2-docker/medic-exchange` volume directory set up previously

For example:
```
cd medic-exchange
git clone git@github.pie.apple.com:medic-exchange/test.git
```

This is where pack development should happen.

### Seeing changes to packs during development

When changes are made to files in a pack, you'll need to re install the pack to sync the changes to the stackstorm database
```
st2 pack install file:////opt/stackstorm/medic-exchange/your_awesome_pack
```
> **Note** When updating packs while the docker container is running, changes must be committed for the changes to take effect (i.e. `git add . && git commit -m "message"`)


For more information on developing packs for medic-exchange, head over to the [medic-exchange contribution docs](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/medic-exchange.md)


============= Additional Information =============

## Configure stackstorm-configs

Configs will be used for StackStorm pack configurations.

### Pack Configuration

Packs can take advantage of StackStorm configuration by including a `config.schema.yaml` file.

**Example**
```
---
  auth_key:
    description: "Auth Key"
    type: "string"
    secret: true
    required: true
```

To configure the pack, log into the stackstorm docker instance and run `st2 pack config my_awesome_pack`

**Example:**
```
root@8da7622210c4:/# st2 pack config my_awesome_pack
auth_key (secret): ********
---
Do you want to preview the config in an editor before saving? [y]: y
---
Do you want me to save it? [y]: y
+----------+----------------------------+
| Property | Value                      |
+----------+----------------------------+
| id       | 5a1de72a3a3fe400defe6461   |
| pack     | my_awesome_pack            |
| values   | {                          |
|          |     "auth_key": "********" |
|          | }                          |
+----------+----------------------------+
```

This will create a file in the `stackstorm-configs` (`/opt/stackstorm/config`) called `my_awesome_pack.yaml`

> **Note** Config properties with `secret:true` will be masked.
> **Note** For more information on pack configuration, see [Pack Configuration](https://docs.stackstorm.com/reference/pack_configs.html)


### Set up some configuration files:

#### email
> **Note** Email pack not currently working for local development.  More investigation necessary.

Create a file in `stackstorm-configs/` called `email.yaml` with the following contents
```
imap_accounts:
  - name: "apple_main_imap"
    folder: "INBOX"
    port: 993
    server: "mail.apple.com" # change this if not usign apple mail
    username: "your_user"
    password: "your_password"
    ssl: True
    download_attachments: False
smtp_accounts:
  - name: "apple_main_smtp"
    server: "mail.apple.com"
    port: 587
    username: "your_user"
    password: "your_password"
    ssl: True
    download_attachments: False
attachment_datastore_ttl: 1800
max_attachment_size: 1024
```
> **Note** imap_accounts is required.


## Example bin CLI tool installation

[hipchat-message](https://github.pie.apple.com/icloud-automation-sre/hipchat-message)

Example:
```
cd stackstorm-bin
git clone git@github.pie.apple.com:icloud-automation-sre/hipchat-message.git
cd hipchat-message
npm install
```
> *Note* This can be done outside of the Docker container.


## Using the medic_github pack (**Experimental**)

### Configure git config

Create a `stackstorm-gitconfig` file in the repo with at least the following:
```
[user]
  name = Your Name
  email = email@email.com
```

Configure the `stackstorm-gitconfig` file as a volume for `/root/.gitconfig` in `docker-compose.yml`
```
    volumes:
      - ./stackstorm-gitconfig:/root/.gitconfig
```

### Create an ssh key for github.pie.apple.com

> **Note** The `medic_github` pack does not currently work with an ssh key that requires a password.

* [Generate a new ssh key](https://help.github.com/enterprise/2.10/user/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
* Add the public key to [github.pie.apple.com/settings/keys](https://github.pie.apple.com/settings/keys)


### Configure `stackstorm-ssh`

Create a `stackstorm-ssh` directory in the repo:
```
mkdir `stackstorm-ssh`
```

Configure the `stackstorm-ssh` directory as a volume for `/root/.ssh` in `docker-compose.yml`
```
    volumes:
      - ./stackstorm-ssh:/root/.ssh
```

Copy your ssh key to `stackstorm-ssh/id_rsa`
```
cp /path/to/id_rsa_nopass path/to/stackstorm-ssh/id_rsa
```
> **Note:** This is currently how medic_github accesses medic-exchange.  This method is subject to change.


### Get the medic_github pack

Clone the `medic_github` pack into `medic-exchange` before running `docker-compose up`
```
git clone git@github.pie.apple.com:medic-exchange/medic_github.git
```

## Install Medic-Exchange Packs

You can now install packs from medic-exchange!
- Go to [Actions](https://127.0.0.1/#/actions)
- Open `MEDIC_GITHUB`
- Click `medic_exchange_pack_install`
- Enter a [medic-exchange](https://github.pie.apple.com/medic-exchange) repo name in the `pack` field
  - e.g. `medic_default`
- Click `Run`
- Once the execution has completed, refresh the [Actions page](https://127.0.0.1/#/actions) to see the pack
