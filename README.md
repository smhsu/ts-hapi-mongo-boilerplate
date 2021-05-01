# Typescript-Hapi-MongoDB Boilerplate

This repository contains a starter template containing a bunch of features useful for a Hapi-powered web server:

* Typescript build system
* Auto-restart of server when code changes
* ESLint
* MongoDB connection
* Serves static assets out-of-the-box
* Automatic reading of .env files

## Installing and running

1. Install and run MongoDB
2. `npm install`
3. `npm start` to start in development mode.

`npm start` will compile the Typescript files and place the generated JS into the `dist` folder.  In addition, the
server will serve any assets stored in the `public` folder.  The `public` folder should be placed in the root directory.

For production, run the `npm start-prod` script.

## Developing
All development should take place in the `src` folder.

* `main.ts` -- main entry point.
* `setUpServer` -- registers routes and plugins.  To register a new route, modify the `registerAllRoutes` function.
