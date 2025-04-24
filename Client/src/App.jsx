import "./App.css";
import Nav from "./components/nav/Nav";
// import Card from "./components/card/Card"
import Electronics from "./components/electronics/Electronics";
import Mens from "./components/mens/Mens";
import Womens from "./components/womens/Womens";
import Jewelery from "./components/jewelery/Jewelery";
import Home from "./components/home/Home";
import SignUp from "./pages/signup/SignUp";
import SignIn from"./pages/signin/SignIn";
import ProductDetails from "./components/productdetails/ProductDetails";
import { Route ,Routes} from "react-router-dom";
function App(){
  return(
    <div className="app">
      <Nav/>
      
     <Routes>
     <Route path={"/"} element={<Home/>}/>
     

     <Route path={"/electronics"} element={<Electronics/>}/>
     <Route path={"/jewelery"} element={<Jewelery/>}/>
     <Route path={"/mens"} element={<Mens/>}/>
     <Route path={"/womens"} element={<Womens/>}/>
    
     <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<SignIn/>}/>

     <Route path="/productdetails/:id" element={<ProductDetails />} />

     </Routes>
     

    </div>
  )
}
export default App;