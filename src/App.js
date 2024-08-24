  import './App.css';
  import HomePage from './HomePage';
  import Mpc from './Mpc';
  import {Route, Routes, BrowserRouter} from "react-router-dom"
  import ScrollToTop from './ScrollToTop';
import ContentPage from './ContentPage';
  function App() {
    console.log(navigator.userAgent);
    return (
      <div className="App">
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route path='/' element = {<HomePage/>} />
            <Route path='/MaheshwariPowerCards' element = {<Mpc/>} />
            <Route path='/Content' element = {<ContentPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
