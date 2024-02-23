import Toolbar from "../components/Toolbar";

export default function BoardPage() {
  return (
    <div className="board">
      <Toolbar />
      <canvas
        width={600}
        height={400}
        id="my-canvas"
        style={{
          height: "calc(100vh - 4.5rem)",
          width: "100vw",
        }}
      ></canvas>
    </div>
  );
}
