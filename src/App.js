import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Treatments from './components/Treatments';
import Reviews from './components/Reviews';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Treatments />
      <Reviews />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
