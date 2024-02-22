import Toolbar from "../components/Toolbar";

export default function BoardPage() {
  return (
    <div className="board">
      <Toolbar />
      <canvas
        id="my-canvas"
        style={{
          border: "1px solid black",
        }}
      ></canvas>
    </div>
  );
}
