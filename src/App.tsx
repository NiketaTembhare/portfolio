import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <main className="main-body main-active">
      <MainContainer />
      <Analytics />
    </main>
  );
};

export default App;
