"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    blogs: "Blogs/News",
    consultancy: "Consultancy",

    // Home Page
    welcome: "Welcome to AgriTech Platform",
    homeDescription:
      "Your comprehensive solution for modern agriculture. Get crop recommendations, share knowledge, and stay updated with the latest farming techniques.",

    // Form Section
    submitBlog: "Submit Blog/News",
    title: "Title",
    category: "Category",
    content: "Content",
    blog: "Blog",
    news: "News",
    submit: "Submit",
    reset: "Reset",
    titlePlaceholder: "Enter title...",
    contentPlaceholder: "Write your content here...",

    // Dashboard
    userInfo: "User Information",
    name: "Name",
    email: "Email",
    state: "State",
    soilType: "Soil Type",
    budget: "Budget",
    recommendedCrop: "Recommended Crop",
    dailyUpdates: "Daily Updates",
    weather: "Weather",
    pestTips: "Pest Management Tips",

    // Common
    language: "Language",
    english: "English",
    hindi: "Hindi",
  },
  hi: {
    // Navigation
    home: "होम",
    blogs: "ब्लॉग/समाचार",
    consultancy: "सलाह",

    // Home Page
    welcome: "एग्रीटेक प्लेटफॉर्म में आपका स्वागत है",
    homeDescription:
      "आधुनिक कृषि के लिए आपका व्यापक समाधान। फसल की सिफारिशें प्राप्त करें, ज्ञान साझा करें, और नवीनतम कृषि तकनीकों के साथ अपडेट रहें।",

    // Form Section
    submitBlog: "ब्लॉग/समाचार जमा करें",
    title: "शीर्षक",
    category: "श्रेणी",
    content: "सामग्री",
    blog: "ब्लॉग",
    news: "समाचार",
    submit: "जमा करें",
    reset: "रीसेट",
    titlePlaceholder: "शीर्षक दर्ज करें...",
    contentPlaceholder: "यहाँ अपनी सामग्री लिखें...",

    // Dashboard
    userInfo: "उपयोगकर्ता जानकारी",
    name: "नाम",
    email: "ईमेल",
    state: "राज्य",
    soilType: "मिट्टी का प्रकार",
    budget: "बजट",
    recommendedCrop: "सुझाई गई फसल",
    dailyUpdates: "दैनिक अपडेट",
    weather: "मौसम",
    pestTips: "कीट प्रबंधन सुझाव",

    // Common
    language: "भाषा",
    english: "अंग्रेजी",
    hindi: "हिंदी",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
