import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const LANGUAGE_STORAGE_KEY = 'portfolio-language'
const defaultLanguage = 'tr'

const LanguageContext = createContext(undefined)

const getInitialLanguage = () => {
    if (typeof window === 'undefined') {
        return defaultLanguage
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (storedLanguage === 'tr' || storedLanguage === 'en') {
        return storedLanguage
    }

    const browserLanguage = (window.navigator.language || '').toLowerCase()
    return browserLanguage.startsWith('tr') ? 'tr' : 'en'
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage)

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    }, [language])

    const value = useMemo(() => {
        const content = translations[language] || translations[defaultLanguage]
        return {
            language,
            setLanguage,
            toggleLanguage: () => setLanguage(prev => (prev === 'tr' ? 'en' : 'tr')),
            content,
        }
    }, [language])

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }

    return context
}