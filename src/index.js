import './index.html';
import './style.less';
import ReactDOM from 'react-dom/client'
import React from 'react'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


const App = () => {
    return(
      <div className='app-wrapper'>
        <Header />
          <Navbar />
            <Profile />
      </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)