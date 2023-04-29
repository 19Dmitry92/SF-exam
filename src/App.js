import './App.css';
import Main from './components/Main/Main';
import About from './components/About/About'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import {useState} from "react";
import Report from "./components/Report/Report";
import DisplayReports from "./components/DisplayReports/DisplayReports";

function App() {
    const [IsLogin, setIsLogin] = useState(false);
  return (<BrowserRouter> {/*Обертка для роутинга*/}
        <div className='main-content'>
          <Header IsLogin={IsLogin}
                  setIsLogin = {setIsLogin}
                 />
          <div className='app-wrapper-content'>
            <Routes> {/*Обертка для роутинга*/}
                <Route path='/*' element={<Main IsLogin={IsLogin}/>}/>
                <Route path='/about/*' element={<About
                    IsLogin={IsLogin}
                    />}/>
                <Route path='/register/*' element={<Registration/>}/>
                <Route path='/login/*' element={<Login setIsLogin = {setIsLogin}/>}/>
                <Route path='/report/*' element={<Report setIsLogin = {setIsLogin}/>}/>
                <Route path='/display/*' element={<DisplayReports/>}/>

            </Routes> {/*Обертка для роутинга*/}
          </div>
            <Footer/>
        </div>
      </BrowserRouter> /*Обертка для роутинга*/
  );
}
export default App;

