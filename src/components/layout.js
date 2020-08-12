import React from 'react';
import Header from './header.js';
import Footer from './footer.js'

export default ({ children }) => {
  return (
    <div>
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}
