import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Pics from './components/Pics';
import './App.css';

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
		this.handleCheck = this.handleCheck.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

	handleCreatePic(pic) {
    fetch('https://finstagram-rails.herokuapp.com/pics', {
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
      this.fetchPics()
    })
    .catch ( err => console.log('this is an error', err))
  }

  updateArray(pic, array){
    this.setState( prevState => ({
      [array]:[...prevState[array],pic]
    }))
  }

	handleCheck(pic, arrayIndex, currentArray){
    pic.liked = !pic.liked
    fetch('https://finstagram-rails.herokuapp.com/pics/' + pic.id, {
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

  removeFromArray(array, arrayIndex) {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  fetchPics() {
    fetch('https://finstagram-rails.herokuapp.com/pics')
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
      fetch(`https://finstagram-rails.herokuapp.com/pics/${picId}`, {
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
		pics.forEach((pic) => {
	    if(pic.liked === true) {
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
				<Form
					handleCreatePic={this.handleCreatePic}
				/>
				<Pics
					currentView={this.state.currentView}
					handleView={this.handleView}
					pictures={this.state.pictures}
					likedPictures={this.state.likedPictures}
					handleCheck={this.handleCheck}
					handleDelete={this.handleDelete}
				/>
      </div>
    )
  }
}

export default App;
