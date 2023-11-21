
export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#popular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } }) //id:id 로 생략가능
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async searchByChannelId(channelId) {
    return this.apiClient
      .playlist({
        params: { part: "snippet", maxResults: 25, channelId, type:'video' },
      })
      .then((res) => res.data.items);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: { part: "snippet", maxResults: 25, type: "video", q: keyword },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
  async #popular() {
    return this.apiClient
      .videos({
        params: { part: "snippet", maxResults: 25, chart: "mostPopular" },
      })
      .then((res) => res.data.items);
  }
}
