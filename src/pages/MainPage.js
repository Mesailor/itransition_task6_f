import BoardsList from "../components/BoardsList";

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="header text-center py-4 bg-secondary">
        <h1 className="">Online Paint Boards</h1>
      </div>
      <BoardsList />
    </div>
  );
}
