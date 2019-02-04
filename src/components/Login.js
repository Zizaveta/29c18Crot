import React from 'react';

class Login extends React.Component {

    state = {
        email: {},
        password: {}
    }
    onHandleChange=(e)=>{
        this.setState({[e.targer.name]: e.targer.value})
    }
    onHandleSubmit=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div>
                    <h1 className="text-center">Login</h1>
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="Email" className="col-md-4 col-form-label text-md-right">Email Address</label>
                            <div className="col-md-4">
                                <input type="text" id="Email" className="form-control" onChange={this.onHandleChange} name="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Password" className="col-md-4 col-form-label text-md-right">Password</label>
                            <div className="col-md-4">
                                <input type="password" id="Password" className="form-control" onChange={this.onHandleChange} name="Password" />
                            </div>
                        </div>
                        <div className="text-center">
                            <input className="btn btn-info" type='submit' value="Enter" />
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Login;