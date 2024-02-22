import { useState } from "react";
import BoardPreview from "./BoardPreview";

export default function BoardsList() {
  let fakeBoards = [
    { name: "first board" },
    { name: "second board" },
    { name: "third board" },
  ];
  let [boards, setBoards] = useState(fakeBoards);
  return (
    <div className="boards">
      {boards.map((board) => (
        <BoardPreview board={board} />
      ))}
      <button>Add new board icon</button>
    </div>
  );
}