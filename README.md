# electron-parcel-react-boilerplate
electron boilerplate for parcel and react.  
In addition to it, react-router-dom and react-redux and node-sass and babel plugins.  
You can also use `async await`, `const {bar} = foo;` and any more modern javascript writing.

## use packages
- [ ] [electron](https://github.com/electron/electron)
- [ ] [parcel](https://github.com/parcel-bundler/parcel)
- [ ] [react](https://github.com/facebook/react/)
- [ ] [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [ ] [scss](https://github.com/sass/node-sass)
- [ ] [redux](https://github.com/reactjs/redux)
- [ ] [react-redux](https://github.com/reactjs/react-redux)

## babel plugins
### [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)
* can use absolutely `import`
```jsx
// relative
import App from './App';

// absolutely
import App from 'app/src/App';
```
* settings at .babelrc
```json
{
 "plugins": [
   "transform-class-properties",
   "transform-decorators-legacy",
  [
   "module-resolver",
    {
     "alias": {
     "app": "./" //this is a project root
    }
}
```

### [babel-plugin-transform-class-properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties)
* can use `static method`
```jsx
export default class FooScreen extends React.Component {
  static defaultProps = {
    apiUrl:'https://api.github.com/repositories',
  }
}
```

### [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
* can use `decorators`
```jsx
@connect(state => ({
 value: state.value,
}))
export default class HomeScreen extends React.Component {

}
```
### [babel-preset-react-app](https://github.com/facebook/create-react-app)

## install and run
```bash
$ npm install
$ npm run dev
$ npm run prod
```