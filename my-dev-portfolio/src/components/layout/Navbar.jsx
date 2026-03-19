import React, { useState, useEffect } from 'react'
import { Code, Menu, X } from 'lucide-react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy'
import { useLanguage } from '../../context/LanguageContext'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const { content, setLanguage, language } = useLanguage()
    const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id))

    const navLinks = NAV_LINKS.map(link => ({
        ...link,
        label: content.navLinks[link.id],
    }))

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
            <div className='max-w-330 mx-auto px-5'>
                <div className='grid grid-cols-3 items-center'>
                    {/* left: logo */}
                    <div className='flex items-center gap-3 -ml-4'>
                        <Code className='w-5 h-5 text-primary' />

                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className='text-3xl font-bold text-primary hover:opacity-80 transition-opacity'
                            aria-label='home'>
                            {PERSONAL_INFO.name.split(' ')[0]}

                        </button>
                    </div>

                    {/* center: desktop navigation */}
                    <div className='hidden md:flex items-center justify-center'>
                        <nav className='flex items-center gap-7'>
                            {navLinks.filter(link => link.id !== 'contact').map(link => (
                                <button key={link.id}
                                    onClick={() => handleNewClick(link.id)}
                                    className={`text-lg font-medium transition-all duration-300 ${activeSection === link.id ? 'text-white' : 'text-white/70 hover:text-white'}`}
                                    aria-label={link.label}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* right: CTA + mobile menu */}
                    <div className='flex items-center justify-end gap-2'>
                        <div className='hidden md:flex items-center gap-2'>
                            <button
                                onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                                className='px-3 py-2 bg-white/5 text-white/80 text-sm font-semibold rounded-xl border border-white/15 hover:bg-white/10 transition-all duration-300'
                                aria-label={content.navbar.languageAria}
                            >
                                {content.navbar.languageSwitch}
                            </button>
                            <button onClick={() => handleNewClick('contact')}
                                className='px-7 py-3 bg-white text-[#212121] font-medium text-lg rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300'
                            >
                                {content.navbar.cta}
                            </button>
                        </div>

                        {/* mobile menu toggle */}
                        <button onClick={() => setIsMenuOpen(prev => !prev)} className='md:hidden p-2'>
                            {isMenuOpen ? <X className='w-6 h-6 text-white' /> : <Menu className='w-6 h-6 text-white' />}
                        </button>
                    </div>

                </div>

                {/* mobile menu overlay */}
                {isMenuOpen && (
                    <div className='md:hidden fixed inset-0 z-50 bg-black p-6 flex flex-col'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3 -ml-6'>
                                <Code className='w-6 h-6 text-primary' />
                                <span className='text-3xl font-bold text-primary'>{PERSONAL_INFO.name.split(' ')[0]}</span>
                            </div>

                            <button onClick={() => setIsMenuOpen(false)} aria-label='close' className='p-2'>
                                <X className='w-6 h-6 text-white' />
                            </button>
                        </div>

                        <nav className='flex flex-col gap-8 mt-8'>
                            {navLinks.filter(link => link.id !== 'contact').map(link => (
                                <button key={link.id}
                                    onClick={() => handleNewClick(link.id)}
                                    className='text-2xl text-white/80 hover:text-white text-left'
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        <div className='mt-12 mb-12'>
                            <button
                                onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                                className='w-full py-3 mb-3 bg-white/5 text-white/80 font-semibold rounded-[14px] border border-white/15 hover:bg-white/10 transition-all duration-300'
                                aria-label={content.navbar.languageAria}
                            >
                                {content.navbar.languageSwitch}
                            </button>
                            <button onClick={() => handleNewClick('contact')}
                                className='w-full py-4 bg-white text-[#212121] font-medium rounded-[17px] border border-white hover:bg-white/95'
                            >
                                {content.navbar.cta}
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Navbar
