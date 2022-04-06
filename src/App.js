import React from "react";
import "./styles.css";
import Header from "./components/vHeader";
import Domains from "./components/Domains";
import { BrowserRouter as Router } from "react-router-dom";
import Events from "./components/vevents" ;
import BlogsArticles from "./components/vblogs"
import {Routes , Route} from 'react-router-dom'
import BlogsPage from './components/blogsPage'
import Homemain from "./components/Homemain";
import EventsPage from './components/eventspage'

class App extends React.Component {
  render() {
      return (
          <div className="App">
          <Routes>
                  <Route path='/' element={<Homemain />}></Route>
                  <Route path='/blogs' element={<BlogsPage />}></Route>
                  <Route path='/events' element={<EventsPage />}></Route>
          </Routes>
          </div>
      );
  }
}

export default App;
