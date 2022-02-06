import './App.css';
import Uploader from './components/Uploader.js';
import Sheet from './components/Sheet.js';

function App() {
  return (
    <div>
      <h2>{process.env.REACT_APP_BACKEND_URL}</h2>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <div>
        <Uploader/>
      </div>
      <div>
        <Sheet/>
      </div>
    </div>
  );
}

export default App;
