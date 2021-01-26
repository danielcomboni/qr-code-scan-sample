import logo from "./logo.svg";
import "./App.css";
import ScanQRCode from "./components/scan/ScanQRCode";
function App() {
  return (
    <div className="App">
      <ScanQRCode />
    </div>
  );
}

export default App;
