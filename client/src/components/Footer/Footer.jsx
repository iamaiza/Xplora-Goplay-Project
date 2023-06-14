import React from 'react'
import FooterProducts from './FooterProducts'
import FooterNewsletter from './FooterNewsletter'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className='footer text-white pt-32 pb-12'>
        <FooterProducts />
        <FooterNewsletter />
        <FooterLinks />
    </footer>
  )
}

export default Footer