# react+redux boilerplate simple starter with TypeScript environment

- easy and simple react starter without server side rendering

- how to use
```
git clone...  
cd ...  
npm install    # install all the 3rd-Party dependencies
```

### mode
- run your frontend-app with webpack-devServer when you are in develop
```
npm run start
```

-  production mode, will generate bundle.js files to ./dist/...
```
npm run dist
```

- help people to deploy their work to GH-Page, but need to adjust `publicPath` property first in `webpack.config.prod.js`
```
npm run deploy 
```

### write your code
-  react components always contain `JSX` syntax, in TypeScript environment, the extension of these files must need to be `.tsx`.
- simple js file , their extension must need to be `.ts`.

### learning resource
- great docs from [Microsoft TypeScript offical website](https://www.typescriptlang.org/index.html)
- [Traversy Media  Crash course](https://www.youtube.com/watch?v=rAy_3SIqT-E)
