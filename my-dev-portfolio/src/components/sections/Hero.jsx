import React from 'react'
import { PERSONAL_INFO } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import { Star, ChevronDown } from 'lucide-react'
import { SiNextdotjs, SiReact, SiNodedotjs, SiSwift, SiJavascript, SiMongodb } from 'react-icons/si'
import { useLanguage } from '../../context/LanguageContext'

export const Hero = () => {
    const { content } = useLanguage()

    return (
        <section className='relative min-h-screen flex items-center overflow-hidden bg-black'>
            <RadialGradientBackground variant="hero" />

            <div className='relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                    {/* left: text content */}
                    <div className='text-left'>
                        <FadeIn delay={0}>
                            <div className='inline-flex items-center gap-2 px-5 py-2.5 mb-10
                                bg-[#1a2e1a] border border-green-900/30 rounded-full'>
                                <Star className='w-4 h-4 text-green-500 fill-green-500' />
                                <span className='text-[13px] md:text-sm text-green-100/90 tracking-wider font-medium'>
                                    {content.hero.title} | {content.hero.location}
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={150}>
                            <h1 className='text-6xl md:text-8xl lg:text-[100px] xl:text-[110px] font-semibold text-white leading-none mb-10 tracking-tighter'>
                                {content.hero.headingPrefix} <br />
                                <span className='text-white'>{content.hero.headingName}</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={250}>
                            <p className='text-lg md:text-xl text-white/70 max-w-137.5 mb-12 leading-relaxed font-light'>
                                {content.hero.description}
                            </p>
                        </FadeIn>

                        <FadeIn delay={350}>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className='px-10 py-4 bg-white text-black text-lg font-semibold
                                rounded-full hover:bg-gray-200 transition-all duration-300'
                            >
                                {content.hero.cta}
                            </button>
                        </FadeIn>
                    </div>

                    {/* right: developer image */}
                    <FadeIn delay={200}>
                        <div className='relative flex justify-center lg:justify-end'>
                            {/* spinning gradient border wrapper */}
                            <div className='relative w-full max-w-115 p-0.5 rounded-2xl'>
                                {/* spinning gradient layer */}
                                <div
                                    className='absolute inset-0 rounded-2xl animate-spin-slow'
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent 60%, #8dff6933, #8dff6920, #8dff69)'
                                    }}
                                />
                                {/* inner content */}
                                <div className='relative rounded-2xl overflow-hidden'>
                                    <img
                                        src="/images/image1.png"
                                        alt="Yıldız Aydın"
                                        className='w-full h-full object-cover rounded-2xl'
                                    />
                                </div>{/* end inner content */}
                                {/* technology logos — resmin altında */}
                                <div className='flex flex-wrap gap-3 mt-6 justify-center'>
                                    <div className='bg-black/60 backdrop-blur-sm rounded-xl p-2.5'>
                                        <SiReact className='w-6 h-6 text-cyan-400' />
                                    </div>
                                    <div className='bg-black/60 backdrop-blur-sm rounded-xl p-2.5'>
                                        <SiNextdotjs className='w-6 h-6 text-white' />
                                    </div>
                                    <div className='bg-black/60 backdrop-blur-sm rounded-xl p-2.5'>
                                        <SiNodedotjs className='w-6 h-6 text-green-500' />
                                    </div>
                                    <div className='bg-black/60 backdrop-blur-sm rounded-xl p-2.5'>
                                        <SiReact className='w-6 h-6 text-cyan-400' />
                                    </div>
                                    <div className='bg-black/60 backdrop-blur-sm rounded-xl p-2.5'>
                                        <SiSwift className='w-6 h-6 text-orange-400' />
                                    </div>
                                    <div className='bg-black/60 backdrop-blur-sm rounded-xl p-2.5'>
                                        <SiJavascript className='w-6 h-6 text-yellow-400' />
                                    </div>
                                    <div className='bg-black/60 backdrop-blur-sm rounded-xl p-2.5'>
                                        <SiMongodb className='w-6 h-6 text-green-400' />
                                    </div>
                                </div>
                            </div>{/* end gradient border wrapper */}
                        </div>
                    </FadeIn>

                </div>
            </div>

            {/* scroll indicator */}
            <button onClick={() => scrollToSection('about')}
                className='absolute bottom-8 left-1/2  -translate-x-1/2 animate-bounce'
            >
                <ChevronDown className="" />

            </button>
        </section>
    )
}

export default Hero