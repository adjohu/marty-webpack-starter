# marty-webpack-starter

[![Join the chat at https://gitter.im/adjohu/marty-webpack-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/adjohu/marty-webpack-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
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
