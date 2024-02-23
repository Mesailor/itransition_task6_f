class APIService {
  server_host = "http://localhost:3003";
  async getBoards() {
    return await fetch(`${this.server_host}/boards`).then((response) =>
      response.json()
    );
  }
}

export default new APIService();
