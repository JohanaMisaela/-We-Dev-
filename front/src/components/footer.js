import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
        <div class="col-md-6 col-lg-8">
            <p class="copyright">
  Copyright &copy; {currentYear} </p>
  <p class="copyright">All rights reserved. </p>
          </div>
    </div>
  )
}

export default Footer