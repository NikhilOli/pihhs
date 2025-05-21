import React from 'react'
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-tertiary-100 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                <FaXTwitter size={22}  style={{ color: '#009961' }} />
                <FiLinkedin style={{ color: '#009961' }} size={22} />
                <FaInstagram style={{ color: '#009961' }} size={22} />
                <FaWhatsapp style={{ color: '#009961' }} size={22} />
                </div>
            </nav>
            <aside>
                <p><span className='text-secondary-200'>Copyright</span> © {new Date().getFullYear()} - All right reserved by <span className='text-secondary-200'>Passion Institute of Handwriting Honing Skills</span></p>
            </aside>
        </footer>
    )
}

export default Footer;