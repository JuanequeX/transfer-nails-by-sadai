import React from 'react'

const Footer = () => {
  return (
    <section className="footer-container">
      <div className='footer-container__copyright'>
        <small>
          Made with ♥︎ by <a href='https://juanequex.github.io/'>Juanequex</a>
        </small>
        <small>
          All Rights Reserved &#169; {(new Date().getFullYear())}
        </small>
      </div>
    </section>
  )
}

export default Footer
