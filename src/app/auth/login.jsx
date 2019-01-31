import React, { Component } from 'react'
import fakeAuth from './auth'
import { Redirect } from 'react-router'


const homePath = '/';

export default class Login extends Component {
  state = {
    redirectToReferrer: false,
  }

  login = () => {
  	fakeAuth.authenticate(() => {
  		this.setState({redirectToReferrer:true})
  	})
  }
  render() {
    const { from } = this.props.location.state;
    const { redirectToReferrer } = this.state;  
    return (
      <div>
        {redirectToReferrer && (
          <Redirect to={from || homePath}/>
        )}
        {from && (
          <p>
            You must log in to view the page at {from.pathname}
          </p>
        )}
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}