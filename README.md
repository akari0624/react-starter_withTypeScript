# react+redux boilerplate simple starter with TypeScript environment

## easy and simple react starter without server side rendering

### how to use
```
git clone...  
cd ...  
npm install    # install all the 3rd-Party dependencies
```

### when compile...
  - this boilerplate use webpack [ts-loader](https://github.com/TypeStrong/ts-loader) as a bridge between TypeScript and webpack. In this way, you can write TypeScript, enjoy the benefenit from Type-Checking and your javaScript also can be bundled and you still can code in a enjoyable develop environment( thanks to amazing webpack devServer!).
  - You may want to check more about the `faster-builds` paragraph from `ts-loader` [doc](https://github.com/TypeStrong/ts-loader#faster-builds) to see more about the more implementation detail.

### scripts
```
npm run dev
```
  - run your frontend-app with webpack-devServer when you are in develop


```
npm run fastbuild_dev
```
 - use this script when your app become bigger to run fastBuild develop mode, this will require [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin) and it will  boot another process to do Type-Checking job
 - more ref:
   - [ts-loader doc- faster-builds](https://github.com/TypeStrong/ts-loader#faster-builds)
   - [blog post](https://medium.com/webpack/typescript-webpack-super-pursuit-mode-83cc568dea79) about fastBuild in TypeScript + webpack dev environment by ts-loader primary maintainer - John Reilly

 
```
npm run dist
```
  - production mode, will generate bundle.js files to ./dist/...


```
npm run deploy 
```
  - help people to deploy their work to GH-Page, but you need to create a repository on Github first and  adjust `publicPath` property first in `webpack.config.prod.js`. [good Github Page detail reference on GatsbyJS doc](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/) <-this script basic work like this 


### tsconfig.json - the config file of TypeScript
- most important part - compilerOptions
[see what can be set](https://www.typescriptlang.org/docs/handbook/compiler-options.html)


###  `dev`, `fastbuild_dev`, `dist`, these three scripts have `withBabel` mode
```
npm run ${script}WithBabel
```
  - this will make webpack build the TypeScript code first time use ts-loader(it use the `tsc` i.e. TypeScript Compiler), generate the compiled JS code then forward them to babel-loader, let it do second time transpile to ensure the javascript code is you think in the `.babelrc`.
  - `tsc` has the ability to transform TypeScript code to ES5 evne ES3,(set theme up in `tsconfig.json` [target](https://www.typescriptlang.org/docs/handbook/compiler-options.html)) so make babel transpile them again is seems like redundant in most situation, it will make build time longer and make bundled js files bigger.
   However, babel has its ability that support newest javascript syntax and other features, so these scripts is created for those usage scenario.
  - @see [1](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/)  [2](https://github.com/TypeStrong/ts-loader/issues/755)


### about linting
- eslint is not capable for TypeScript 
- install `tslint` in local or global. if you run `npm install`, you will install `tslint` locally, since I put that dependency in `package.json`
- your IDE must need to install proper lint extension to collaborate with tslint, I use `TypeScript TSLint Plugin` in vs-code
- use your lint rule in `tslint.json` file. [doc](https://github.com/palantir/tslint)
[tslint.json example](https://palantir.github.io/tslint/usage/configuration/)
- check `tslint` rules [here](https://palantir.github.io/tslint/rules/)
- if you want to run `fastbuild_dev` mode, configuration for `tslint` is essential.


### write your code
-  react components always contain `JSX` syntax, in TypeScript environment, the extension of these files must need to be `.tsx`.
- simple js file , their extension must need to be `.ts`.


### TypeScript learning resource
- [Traversy Media  Crash course](https://www.youtube.com/watch?v=rAy_3SIqT-E)
- great docs from [Microsoft TypeScript offical website](https://www.typescriptlang.org/index.html)
- [piotrwitek/react-redux-typescript-guide](https://github.com/piotrwitek/react-redux-typescript-guide/blob/master/README.md)
