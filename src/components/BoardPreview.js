export default function BoardPreview({ board }) {
  return (
    <div className="board-preview w-25">
      <img src="" alt="Board preview" />
      <h3>{board.name}</h3>
    </div>
  );
}
