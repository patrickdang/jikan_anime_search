import React, { Component } from 'react';
import './App.css';
import AnimeRow from './AnimeRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    
    this.performSearch("")
  }

  performSearch(searchTerm) {
    console.log("Perform search using Jikan MAL API")
      const urlString = "https://api.jikan.moe/v3/search/anime?q=" + searchTerm + "&page=1&limit=10"
    
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        
        const results = searchResults.results

        var animeRows = []

        results.forEach((anime) => {
          
          
          const animeRow = <AnimeRow key={anime.id} anime={anime}/>
          animeRows.push(animeRow)
        })

        this.setState({rows: animeRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="jikan.logo.png"/>
              </td>
              <td width="8"/>
              <td>
                <h1>Jikan Anime Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        



        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        



      <div className='paddingRow'>{this.state.rows}</div>

      </div>
    );
  }
}

export default App;
