require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('../less/index.less');

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component{
    render(){
        return (<div className="app">
               <h1>react-webpack-ie8</h1>
               <p>
                    <span>Make your `React` app work with `webpack` in `Internet Explorer 8.0`.</span>
                </p>
                <p>
                    <img src="static/images/ie8.jpg" />
                </p>
            </div>)
    }
}

ReactDOM.render(<App />,document.getElementById("react-container"));