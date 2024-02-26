import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";
import { AppProvider } from "./context/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/board/:id",
    element: <BoardPage />,
  },
]);

function App() {
  return (
    <AppProvider>
      <div className="App" style={{ overflow: "hidden" }}>
        <RouterProvider router={router} />
      </div>
    </AppProvider>
  );
}

export default App;
