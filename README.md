# marty-webpack-starter
Opinionated flux starter app using Marty and Webpack.

## Cool stuff
* Hot reloads as files change
* Styles are local to components
* Basic authentication in the box


# Installation
```sh
npm install
npm start
open http://localhost:9009
```

# Things to note
* Styles in `.scss` files in `app/components/` are scoped to the component and therefore default to being `:local()`. If you really have to make them global, use `:global()`

* Styles are autoprefixed
