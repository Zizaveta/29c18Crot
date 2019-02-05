import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import NavigationBar from './NavigationBar';
import Registration from './Registration';
import Login from './Login';
import ImagePage from './image/ImagePage';
import ImageForm from './image/ImageForm';
// import routes from '../routes';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

    // componentDidMount() {
    //     fetch('https://localhost:44347/api/values', 
    //         {
    //             method: 'get'
    //         })
    //         .then(res => {
    //             //console.log('---res---', res);
    //             return res.json();
    //             //console.log("---Propmis----", res.json());
    //         })
    //         .then(data => {
    //             console.log("------data--------",data);
    //         })
    //         .catch(er => {
    //             console.log('--error--', er.message);
    //         });
    // }

    render() {
        return (
            <div>

                <NavigationBar />


                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/registration' component={Registration} />
                    <Route path='/allimages' component={ImagePage} />
                    <Route path='/addimage' component={ImageForm} />


                </Switch>
            </div>
        );
    }

   
}

export default App;



