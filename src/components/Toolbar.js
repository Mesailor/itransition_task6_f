export default function Toolbar() {
  return (
    <div className="toolbar p-4 bg-secondary d-flex justify-content-between">
      <div className="tools">
        <button className="brush">Brush icon</button>
      </div>
      <div className="session-users text-warning">Session users list</div>
    </div>
  );
}
