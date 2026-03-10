import React from 'react'
import { Download, Code2, Sparkles } from 'lucide-react'
import { SiReact, SiNextdotjs, SiJavascript, SiSwift, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const About = () => {

    // Skills
    const skills = [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'React Native', icon: SiReact, color: '#61DAFB' },
        { name: 'Swift', icon: SiSwift, color: '#FA7343' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ]

    return (
        <section id='about' className='relative py-24 bg-black overflow-hidden'>
            <RadialGradientBackground variant='hero' />

            <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24'>

                {/* section header */}
                <FadeIn delay={0}>
                    <div className='flex items-center gap-3 mb-4'>
                        <Code2 className='w-5 h-5 text-primary' />
                        <span className='text-primary text-sm font-medium tracking-widest uppercase'>Hakkımda</span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-semibold text-white mb-16'>
                        Beni Tanıyın<br />

                    </h2>
                </FadeIn>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>

                    {/* left: bio */}
                    <div>
                        <FadeIn delay={100}>
                            <div className='space-y-5 mb-10'>
                                {PERSONAL_INFO.bio.map((paragraph, i) => (
                                    <p key={i} className='text-white/70 text-lg leading-relaxed font-light'>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </FadeIn>



                        {/* download cv */}

                    </div>

                    {/* right: skills */}
                    <FadeIn delay={150}>
                        <div className='flex items-center gap-2 mb-6'>
                            <Sparkles className='w-5 h-5 text-primary' />
                            <span className='text-white font-medium text-lg'>Teknolojiler</span>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                            {skills.map((skill, i) => (
                                <div key={i}
                                    className='flex items-center gap-3 px-4 py-3 rounded-xl
                                    bg-white/5 border border-white/10 hover:border-primary/30
                                    hover:bg-white/10 transition-all duration-300'
                                >
                                    <skill.icon style={{ color: skill.color }} className='w-6 h-6 shrink-0' />
                                    <span className='text-white/80 text-sm font-medium'>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    )
}

export default About