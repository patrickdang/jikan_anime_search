import React from 'react'

class AnimeRow extends React.Component {
  
  viewAnime() {
    window.open(this.props.anime.url)
    //window.location.href = this.props.anime.url
  }

  render() {
    return <table key={this.props.anime.id}>
    <tbody>
      <tr >
        <td>
          <img className='rcorner' alt="poster" width="120" src={this.props.anime.image_url}/>
        </td>
        <td className='padding'>
          <h3>{this.props.anime.title}</h3>
          <p>{this.props.anime.synopsis}</p>
          <input className='button' type="button" onClick={this.viewAnime.bind(this)} value="View more on MyAnimeList"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default AnimeRow