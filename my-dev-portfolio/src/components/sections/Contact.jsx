import React from 'react'
import { Mail, MapPin, Github, Linkedin, MessageSquare } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'
import { useLanguage } from '../../context/LanguageContext'

const Contact = () => {
    const { content } = useLanguage()

    const contactInfo = [
        {
            icon: Mail,
            label: content.contact.emailLabel,
            value: PERSONAL_INFO.email,
            href: `mailto:${PERSONAL_INFO.email}`,
        },

        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/yildizaydnn',
            href: SOCIAL_LINKS.github,
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/yildiz-aydd',
            href: SOCIAL_LINKS.linkedin,
        },
    ]

    return (
        <section id='contact' className='relative py-24 bg-black overflow-hidden'>
            <RadialGradientBackground variant='hero' />

            <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24'>

                {/* header */}
                <FadeIn delay={0}>
                    <div className='flex items-center gap-3 mb-4'>
                        <MessageSquare className='w-5 h-5 text-primary' />
                        <span className='text-primary text-sm font-medium tracking-widest uppercase'>{content.contact.sectionLabel}</span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-semibold text-white mb-4'>
                        {content.contact.heading}
                    </h2>

                </FadeIn>

                {/* contact cards */}
                <FadeIn delay={100}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {contactInfo.map((item) => {
                            const Icon = item.icon
                            return (
                                <div key={item.label}
                                    className='flex flex-col gap-4 p-6 rounded-2xl bg-white/5
                                    border border-white/10 hover:border-primary/30 hover:bg-white/10
                                    transition-all duration-300'>
                                    <div className='flex items-center justify-center w-12 h-12 rounded-xl
                                        bg-primary/10 border border-primary/20'>
                                        <Icon className='w-5 h-5 text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-white/40 text-xs mb-1'>{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} target='_blank' rel='noreferrer'
                                                className='text-white text-sm font-medium hover:text-primary transition-colors break-all'>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className='text-white text-sm font-medium'>{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </FadeIn>

            </div>
        </section>
    )
}

export default Contact
