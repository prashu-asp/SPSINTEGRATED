import React from "react";
import "../styles.css";
import Header from "./vHeader";
import Domains from "./Domains";
import { BrowserRouter as Router } from "react-router-dom";
import Events from "./vevents" ;
import BlogsArticles from "./vblogs"
import {Routes , Route} from 'react-router-dom'
import BlogsPage from './blogsPage'

function Homemain() {
  return (
    
    <div className="App">
      
     
        <Header />
      
      <Domains/>
      <Events/>
      <BlogsArticles/>
    </div>
  
  );
}
export default Homemain;
