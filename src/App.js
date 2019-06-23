import React, { Component } from 'react';
import Header from './components/Header';
import Pics from './components/Pics';
import './App.css';

const baseAPI = 'http://localhost:3000/pics/'

class App extends Component {
  constructor(props) {
    super(props)
		this.state = {
			currentView: 'pics',
			pictures: []
		}
		this.handleCreatePic = this.handleCreatePic.bind(this)
    this.handleView = this.handleView.bind(this)
    this.fetchPics = this.fetchPics.bind(this)
    this.sortPics = this.sortPics.bind(this)
    this.setPics = this.setPics.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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
    pics.forEach(pic => {
      pictures.push(pic)
    })
    this.setPics(pictures)
  }

  setPics(pictures){
    this.setState({
      pictures : pictures
    })
  }

  componentDidMount(){
    this.fetchPics()
  }

  render () {
    return (
      <div className="app-content">
        <Header />
				<Pics />
      </div>
    )
  }
}

export default App;
