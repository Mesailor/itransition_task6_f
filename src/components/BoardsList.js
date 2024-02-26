import { useContext, useEffect, useState } from "react";
import BoardPreview from "./BoardPreview";
import apiService from "../services/APIService";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

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
  }, [result]);
  return (
    <div className="boards container px-2 py-4 d-flex justify-content-around flex-wrap">
      {boards[0]
        ? boards.map((board) => (
            <Link to={`board/${board.id}`}>
              <BoardPreview key={board.id} board={board} />
            </Link>
          ))
        : null}
      <button onClick={createBoard}>Add new board icon</button>
    </div>
  );
}
