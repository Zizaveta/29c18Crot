import React from 'react';

class Registration extends React.Component {
    state = {
        Email: "",
        FirstName: "",
        SecondName: "",
        Phone: "",
        Password: "",
        ConfirmPassword: ""

    }
    onHandleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onHandleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);

        fetch("http://localhost:49235/api/Account/Register", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
            }).then((response) => response.json())
              .then((responseJson) => {
            console.log(responseJson)
            }).catch((error) => {
              console.error(error);
            });
            
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Registration</h1>
                <form onSubmit={this.onHandleSubmit}>
                <div className="form-group row">
                        <label  htmlFor="Email" className="col-md-4 col-form-label text-md-right">Email Address</label>
                        <div className="col-md-6">
                            <input type="text" id="Email" className="form-control" onChange={this.onHandleChange} name="Email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="FirstName" className="col-md-4 col-form-label text-md-right">First Name</label>
                        <div className="col-md-6">
                            <input type="text" id="FirstName" className="form-control"  onChange={this.onHandleChange}  name="FirstName" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="SecondName" className="col-md-4 col-form-label text-md-right">Second Name</label>
                        <div className="col-md-6">
                            <input type="text" id="SecondName" className="form-control"  onChange={this.onHandleChange}  name="SecondName" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="Phone" className="col-md-4 col-form-label text-md-right">Phone Number</label>
                        <div className="col-md-6">
                            <input type="text" id="Phone" className="form-control"  onChange={this.onHandleChange}  name="Phone" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="Password" className="col-md-4 col-form-label text-md-right">Password</label>
                        <div className="col-md-6">
                            <input type="password" id="Password" className="form-control"  onChange={this.onHandleChange}  name="Password" />
                        </div>
                    </div>
            
                    <div className="form-group row">
                        <label htmlFor="ConfirmPassword" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
                        <div className="col-md-6">
                            <input type="password" id="ConfirmPassword" className="form-control"  onChange={this.onHandleChange}  name="ConfirmPassword" />
                        </div>
                    </div>

                    <div className="text-center">
                        <input className="btn btn-info" type='submit' value="Registration"  />
                    </div>
                </form>
            </div>
        );
    }
}
export default Registration;