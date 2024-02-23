import { useEffect, useState } from "react";
import Toolbar from "../components/Toolbar";

export default function BoardPage() {
  const [c, setC] = useState({});
  const [ctx, setCtx] = useState({});
  const [isDrawing, setIsDrawing] = useState(false);

  function startDraw(e) {
    setIsDrawing(true);
    ctx.moveTo(e.clientX, e.clientY - e.target.offsetTop);
  }

  function finishDraw() {
    setIsDrawing(false);
  }

  function draw(e) {
    if (!isDrawing) return;
    ctx.lineTo(e.clientX, e.clientY - e.target.offsetTop);
    ctx.stroke();
    ctx.moveTo(e.clientX, e.clientY - e.target.offsetTop);
  }

  useEffect(() => {
    const c = document.getElementById("my-canvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight - c.offsetTop;
    setC(c);
    setCtx(c.getContext("2d"));
  }, []);

  return (
    <div className="board">
      <Toolbar />
      <canvas
        onMouseMove={draw}
        onMouseDown={startDraw}
        onMouseUp={finishDraw}
        id="my-canvas"
        style={{
          height: "calc(100vh - 4.5rem)",
          width: "100vw",
        }}
      ></canvas>
    </div>
  );
}
