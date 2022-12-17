import React from 'react'
import './../assets/styles/footer.css'
function Footer() {
    const currentYear = new Date().getFullYear();
    const wedev = '<We-Dev/>'
  return (
    <div className='footer'>
        <div className="col-md-6 col-lg-8">
            <p className="copyright">
  Copyright &copy; {currentYear} {wedev} </p>

          </div>
    </div>
  )
}

export default Footer