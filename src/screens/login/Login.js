import React, { Component } from 'react';
import './Login.css';
import Header from "../../common/header/Header";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            usernameRequired: 'dispNone',
            passwordRequired: 'dispNone',
            credentials: {
                username: 'susri1125',
                password: 'admin'
            },
            accessToken: 'IGQVJYc1J4dTJSRFFUQTdyeHhwNmFzdGlhdFFlb0tHOFFGMlk0bnBicDVKYlhUZAElBR1I1cU9tODRuUjlUY1BEQnNDQzZAqV0JlQmN6MGJQWk9RM0FLOExCWF9KYVJCM3FYc0tUVXNJNHZASTGU1TS12dQZDZD',
            incorrectCredential: 'dispNone',
        };
    }

    /**
     * Function that handles any changes in the username field and updates state accordingly
     */
    inputUsernameChangeHandler = (event) => {
        this.setState({ username: event.target.value })
    }

    /**
     * Function that handles any changes in the password field and updates state accordingly
     */
    inputPasswordChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    /**
     * Function that handles what happens when we click the login button
     */
    loginHandler = () => {
        this.state.username === '' ? this.setState({ usernameRequired: 'dispBlock' })
            : this.setState({ usernameRequired: 'dispNone' });
        this.state.password === '' ? this.setState({ passwordRequired: 'dispBlock' })
            : this.setState({ passwordRequired: 'dispNone' });
        if (this.state.username === "" || this.state.password === "") {
            this.setState({
                incorrectCredential: 'dispNone'
            });
            return;
        }

        if (this.state.username === this.state.credentials.username
            && this.state.password === this.state.credentials.password) {
            this.setState({
                incorrectCredential: 'dispNone'
            });
            sessionStorage.setItem('access-token', this.state.accessToken);
            this.props.history.push("/home");
        } else {
            this.setState({
                incorrectCredential: 'dispBlock'
            });
        }
    }

    render() {
        return (
            <div>
                {/** Header component included here */}
                <Header />

                {/** Login Card code begin */}
                <div className="login-card-container">
                    <Card className="login-card">
                        <CardContent>
                            <FormControl className='login-form-control'>
                                <Typography variant="h5">
                                    LOGIN
                                </Typography>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className='login-form-control'>
                                <InputLabel htmlFor='username'>Username</InputLabel>
                                <Input id='username' type='text' onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className='credential-required'>required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormControl required className='login-form-control'>
                                <InputLabel htmlFor='password'>Password</InputLabel>
                                <Input id='password' type='password' onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className='credential-required'>required</span>
                                </FormHelperText>
                            </FormControl>
                            <br />
                            <br />
                            <FormHelperText className={this.state.incorrectCredential}>
                                <span className='credential-required'>Incorrect username and/or password</span>
                            </FormHelperText>
                            <br />
                            <Button variant='contained' color='primary' onClick={this.loginHandler}>
                                LOGIN
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                {/** Login Card code ends */}
            </div>
        )
    }
}

export default Login;