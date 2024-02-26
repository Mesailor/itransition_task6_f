import { useContext, useEffect } from "react";
import BoardsList from "../components/BoardsList";
import { AppContext } from "../context/AppContext";

export default function MainPage() {
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    if (!user.name) {
      const name = prompt("Enter your name: ", "Anonymous");
      setUser({ name });
    }
  }, []);
  return (
    <div className="main-page">
      <div className="header text-center py-4 bg-secondary">
        <h1 className="">Online Paint Boards</h1>
        <p>You connected as {user.name}</p>
      </div>
      <BoardsList />
    </div>
  );
}
