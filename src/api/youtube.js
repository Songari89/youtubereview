import axios from 'axios';

export class Youtube {

  async search(keyword){
    return keyword? this.#searchByKeyword(keyword) : this.#popular()
  }

  async #searchByKeyword(keyword){
    return axios.get('/videos/YoutubeAPI.json').then(res => res.data.items.map((item) => ({...item, id: item.id.videoId})))

  }
  async #popular(){
    return axios.get('/videos/Popular.json').then(res => res.data.items)
  }
}
