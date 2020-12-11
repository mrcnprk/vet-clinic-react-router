import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js'
import { BrowserRouter} from 'react-router-dom'
import Banner from './Banner.js'
import Page from './Page.js'
import Footer from './Footer.js'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="app">
        {<Header/>}
  <section className="banner">{<Banner/>}</section>
        <article className="pages">{<Page />}
        </article>
      {<Footer/>}
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
