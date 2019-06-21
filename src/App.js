import React, { Component } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';

const baseAPI = 'http://localhost:3000/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      users: []
    }
    this.createUser = this.createUser.bind(this)
    this.handleCreateUser = this.handleCreateUser.bind(this)
    this.handleUserLogin = this.handleUserLogin.bind(this)
    this.handleLoggedInUser = this.handleLoggedInUser.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
    this.setUsers = this.setUsers.bind(this)
  }

  createUser() {
		this.setState({
			welcomeOpen: !this.state.welcomeOpen,
			userForm: !this.state.userForm
		})
	}

  handleCreateUser(user) {
		fetch(baseAPI + `users`, {
			body: JSON.stringify(user),
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		})
			.then(createdUser => createdUser.json())
			.then(userJson => {
				// console.log(userJson);
				this.fetchUsers()
				this.setState({
					userCreateMessage: 'Success, user created!',
					loginError: ''
				})
			})
			.catch(err => {
				// console.log(err)
				this.setState({
					userCreateMessage: 'Failure - user not created!',
					loginError: ''
				})
			})
	}

  handleUserLogin (loginParams) {
		// console.log('login', loginParams);
		fetch(baseAPI + `auth`, {
			method: 'POST',
			// credentials: 'include',
			body: JSON.stringify(loginParams),
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		})
			.then(loginRes => loginRes.json())
			.then(jsonLogin => {
				// console.log('Post user login fetch:',jsonLogin)
				if(!jsonLogin.error) {
					// console.log('no error path')
					localStorage.setItem('jwt', jsonLogin.jwt)
					this.setState({
						loggedInUser: jsonLogin.user_id,
						userCreateMessage: '',
						loginError: ''
					})
					this.fetchUserCountries(jsonLogin.user_id)
					this.mainPage()
				}
				else {
					// console.log(jsonLogin.error)
					this.setState({
						loginError: jsonLogin.error,
						userCreateMessage: ''
					})
				}
			})
	}

  handleLoggedInUser() {
		// console.log('handleLoggedInUser')
		fetch(baseAPI + 'current_user', {
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
				'Authorization': localStorage.getItem('jwt')
			}
		})
			.then(userRes => userRes.json())
			.then(jsonUser => {
				// console.log('Prev user:',jsonUser)
				this.setState({
					loggedInUser: jsonUser.user_id,
					currentUser: jsonUser.user_id,
					welcomeOpen: false,
				})
				this.fetchUserCountries(jsonUser.user_id)
			})

	}

  handleLogOut() {
		localStorage.removeItem('jwt')
		this.setState({
			loggedInUser: '',
			currentUser: '',
			welcomeOpen: true,
			visitedCountries: [],
			wishlistCountries: [],
			listView: '',
			loginError: '',
			userCreateMessage: ''
		})
	}
	click(event) {
		let countryTitle = event.target.getAttribute('title')
		let countrySvgId = event.target.id
		if (countryTitle) {
			this.toggleModal()
			this.setState((prevState) => {
				return {
					currentCountry: {
						country_title: countryTitle,
						country_code : countrySvgId
					}
				}
	  		})
		}
	}

  setUsers(jsonRes) {
		// console.log('set users')
		this.setState( (prevState) => {
			return {
				users : jsonRes
			}
		})
	}

  fetchUsers() {
		fetch(baseAPI + 'users')
			.then(data => data.json())
			.then(jsonRes => {
				debugPrint(jsonRes)
				this.setUsers(jsonRes)
			})
			.catch(err => console.log(err))
	}

  render () {
    return (
      <div className="app-content">
        <Login />
      </div>
    )
  }
}

export default App;
