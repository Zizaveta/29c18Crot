import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Converter from './Converter';
import Home from './Home';
import NavigationBar from './NavigationBar';
import Registration from './Registration';

// import routes from '../routes';

class App extends React.Component {

    componentDidMount() {
        fetch('https://localhost:44347/api/values', 
            {
                method: 'get'
            })
            .then(res => {
                //console.log('---res---', res);
                return res.json();
                //console.log("---Propmis----", res.json());
            })
            .then(data => {
                console.log("------data--------",data);
            })
            .catch(er => {
                console.log('--error--', er.message);
            });
    }

    render() {
        return (
            <div>

                <NavigationBar />


                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/convert' component={Converter} />
                    <Route path='/registration' component={Registration} />
                </Switch>
            </div>
        );
    }

   
}

export default App;



