# medic

> Self-healing automation


## Connect

Want to connect with Medic?  Here are some resources to help get you started.

* [How to connect with Medic](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/how-to-connect.md)
* [New Carnival Configuration](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/new-carnival-config.md)

## Medic Design & Dev Resources
Helpful resources for Medic Developers

* [Designer/Developer Process](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/design-dev-process.md)
* [Local Development](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/docker.md)
* [Creating and Contributing Packs](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/medic-exchange.md)
* [Webhooks and API Keys](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/webhooks-and-api-keys.md)

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications. For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
1. Install your dependencies

    ```
    cd path/to/medic; npm install
    ```

1. Configure your environment variables: create a `.env` file using the `.default-env` file and set all required environment variables (read more about [dotenv](https://www.npmjs.com/package/dotenv)).

    > **Note:** For security reasons some variables have minimum length requirements. There are [online tools](http://textmechanic.com/text-tools/randomization-tools/random-string-generator) for generating long strings.

1. Start your app

    ```
    npm start
    ```

## Development / Debugging (with auto-restart)

### dev-bundle

This app is configured to use StealJS' dev-bundle. Any time you install a new package, make sure to run the following command:

```
npm run dev-bundle
```

### nodemon / watch

This app is configured with [nodemon](https://nodemon.io/) to watch the filesystem and restart the app whenever changes are made. Use either of the following commands during development.

```
npm run develop

# go to chrome://inspect/#devices
# click on "Open dedicated DevTools for Node"
npm run debug
```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.


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

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
