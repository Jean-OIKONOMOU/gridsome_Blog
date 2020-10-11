# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

# BE CAREFUL -> 
## TailwindCSS Update
tailwindCSS changed the way it interacts with Gridsome. 

use this plugin (npm install -D gridsome-plugin-tailwindcss) to get tailwindcss working with gridsome.  

Make sure to remove the import statement in main.js. (import "./assets/css/global.css" Then rename global.css to tailwind.css and move it to main directory.  

The last step is to add the plugin to gridsome, in the gridsome.config.js file in the plugins: 
```js
plugins: [ { 
    use: "gridsome-plugin-tailwindcss" 
} ]
```
## Yarn Bugs
Currently, Yarn has a lot of problems with gridsome, it's better to use NPM for everything.