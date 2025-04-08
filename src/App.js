import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Treatments from './components/Treatments/Treatments';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Treatments />
      <Reviews />
    </div>
  );
}

export default App;
