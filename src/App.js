import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Error404 from './components/Error404/Error404';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <Router>
    <Navbar/>
     <h2 className='text-center m-3'>Catalogo</h2>
    <div className="row full-height align-items-center">
     <Card className="col col-sm-12 col-md-6 col-lg-4 my-4 "
     titulo={"Ford Fiesta"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://http2.mlstatic.com/D_NQ_NP_757239-MLA52316142169_112022-W.jpg"}
     btnText={"Ver mas"}
     />
      <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Peugeot 208"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://www.lopezmotors.com.uy/wp-content/uploads/2021/04/Peugeot-208-1.2-Active_abr20_03.jpeg"}
     btnText={"Ver mas"}
     />
      <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Peugeot 308"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://rodatiautos.ar/images/listings/2022-08/0433c45a-1661166080-289.jpg"}
     btnText={"Ver mas"}
     />
      <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Fiat Toro"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://http2.mlstatic.com/D_NQ_NP_922711-MLA46444166253_062021-O.jpg"}
     btnText={"Ver mas"}
     />
      <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Ford Ranger"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/2017_Ford_Ranger_Limited.jpg/1200px-2017_Ford_Ranger_Limited.jpg"}
     btnText={"Ver mas"}
     />
      <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Fiat Argo"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://http2.mlstatic.com/D_NQ_NP_640129-MLA50880782387_072022-W.jpg"}
     btnText={"Ver mas"}
     />
      <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Chevrolet Onix"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://http2.mlstatic.com/D_NQ_NP_742933-MLA40721756824_022020-O.jpg"}
     btnText={"Ver mas"}
     />
      <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Chevrolet Cruze"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://http2.mlstatic.com/D_NQ_NP_972423-MLA50219365297_062022-W.jpg"}
     btnText={"Ver mas"}
     />
      <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Volkswagen Gol"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://masselloautos.com/wp-content/uploads/2021/09/TREND-1.jpg"}
     btnText={"Ver mas"}
     />
       <Card className="col col-sm-12 col-md-6 col-lg-4 my-4"
     titulo={"Volkswagen Polo"}
     descripcion={"Mas completo, mas eficiente, mas de lo que queres"}
     img={"https://www.encuentromiauto.com.ar/admin/principal/uploads/imagenes/2022-19-08-02-09-05-23a.jpeg"}
     btnText={"Ver mas"}
     />
     </div> 
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/detail/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      </Router>
  );
}

export default App;
