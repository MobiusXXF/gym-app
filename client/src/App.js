import './App.css';
import './images/bjj.jpeg';

function App() {
  return (
    <body>
      <div className="App">
        <header id="home">
        <h1>Hercules Gym</h1>
        <p>
          Hover over the classes below and see what they have to offer!
        </p>
      </header>
      <hr/>
        <div id="weights" class="card">
          <h2>Weight Lifting</h2>
          <img src="" alt="" />
          <p>
            Class Description
          </p>
        </div>
        <div id="spin" class="card">
          <h2>Spin Class</h2>
          <img src="" alt="" />
          <p>
            Class Description
          </p>
        </div>
        <div id="yoga" class="card">
          <h2>Yoga</h2>
          <img src="" alt="" />
          <p>
            Class Description
          </p>
        </div>
        <div id="bjj" class="card">
          <h2>Brazilian Jiu-Jitsu</h2>
          <img src="./images/bjj.jpeg" alt="" />
          <p>
            Class Description
          </p>
        </div>
      </div>
    </body>
  );
}

export default App;

