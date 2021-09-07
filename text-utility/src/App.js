import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils2" aboutUs="AboutUs"/>
      <div className="container">
        <TextForm heading="Enter The Text To Analyze"/>
      </div>
     
    </div>
  );
}

export default App;
