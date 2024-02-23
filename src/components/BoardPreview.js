export default function BoardPreview({ board }) {
  return (
    <div className="board-preview w-25">
      <img src={board.thumbUrl} alt="Board preview thumbnail" />
      <h3>{board.title}</h3>
    </div>
  );
}
