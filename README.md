# Express + Vue app
This is a template application. Feel free to use for whatever fits your needs.
The idea is to run and complie a smaller app within a bigger mother app. 
This is, a Vue app inside an Express app.

##### Why...
I personally find it usefull to have some `npm modules` available in static front-end environments, without `require.js` or any externalities. The code is made with performance in mind, therefore all views in the vue-app have been removed.
But you may find further uses. Feel free to use it as you may.

### Install
Make sure you install both apps!
```
npm install
cd vue-app
npm install
```

### Build
Inspect the root (Express) `package.json` to see the default commands
All the necessary commands will be executed from the root directory (Express app)

```
// Starts a nodemon instance of the app
// nodemon allows for real-time changes, wihtout restarting the app 
npm run nstart
```

```
// Normal startup of the whole server
npm start
```

```
// Builds the inner Vue-app
npm run vue-build
```

```
// Serves only the inner Vue-app
// You can use to easier develop with with real-time saves
npm run vue-serve
```

Recommended startup sequence:
```
npm run vue-build
npm run nstart
```

### Details
* The Vue-app lives inside the `/vue-app` folder as a normal app.
* The complied code goes to `/public/vue-app`, which gets picked up by the Express app and served _statically_ to the client.
* The relevant .js files are imported to the index.ejs as a normal script. You can import them as you need, the current example has a pre-load `<link>` and a end-of-document `script`.

### Vue App
* Views are kept, as they are the touching point of the apps. To hide the UI you can add a `style="display:none;` to `<div id=app>` the `App.vue`
* The Vue app has a `vue.config.js` file to manage the exports.
* `.gitignore` is set only once, in the Express app.
* Babel and lint have not been installed.

### Express App
* A default express app, built with `ejs`
* Served using nodemon. You can now support the project via the open collective: https://opencollective.com/nodemon/donate
