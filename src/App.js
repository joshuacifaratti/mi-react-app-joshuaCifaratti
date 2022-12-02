import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carusel from './components/Carusel/Carusel';
import Card from './components/Card/Card';


function App() {
  return (
    <div>
      <Navbar/>
      <Carusel/>
      {/* <header className="App-header bg-black">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Card
      titulo={"Nuevo Peugeot 208"}
      descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
      img={"https://resizer.glanacion.com/resizer/CMhFbaP1hqkD3JYuUMCw2xWAGqI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OMBSPWHYBJH2XBXFUX3SPBOK2E.jpg"}
      btnText={"Ver mas"}
      />
       <Card
      titulo={"Nuevo Peugeot 208"}
      descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
      img={"https://resizer.glanacion.com/resizer/CMhFbaP1hqkD3JYuUMCw2xWAGqI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OMBSPWHYBJH2XBXFUX3SPBOK2E.jpg"}
      btnText={"Ver mas"}
      />
       <Card
      titulo={"Nuevo Peugeot 208"}
      descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
      img={"https://resizer.glanacion.com/resizer/CMhFbaP1hqkD3JYuUMCw2xWAGqI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OMBSPWHYBJH2XBXFUX3SPBOK2E.jpg"}
      btnText={"Ver mas"}
      />
       <Card
      titulo={"Nuevo Peugeot 208"}
      descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
      img={"https://resizer.glanacion.com/resizer/CMhFbaP1hqkD3JYuUMCw2xWAGqI=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/OMBSPWHYBJH2XBXFUX3SPBOK2E.jpg"}
      btnText={"Ver mas"}
      />
    </div>
  );
}

export default App;
