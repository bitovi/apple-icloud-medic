
# medic

> Self-healing automation


## Connect

Want to connect with Medic?  Here are some resources to help get you started.

* [How to connect with Medic](docs/guides/how-to-connect.md)
* [New Carnival Configuration](docs/guides/new-carnival-config.md)

## Medic Design & Dev Resources
Helpful resources for Medic Developers

* [Designer/Developer Process](docs/guides/design-dev-process.md)
* [Local Development](docs/guides/docker.md)
* [Creating and Contributing Packs](docs/guides/medic-exchange.md)
* [Webhooks and API Keys](docs/guides/webhooks-and-api-keys.md)

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications. For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
1. Install your dependencies

    ```
    cd path/to/medic; npm install
    ```

1. Configure your DB.

	- Download postgresql using homebrew
	```
	brew install postgresql
	```
	- Download [Postico](https://eggerapps.at/postico/)

	- Create username `medic` and database `medic`. Follow this [tutorial](https://www.codementor.io/engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)

4. Configure your environment variables: create a `.env` file using the `.default-env` file and set all required environment variables (read more about [dotenv](https://www.npmjs.com/package/dotenv)).

    > **Note:** For security reasons some variables have minimum length requirements. There are [online tools](http://textmechanic.com/text-tools/randomization-tools/random-string-generator) for generating long strings.

    > **Note:** The db connection string uses the credentials you created in the previous step.

1. Start your app

    ```
    npm start
    # npm run develop
    # npm run debug
    ```

## Development / Debugging (with auto-restart)

### dev-bundle

This app is configured to use StealJS' dev-bundle. Any time you install a new package, make sure to run the following command:

```
npm run dev-bundle
```
> **Note:** the above command is configured to run as a `postinstall` script which will run every time your run `npm install`.

### nodemon / watch

This app is configured with [nodemon](https://nodemon.io/) to watch the filesystem and restart the app whenever changes are made. Use either of the following commands during development.

```
npm run develop

# go to chrome://inspect/#devices
# click on "Open dedicated DevTools for Node"
npm run debug
```

### Creating components

This app is configured with a [yeoman generator](https://github.pie.apple.com/icloud-automation-sre/generator-rvm-component) for creating components. First, ensure yeoman is installed and then you can create components:

```
npm install -g yo
yo rvm-component
```

> #### Yeoman issues
>
> If you have an older version of yeoman installed, you may need to clean the npm cache and reinstall.
> 
> ```
> npm cache clean && npm rm -g yo && npm cache clean && npm install -g yo
> ```
> 
> If you use nvm, you might need to make sure that the yeoman binary in `/usr/local/bin` points to the version installed in your nvm directory.
One way around this is to create a symlink:
> 
> ```
> ln -s /Users/yoursystemusername/.nvm/versions/node/v6.7.0/bin/yo /usr/local/bin/yo
> ```


## Testing

Simply run `npm test` and all your client and server tests will be run.

If you are using the browser for client tests, you will want to create a test bundle first:

```
npm run test-bundle && npm run develop
# Open the test page: http://localhost:PORT/test.html
```


## Documentation

This project uses [storybook](https://storybook.js.org/) for all guides, API documentation, and component demo pages. [JSDoc](http://usejsdoc.org/) is also used to generate documentation from code comments. To view the documentation run the following command:

```
npm run storybook
```

> NOTE: The storybook server will watch for any changes and automatically reload whenever the source files are updated. However, for the JSDocs section you must manually regenerate the markdown files to see the changes. You can keep the storybook server running and open a second terminal and run the following command:
> 
> ```js
> npm run jsdoc
> ```
> The storybook server will see the new markdown files and should reload automatically.

## Changelog

__0.1.0__

- Initial release
