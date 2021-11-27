import React from 'react'

import './sign-in.style.scss'

import FormInput from '../form-input/form-input.component'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({ [name]: value })

    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an acount</h2>
                <span>Sign in with yur email and password</span>

                <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email" 
                type="email" 
                value={this.state.email}
                handleChange={this.handleChange}
                label="email"
                required/>

                <FormInput 
                name="password" 
                type="password" 
                value={this.state.password}
                handleChange={this.handleChange}
                label="password"
                required
                />

                <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
}

export default SignIn