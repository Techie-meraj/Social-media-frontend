import React from 'react'
import { FaSlackHash } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { ImYoutube2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4">
    <aside className="grid-flow-col items-center">
      <FaSlackHash className='text-2xl'/>
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </aside>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a>
      <FaSquareXTwitter className='text-2xl'/>
      </a>
      <a>
      <ImYoutube2 className='text-3xl'/>
      </a>
      <a>
      <IoLogoFacebook className='text-2xl'/>
      </a>
    </nav>
  </footer>
  )
}

export default Footer