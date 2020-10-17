# My Gridsome blog

I always wanted to try out VueJS but never got around to doing it. 

Now that I have a little bit of time I decided to use the new framework based on VueJS : Gridsome.

I'm creating a blog because I'm currently learning to be an RPGLE developer. A blog is a really good educational tool when learning something. 

# Other technologies used

- TailwindCSS
- Contentful
- Markdown-it

# BE CAREFUL
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