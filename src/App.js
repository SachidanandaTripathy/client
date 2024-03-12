import './App.css';
import photo from './Tripathy2.jpg'
function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <nav>
            <h2 className="logo">Sachidananda..</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">Projects</a></li>
            </ul>
          </nav>
          <div className="header-text">
            <p>Full stack developer</p>
            <h1>Hey I am <span>Sachidananda Tripathy...</span></h1>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={photo} />
            </div>
            <div className="about-col-2">
              <h1 className='sub-title'>About Me</h1>
              <p>
                I am someone who loves to learn new things and Ima very passionate about coding. Ienjoy try ot keep myself
                updated with hte latest developments ni technology, which inspires me ot constantly improve my skils and learn more.
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
