import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="text-template" style={{ padding: '20px' }}>
      <h1>This is an H1 Heading (30px, Bold)</h1>
      <h2>This is an H2 Heading (24px, Bold)</h2>
      <h3>This is an H3 Heading (20px, Bold)</h3>
      
      <p>This is regular body text (18px). Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tortor vitae purus faucibus ornare. Vivamus quis mi diam.</p>
      
      <figure style={{ marginTop: '20px' }}>
        <div style={{ 
          width: '300px', 
          height: '150px', 
          backgroundColor: '#eee', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          [Image Placeholder]
        </div>
        <figcaption>This is a figcaption element for image captions (15px)</figcaption>
      </figure>
      
      <div style={{ marginTop: '20px' }}>
        <div style={{ 
          width: '300px', 
          height: '150px', 
          backgroundColor: '#eee', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          [Another Image Placeholder]
        </div>
        <div className="caption">This is a div with caption class for image captions (15px)</div>
      </div>
    </div>
  );
}

export default App;
