import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Pics from './components/Pics';
import './App.css';

const baseAPI = 'http://localhost:3000/pics/'

class App extends Component {
  constructor(props) {
    super(props)
		this.state = {
			currentView: 'pics',
			pictures: [],
			likedPictures: [],
		}
		this.handleCreatePic = this.handleCreatePic.bind(this)
    this.handleView = this.handleView.bind(this)
    this.fetchPics = this.fetchPics.bind(this)
    this.sortPics = this.sortPics.bind(this)
    this.setPics = this.setPics.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
		this.handleCheck = this.handleCheck.bind(this)
  }

	handleCheck(pic, arrayIndex, currentArray){
    pic.liked = !pic.liked
    console.log(pic, arrayIndex, currentArray);
    fetch(baseAPI + pic.id, {
      body: JSON.stringify(pic),
      method: 'PUT' ,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then ( updatedPic => updatedPic.json())
    .then(jData => {
      this.removeFromArray(currentArray, arrayIndex)
      if(currentArray === 'pictures') {
        this.updateArray(jData, 'likedPictures')
      } else {
        this.updateArray(jData, 'pictures')
      }
      this.fetchPics()
    })
    .catch (err => console.log('this is an error', err))
  }

	handleCreatePic(pic) {
    console.log(pic);
    fetch(baseAPI, {
      body:JSON.stringify(pic),
      method:'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( createdPic => createdPic.json())
    .then( jData => {
      this.updateArray(jData, 'pictures')
      this.handleView('pics')
      this.fetchPets()
    })
    .catch ( err => console.log('this is an error', err))
  }

  updateArray(pic, array){
    this.setState( prevState => ({
      [array]:[...prevState[array],pic]
    }))
  }

  removeFromArray(array, arrayIndex) {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  fetchPics() {
    fetch(baseAPI)
    .then (data => data.json())
    .then (jData => {
      console.log('this is jData', jData)
      this.sortPics(jData)
    })
  }

  handleView(view) {
    this.setState({
      currentView: view
    })
  }

  handleDelete(picId, arrayIndex, currentArray) {
      fetch(`${baseAPI}${picId}`, {
        method: 'DELETE'
      })
      .then(data => {
        this.removeFromArray(currentArray, arrayIndex)
      })
      .catch(err => console.log(err))
    }

  sortPics(pics){
    let pictures = []
		let likedPictures = []
		pictures.forEach((pic) => {
	    if(pic.liked) {
	      likedPictures.push(pic)
	    } else {
	      pictures.push(pic)
	    }
	  })
    this.setPics(likedPictures, pictures)
  }

	setPics(liked, pics) {
		this.setState({
			likedPictures: liked,
			pictures: pics
		})
	}

  componentDidMount(){
    this.fetchPics()
  }

  render () {
    return (
      <div className="app-content">
        <Header
					currentView={this.state.currentView}
					handleView={this.handleView}
				/>
				<Form />
				<Pics
					currentView={this.state.currentView}
				/>
      </div>
    )
  }
}

export default App;
