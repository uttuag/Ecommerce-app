import React from 'react'
import Header from './header.js';
import Footer from './footer.js';

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
        <main style={{minHeight:'80vh'}}>
          {children}
        </main>
      <Footer/>
    </div>
  )
}
export default Layout;