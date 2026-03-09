import React, { useState, useEffect } from 'react'
import { Code, Menu, X } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.href))

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNewClick = (sectionId) => {
        scrollToSection(sectionId)
        setIsMenuOpen(false)

    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled
            ? 'bg-black/30 backdrop-blur-lg'
            : 'bg-transparent'
            }`}
            style={{ transform: 'translate3d(0,0,0)' }}
        >
            <div className=''>
                <div className=''>
                    {/* logo */}
                    <div className='flex items-center gap-4'>
                        <Code className='w-6 h-6 text-primary' />

                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className='text-2xl font-bold text-white'
                            aria-label='home'>
                            {PERSONAL_INFO.name.split(' ')[0]}

                        </button>

                        {/* dekstop navigation */}
                        <nav className=''>
                            {NAV_LINKS.map(link => (
                                <button key={link.id}
                                    onClick={() => handleNewClick(link.id)}
                                    className={`text-base font-medium transition-all duration-300
                                         ${activeSection === link.id ? 'text-white' : 'text-white/70 hover:text-white'}`}
                                    aria-label={link.label}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        {/* cta button */}
                        <div className=''>
                            <button onClick={() => handleNewClick('contact')}
                                className=''
                            >
                                İletişim

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navbar
