import React from 'react'
import Link from 'next/link'

const Navbar = () => (
    <nav className='bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16 items-center'>
                {/* Logo */}
                <div className='font-bold text-2xl text-white hover:text-blue-100 transition-colors duration-300'>
                    <Link href="/" className='flex items-center gap-2'>
                        <div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center'>
                            <span className='text-blue-600 font-bold text-lg'>S</span>
                        </div>
                        ShortifyLinks
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center space-x-8'>
                    <ul className='flex items-center space-x-6'>
                        <Link href="/" className='flex items-center gap-1 text-white hover:text-blue-100 transition-all duration-300 hover:scale-105'>
                            <span className="material-icons text-lg">home</span>
                            <span>Home</span>
                        </Link>
                        <Link href="/about" className='flex items-center gap-1 text-white hover:text-blue-100 transition-all duration-300 hover:scale-105'>
                            <span className="material-icons text-lg">info</span>
                            <span>About</span>
                        </Link>
                        <Link href="/shorten" className='flex items-center gap-1 text-white hover:text-blue-100 transition-all duration-300 hover:scale-105'>
                            <span className="material-icons text-lg">sync</span>
                            <span>Shorten</span>
                        </Link>
                        <Link href="/contact" className='flex items-center gap-1 text-white hover:text-blue-100 transition-all duration-300 hover:scale-105'>
                            <span className="material-icons text-lg">contact_mail</span>
                            <span>Contact</span>
                        </Link>
                    </ul>

                    {/* CTA Buttons */}
                    <div className='flex items-center gap-3 ml-6'>
                        <Link href="/shorten">
                            <button className='bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2'>
                                <span className="material-icons text-base">rocket_launch</span>
                                Try Now
                            </button>
                        </Link>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <button className='border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2'>
                                <span className="material-icons text-base">code</span>
                                GitHub
                            </button>
                        </a>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className='md:hidden'>
                    <button className='text-white hover:text-blue-100 p-2'>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Navigation */}
        <div className='md:hidden bg-blue-700'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
                <Link href="/" className='flex items-center gap-2 text-white hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium'>
                    <span className="material-icons text-lg">home</span>
                    Home
                </Link>
                <Link href="/about" className='flex items-center gap-2 text-white hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium'>
                    <span className="material-icons text-lg">info</span>
                    About
                </Link>
                <Link href="/shorten" className='flex items-center gap-2 text-white hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium'>
                    <span className="material-icons text-lg">sync</span>
                    Shorten
                </Link>
                <Link href="/contact" className='flex items-center gap-2 text-white hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium'>
                    <span className="material-icons text-lg">contact_mail</span>
                    Contact
                </Link>
                <div className='border-t border-blue-500 mt-4 pt-4'>
                    <Link href="/shorten">
                        <button className='w-full bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold mb-2 flex items-center justify-center gap-2'>
                            <span className="material-icons text-base">rocket_launch</span>
                            Try Now
                        </button>
                    </Link>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <button className='w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2'>
                            <span className="material-icons text-base">code</span>
                            GitHub
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar
