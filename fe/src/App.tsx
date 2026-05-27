import "./App.css";
import LeftPanel from "./components/LeftPanel";
import MiddleFeed from "./components/MiddleFeed";
import TopBar from "./components/Topbar";

function App() {
  return (
    <div>
      <TopBar />
      <LeftPanel />
      <MiddleFeed />
    </div>
  );
}

export default App;
