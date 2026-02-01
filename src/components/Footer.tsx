import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
]

const services = [
  'Starlink Hardware & Services',
  'Networking Solutions',
  'Software Development',
  'Hardware Sales & Support',
  'IT Training',
]

export default function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/">
              <img
                src={logo}
                alt="Africa IT Solutions Logo"
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Africa IT Solutions is an Authorised Starlink Retailer and leading IT solutions provider in Mozambique, delivering Starlink connectivity and comprehensive technology services.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  {service === 'Starlink Hardware & Services' ? (
                    <Link
                      to="/services#starlink"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {service}
                    </Link>
                  ) : (
                    <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-default">
                      {service}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block">AV Abel Baptista esquina com avenida Samora MACHEL</span>
                <span className="block">Talhão número 374A</span>
                <span className="block">Loja número 3</span>
                <span className="block">Maputo, Mozambique</span>
              </li>
              <li>
                <a
                  href="tel:+258859232670"
                  className="hover:text-white transition-colors"
                >
                  +258 859232670
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@africait.co.mz"
                  className="hover:text-white transition-colors"
                >
                  sales@africait.co.mz
                </a>
              </li>
              <li>
                <a
                  href="mailto:starlink@africait.co.mz"
                  className="hover:text-white transition-colors"
                >
                  starlink@africait.co.mz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Africa IT Solutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

