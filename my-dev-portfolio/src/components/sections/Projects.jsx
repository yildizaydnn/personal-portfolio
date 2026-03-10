import React, { useState } from 'react'
import { Github, ExternalLink, Layers } from 'lucide-react'
import { projects } from '../../data/project'
import FadeIn from '../animations/FadeIn'
import RadialGradientBackground from '../backgrounds/RadialGradientBackground'

const filterCategories = ['Tümü', 'Web', 'Mobil', '3D/AR']

const getImages = (project) => {
    const raw = project.images || project.image
    if (!raw) return []
    return Array.isArray(raw) ? raw : [raw]
}

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('Tümü')
    const [activeImage, setActiveImage] = useState({})

    const filteredProjects = activeFilter === 'Tümü'
        ? projects
        : projects.filter(p => {
            const cat = p.category.toLowerCase()
            if (activeFilter === 'Web') return cat.includes('web') || (cat.includes('uygulama') && !cat.includes('mobil'))
            if (activeFilter === 'Mobil') return cat.includes('mobil')
            if (activeFilter === '3D/AR') return cat.includes('3d') || cat.includes('ar')
            return true
        })

    const getActiveImageIndex = (id) => activeImage[id] ?? 0

    const handleImageClick = (id, images) => {
        const current = getActiveImageIndex(id)
        setActiveImage(prev => ({ ...prev, [id]: (current + 1) % images.length }))
    }

    return (
        <section id='projects' className='relative py-24 bg-black overflow-hidden'>
            <RadialGradientBackground variant='hero' />

            <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24'>

                {/* section header */}
                <FadeIn delay={0}>
                    <div className='flex items-center gap-3 mb-4'>
                        <Layers className='w-5 h-5 text-primary' />
                        <span className='text-primary text-sm font-medium tracking-widest uppercase'>Projeler</span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-semibold text-white mb-4'>
                        Projelerim
                    </h2>
                    <p className='text-white/50 text-lg font-light mb-12 max-w-xl'>
                        Gerçek kullanıcı ihtiyaçlarından doğan, modern teknolojilerle hayata geçirilen projeler.
                    </p>
                </FadeIn>

                {/* filter tabs */}
                <FadeIn delay={100}>
                    <div className='flex flex-wrap gap-3 mb-14'>
                        {filterCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    ${activeFilter === cat
                                        ? 'bg-primary text-black'
                                        : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* project grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {filteredProjects.map((project, i) => {
                        const images = getImages(project)
                        const imgIndex = getActiveImageIndex(project.id)
                        const currentImage = images[imgIndex]
                        const hasMultiple = images.length > 1

                        return (
                            <FadeIn key={project.id} delay={i * 80}>
                                <div className='group flex flex-col bg-white/5 border border-white/10
                                    rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300'>

                                    {/* image */}
                                    {currentImage && (
                                        <div
                                            className={`relative overflow-hidden h-60 ${hasMultiple ? 'cursor-pointer' : ''}`}
                                            onClick={() => hasMultiple && handleImageClick(project.id, images)}
                                        >
                                            <img
                                                src={currentImage}
                                                alt={project.title}
                                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                            />
                                            {/* overlay */}
                                            <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent' />

                                            {/* category badge */}
                                            <span className='absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm
                                                text-primary text-xs font-medium rounded-full border border-primary/20'>
                                                {project.category}
                                            </span>

                                            {/* image counter */}
                                            {hasMultiple && (
                                                <span className='absolute top-4 right-4 px-2.5 py-1 bg-black/60 backdrop-blur-sm
                                                    text-white/70 text-xs rounded-full border border-white/10'>
                                                    {imgIndex + 1} / {images.length}
                                                </span>
                                            )}

                                            {/* dot indicators */}
                                            {hasMultiple && (
                                                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5'>
                                                    {images.map((_, idx) => (
                                                        <span key={idx}
                                                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300
                                                                ${idx === imgIndex ? 'bg-primary w-4' : 'bg-white/40'}`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* content */}
                                    <div className='flex flex-col flex-1 p-6'>
                                        <h3 className='text-white text-xl font-semibold mb-3'>{project.title}</h3>
                                        <p className='text-white/60 text-sm leading-relaxed mb-5 flex-1'>
                                            {project.description}
                                        </p>

                                        {/* tech tags */}
                                        <div className='flex flex-wrap gap-2 mb-5'>
                                            {project.technologies.map(tech => (
                                                <span key={tech}
                                                    className='px-3 py-1 bg-white/5 border border-white/10
                                                    text-white/70 text-xs rounded-full'>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* metrics */}
                                        {project.metrics && (
                                            <div className='flex items-center gap-2 mb-5'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-primary shrink-0' />
                                                <span className='text-primary text-xs font-medium'>{project.metrics}</span>
                                            </div>
                                        )}

                                        {/* links */}
                                        <div className='flex gap-3 mt-auto pt-2'>
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} target='_blank' rel='noreferrer'
                                                    className='flex items-center gap-2 px-4 py-2 bg-white/10
                                                    hover:bg-white/20 text-white text-sm rounded-xl transition-all duration-200'>
                                                    <Github className='w-4 h-4' />
                                                    GitHub
                                                </a>
                                            )}
                                            {project.demoUrl && (
                                                <a href={project.demoUrl} target='_blank' rel='noreferrer'
                                                    className='flex items-center gap-2 px-4 py-2 bg-primary/10
                                                    hover:bg-primary/20 text-primary text-sm rounded-xl
                                                    transition-all duration-200 border border-primary/20'>
                                                    <ExternalLink className='w-4 h-4' />
                                                    {project.category === 'Mobil Uygulama' ? 'App Store' : 'Demo'}
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </FadeIn>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Projects