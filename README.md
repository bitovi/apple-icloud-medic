# medic

> Self-healing automation


## Connect
Want to connect with Medic?  Here are some resources to help get you started.

* [How to connect with Medic](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/how-to-connect.md)
* [New Carnival Configuration](https://github.pie.apple.com/icloud-automation-sre/medic/blob/master/docs/guides/new-carnival-config.md)

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications. For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
1. Install your dependencies

    ```
    cd path/to/medic; npm install
    ```

1. Configure your environment variables: create a `.env` file using the `.default-env` file and set all required environment variables (read more about [dotenv](https://www.npmjs.com/package/dotenv)).

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


## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
