# Vintrace Coding Challenge
## Joshua Sommerfeld

This react project was bootstrapped with create react app.

## Limitations
Due to time limitations, I did not build the basic search page.
I also did not get the breakdown to a functional point where you could select other tabs and get refreshed data.

I also have no tests, because I ran out of time.
Obviously testing the WineDetailsPage would be ideal, as well as the props for each component.

## Setup
You'll need node and yarn installed. Use can use `nvm` and the provided `.nvmrc` to set your node version.

To run just the react app:
```bash
yarn start
```

To run the react app and server at once:
```bash
yarn startAll
```

## Architecture Decision Register
### File System
* src
    * /Components
        * All atomic components ready for re-use by other pages as required
    * /Pages
        * Orchestrators of larger, functional pages. Functionality is tied to pages instead of components.
        * Any components that are page specific live here too
    * /styles
      * Where parameterised style configs can be kept, I'd also have put breakpoints and spacing configuration files here
    * App.js
      * Core of the application, routes are managed here
    * config.js
      * Standard object with configuration level objects, here just abstracting the hard-coding of the api url
    * index.css
      * Basic css foundation
    * index.js
      * Standard among create react applications

### Styled Components
Makes life easy without styles over multiple files, especially with state based styles like in the "Tabs" component.