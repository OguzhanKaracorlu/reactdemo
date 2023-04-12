import React from "react";
import axios from "axios";

class UserSignUpPage extends React.Component {

    /**
     * Create State for UserSignUpPage.
     * @type {{agreedClicked: boolean, username: null}}
     */
    state = {
        username: null,
        /*      agreedClicked: false,*/
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false
    };

    /**
     * All changes detected and set with a single function.
     * @param event
     */
    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    /*
        /!**
         * Change Input for Username set state.
         * @param event
         *!/
        onChangeUsername = event => {
          this.setState({
              username :  event.target.value
          })
        }

        onChangeDisplayname = event => {
            this.setState({
                displayname :  event.target.value
            })
        }

        onChangePassword = event => {
            this.setState({
                password :  event.target.value
            })
        }

        onChangeRepeatPassword = event => {
            this.setState({
                passwordRepeat :  event.target.value
            })
        }

        /!**
         * Change Agree Check Box set state.
         * @param event
         *!/
        onChangeAgree = event => {
            this.setState({
                agreedClicked : event.target.checked
            })
        }
    */

    onClickSignUp = event => {
        event.preventDefault();
        const {username, displayName, password} = this.state;
        const body = {
            username,
            displayName,
            password
        };
        this.setState({pendingApiCall: true});
        axios.post('/api/users', body)
            .then((response) => {
                this.setState({pendingApiCall: false});
            }).catch(error => {
            this.setState({pendingApiCall: false});
        })
    };

    render() {
        return (
            <div className="container">
                <form>
                    <h1 className="text-center">Sign Up</h1>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" name="username" onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Display Name</label>
                        <input className="form-control" name="displayName" onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name="password" onChange={this.onChange} type="password"/>
                    </div>

                    <div className="form-group">
                        <label>Password Repeat</label>
                        <input className="form-control" name="passwordRepeat" onChange={this.onChange} type="password"/>
                    </div>


                    {/*<input type="checkbox" onChange={this.onChange}/> Agreed*/}


                    <div className="text-center">
                        <button className="btn btn-primary"
                            /*disabled={!this.state.agreedClicked}*/
                                disabled={this.state.pendingApiCall}
                                onClick={this.onClickSignUp}>
                            {this.state.pendingApiCall && <span className="spinner-border spinner-border-sm"> </span>} Sign Up
                    </button>
            </div>

    </form>
    </div>
    )
        ;
    }
}

export default UserSignUpPage;
