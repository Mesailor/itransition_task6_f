import { useEffect, useState } from "react";
import BoardPreview from "./BoardPreview";
import apiService from "../services/APIService";

export default function BoardsList() {
  let [boards, setBoards] = useState([]);

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
      <button>Add new board icon</button>
    </div>
  );
}
