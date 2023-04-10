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
        passwordRepeat: null
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
        axios.post('/api/users', body)
    };

    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Username</label>
                    <input name="username" onChange={this.onChange}/>
                </div>

                <div>
                    <label>Display Name</label>
                    <input name="displayName" onChange={this.onChange}/>
                </div>

                <div>
                    <label>Password</label>
                    <input name="password" onChange={this.onChange} type="password"/>
                </div>

                <div>
                    <label>Password Repeat</label>
                    <input name="passwordRepeat" onChange={this.onChange} type="password"/>
                </div>

{/*
                <input type="checkbox" onChange={this.onChange}/> Agreed
*/}

                <button /*disabled={!this.state.agreedClicked}*/ onClick={this.onClickSignUp} > Sign Up</button>

            </form>
        );
    }
}

export default UserSignUpPage;
