class APIService {
  server_host = "http://localhost:3003";
  async getBoards() {
    return await fetch(`${this.server_host}/boards`).then((response) =>
      response.json()
    );
  }

  async postNewBoard(newBoard) {
    console.log("API SERVICE: ", newBoard);
    return await fetch(`${this.server_host}/boards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBoard),
    }).then((response) => response.json());
  }
}

export default new APIService();
