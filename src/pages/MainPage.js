import BoardsList from "../components/BoardsList";

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="header">
        <h1>Online Paint Boards</h1>
      </div>
      <BoardsList />
    </div>
  );
}
