import { useContext, useEffect, useState } from "react";
import BoardPreview from "./BoardPreview";
import apiService from "../services/APIService";
import { AppContext } from "../context/AppContext";

export default function BoardsList() {
  let [boards, setBoards] = useState([]);
  let [result, setResult] = useState(false);
  let { user } = useContext(AppContext);

  async function createBoard() {
    const newBoard = {
      title: `${user.name}'s board`,
    };
    try {
      console.log("BOARDLIST: ", newBoard);
      const data = await apiService.postNewBoard(newBoard);
      setResult(data.message);
    } catch (err) {
      console.log(err);
      setResult("Something went wrong...");
    }
  }

  useEffect(() => {
    apiService.getBoards().then((boards) => {
      setBoards(boards);
    });
  }, []);
  return (
    <div className="boards container px-2 py-4 d-flex justify-content-around flex-wrap">
      {boards[0]
        ? boards.map((board) => <BoardPreview key={board.id} board={board} />)
        : null}
      <button onClick={createBoard}>Add new board icon</button>
    </div>
  );
}
