import axios from 'axios';

export class FakeAPI{

  async playlist(){
    return axios.get('/videos/Playlist.json')
  }

  async channels(){
    return axios.get('/videos/ChannelDtail.json')
  }

  async search(){
    return axios.get('/videos/YoutubeAPI.json')

  }
  async videos(){
    return axios.get('/videos/Popular.json')
  }
}