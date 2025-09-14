import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
import exampleInvoice from 'figma:asset/26e521a1d14d8eb565ba2d985aae56135a7c5b89.png'
import exampleInterface from 'figma:asset/39f59ca13337ae1a23948d03a9fc14df6e5fe39a.png'

interface ChaoticSplashProps {
  id: number
  chapter?: string
  chapterTitle?: string
  title: string
  subtitle: string
  highlight: string
  bgColor: string
  signature?: string
  eyeRoll?: string
  mythicIntro?: string
  originalNote?: string
  description?: string
  steps?: {
    step1: string
    step2: string 
    step3: string
  }
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrevious: () => void
  onGetStarted: () => void
  isFirst: boolean
  isLast: boolean
}

export function ChaoticSplash({
  id,
  chapter,
  chapterTitle,
  title,
  subtitle,
  highlight,
  bgColor,
  signature,
  eyeRoll,
  mythicIntro,
  originalNote,
  description,
  steps,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onGetStarted,
  isFirst,
  isLast
}: ChaoticSplashProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTransition = (direction: 'next' | 'prev') => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (direction === 'next') {
        isLast ? onGetStarted() : onNext()
      } else {
        onPrevious()
      }
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Desktop/Workspace Background Mess */}
      <div className="absolute inset-0">
        {/* Coffee stains */}
        <div className="absolute top-20 left-32 w-24 h-24 opacity-10">
          <div className="w-full h-full rounded-full bg-amber-600"></div>
          <div className="absolute top-2 left-2 w-20 h-20 rounded-full border-2 border-amber-700"></div>
        </div>
        
        {/* Crumpled paper texture */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-5 transform rotate-12">
          <div className="w-full h-full bg-gray-400 rounded-xl"></div>
        </div>
        
        {/* Pen marks / scribbles */}
        <svg className="absolute top-40 right-20 w-20 h-20 opacity-20 transform -rotate-45" viewBox="0 0 100 100">
          <path d="M10 10 Q50 50 90 10 Q50 70 10 90" stroke="#ec4899" strokeWidth="3" fill="none"/>
        </svg>
        
        {/* More scattered elements */}
        <div className="absolute bottom-32 left-10 w-6 h-6 bg-pink-400 rounded-full opacity-30 transform rotate-45"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-1 bg-violet-500 opacity-40 transform -rotate-12"></div>
      </div>

      {/* Floating Sticky Notes with Quotes */}
      <div className="absolute top-16 right-4 transform rotate-6 z-20">
        <div className="bg-yellow-200 p-3 shadow-lg border-l-4 border-yellow-400">
          <p className="text-sm text-gray-800 leading-tight font-handwriting">
            "We already know<br/>you're enough" 💅
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-20 transform -rotate-3 z-20">
        <div className="bg-pink-200 p-4 shadow-lg border-l-4 border-pink-400">
          <p className="text-sm text-gray-800 font-handwriting-bold">
            keep the<br/>receipts 💸
          </p>
        </div>
      </div>

      <div className="absolute top-1/3 left-8 transform rotate-12 z-20">
        <div className="bg-violet-200 p-3 shadow-lg border-l-4 border-violet-400">
          <p className="text-xs text-gray-800 font-handwriting">
            thankless tasks<br/>everywhere
          </p>
        </div>
      </div>

      {/* Main Navigation - Intentionally Askew */}
      <div className="relative z-30 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          
          {/* Back button - slightly off */}
          <div className="transform -rotate-1">
            {!isFirst && (
              <button
                onClick={() => handleTransition('prev')}
                className="bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all transform hover:-rotate-2"
              >
                <ArrowRight className="w-5 h-5 rotate-180 text-gray-700" />
              </button>
            )}
          </div>

          {/* Progress - Messy dots */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                  index < currentStep
                    ? `bg-pink-500 scale-125 ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`
                    : index === currentStep - 1
                    ? 'bg-pink-300 scale-110'
                    : 'bg-gray-300 scale-75'
                }`}
              />
            ))}
          </div>

          {/* Next button - deliberately prominent but chaotic */}
          <div className="transform rotate-2">
            <button
              onClick={() => handleTransition('next')}
              className={`${
                isLast 
                  ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-4 text-lg font-bold' 
                  : 'bg-gray-800 text-white px-6 py-3'
              } rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:rotate-1 border-4 border-white`}
            >
              {isLast ? '🚀 GET MY RECEIPTS!' : 'Next →'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Breaking All Rules */}
      <div className="relative z-10 px-6 py-8 max-w-6xl mx-auto">

        {/* Screen 1: Chaotic Welcome - READABLE VERSION */}
        {id === 1 && (
          <div className="space-y-8 min-h-[600px] relative">
            
            {/* Main readable title in center */}
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl text-gray-800 font-handwriting-bold transform -rotate-1 leading-tight">
                  Welcome to the
                </h1>
                <div className="text-6xl md:text-8xl text-pink-500 font-handwriting-bold transform rotate-1 leading-none">
                  OPPOSITE
                </div>
                <div className="text-4xl md:text-5xl text-purple-600 font-handwriting transform -rotate-0.5">
                  of every other wellness app
                </div>
              </div>
              
              {/* Subtitle box - readable but messy */}
              <div className="transform rotate-1 mx-auto max-w-2xl">
                <div className="bg-white border-4 border-pink-300 p-6 shadow-xl transform -rotate-1 relative">
                  {/* Coffee stain on the note */}
                  <div className="absolute top-2 right-4 w-8 h-8 bg-amber-200/40 rounded-full"></div>
                  <div className="absolute top-3 right-5 w-6 h-6 bg-amber-300/30 rounded-full"></div>
                  
                  <p className="text-xl text-gray-800 leading-relaxed font-handwriting">
                    We're not here to remind you to breathe, journal, or "find balance." 
                  </p>
                  <p className="text-lg text-pink-600 font-handwriting-bold mt-2">
                    You already have enough apps telling you what's wrong with you.
                  </p>
                </div>
              </div>
              
              {/* Emphasis with handwritten feel */}
              <div className="transform rotate-2">
                <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white p-6 rounded-2xl shadow-2xl border-4 border-white max-w-md mx-auto">
                  <p className="text-3xl font-handwriting-bold text-center">
                    {highlight}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Scattered decorative elements - not blocking text */}
            <div className="absolute top-10 left-8 text-pink-400 font-handwriting transform -rotate-12">
              ✨ finally!
            </div>
            
            <div className="absolute bottom-20 right-12 text-violet-500 font-handwriting-bold transform rotate-12">
              about time →
            </div>
            
            <div className="absolute top-1/2 right-8 text-gray-400 font-handwriting transform rotate-45 text-sm">
              (no more<br/>toxic positivity)
            </div>
            
            {/* Hand-drawn arrow */}
            <div className="absolute bottom-32 left-16 transform rotate-12">
              <svg className="w-16 h-16 text-pink-400" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10 50 Q30 30 50 50 Q70 70 90 50 L85 45 L90 50 L85 55 Z"/>
              </svg>
            </div>
          </div>
        )}

        {/* Screen 2: The Recognition - Messy realization */}
        {id === 2 && (
          <div className="space-y-8">
            
            {/* Question scattered */}
            <div className="relative min-h-[400px]">
              <h1 className="text-4xl text-gray-800 transform -rotate-1 absolute top-0 left-0 font-handwriting-bold">
                What we
              </h1>
              <span className="text-5xl text-red-500 font-handwriting-bold transform rotate-2 absolute top-12 left-32 underline">
                don't
              </span>
              <span className="text-4xl text-gray-800 transform -rotate-1 absolute top-24 left-64 font-handwriting-bold">
                know is...
              </span>
              
              {/* Revelation in a torn paper effect */}
              <div className="absolute top-40 left-10 transform -rotate-2">
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-8 shadow-xl border-4 border-dashed border-amber-400 max-w-lg">
                  <p className="text-lg text-gray-800 leading-relaxed font-handwriting">
                    {subtitle}
                  </p>
                  
                  {/* Eye roll emoji - HUGE */}
                  <div className="text-8xl text-center mt-4 transform rotate-12">
                    {highlight}
                  </div>
                </div>
              </div>
              
              {/* Knowing comment */}
              {eyeRoll && (
                <div className="absolute bottom-0 right-0 transform rotate-3">
                  <div className="bg-black text-white p-4 rounded-xl shadow-2xl border-4 border-gray-700">
                    <p className="text-lg font-handwriting-bold">
                      {eyeRoll}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Screen 3: The Receipts - Desktop workspace chaos */}
        {id === 3 && (
          <div className="space-y-8 relative min-h-[600px]">
            
            {/* Title like it's taped to the wall */}
            <div className="absolute top-0 left-0 transform -rotate-1">
              <div className="bg-white border-4 border-purple-400 p-6 shadow-xl">
                <h1 className="text-4xl text-purple-600 font-handwriting-bold">
                  {title}
                </h1>
              </div>
              {/* Tape effect */}
              <div className="absolute -top-2 left-4 w-16 h-8 bg-yellow-200 opacity-60 transform rotate-45"></div>
              <div className="absolute -top-2 right-4 w-16 h-8 bg-yellow-200 opacity-60 transform -rotate-45"></div>
            </div>
            
            {/* App screenshot - pinned like inspiration */}
            <div className="absolute top-20 right-0 transform rotate-2">
              <img 
                src={exampleInterface} 
                alt="App interface"
                className="w-64 rounded-2xl shadow-2xl border-4 border-white"
              />
              {/* Pin effect */}
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-red-700"></div>
            </div>
            
            {/* Steps scattered like notes */}
            <div className="absolute top-64 left-8 transform -rotate-3">
              <div className="bg-pink-200 p-4 shadow-lg border-l-4 border-pink-400 max-w-xs">
                <h3 className="font-handwriting-bold text-gray-800 mb-2">1. Log It</h3>
                <p className="text-sm text-gray-700 font-handwriting">{steps?.step1}</p>
              </div>
            </div>
            
            <div className="absolute top-80 left-80 transform rotate-2">
              <div className="bg-violet-200 p-4 shadow-lg border-l-4 border-violet-400 max-w-xs">
                <h3 className="font-handwriting-bold text-gray-800 mb-2">2. Get It Priced</h3>
                <p className="text-sm text-gray-700 font-handwriting">{steps?.step2}</p>
              </div>
            </div>
            
            <div className="absolute bottom-20 left-20 transform rotate-1">
              <div className="bg-purple-200 p-4 shadow-lg border-l-4 border-purple-400 max-w-xs">
                <h3 className="font-handwriting-bold text-gray-800 mb-2">3. Your Choice</h3>
                <p className="text-sm text-gray-700 font-handwriting">{steps?.step3}</p>
              </div>
            </div>
            
            {/* Big callout */}
            <div className="absolute top-40 left-1/3 transform -rotate-1">
              <div className="bg-gradient-to-r from-pink-500 to-violet-500 text-white p-6 rounded-2xl shadow-2xl border-4 border-white">
                <h2 className="text-3xl font-handwriting-bold text-center">
                  {highlight}
                </h2>
              </div>
            </div>
            
            {/* Description like a designer's note */}
            {description && (
              <div className="absolute bottom-40 right-20 transform rotate-3 max-w-md">
                <div className="bg-yellow-100 p-4 shadow-lg border-2 border-yellow-400">
                  <p className="text-sm text-gray-800 leading-relaxed font-handwriting">
                    {description}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Screen 4: Personal note - Like a letter scattered with evidence */}
        {id === 4 && (
          <div className="space-y-8 relative min-h-[700px]">
            
            {/* Invoice as evidence */}
            <div className="absolute top-0 right-0 transform rotate-3">
              <img 
                src={exampleInvoice} 
                alt="Invoice example"
                className="w-72 rounded-2xl shadow-2xl border-4 border-white"
              />
              {/* Highlighter mark */}
              <div className="absolute top-1/2 left-4 right-4 h-8 bg-yellow-300 opacity-40 transform -rotate-1"></div>
            </div>
            
            {/* Title like it's written on top */}
            <div className="transform -rotate-1">
              <h1 className="text-3xl text-gray-800 font-handwriting-bold max-w-md">
                {title}
              </h1>
            </div>
            
            {/* The actual note - like a real letter */}
            {originalNote && (
              <div className="absolute top-16 left-0 max-w-2xl transform rotate-1">
                <div className="bg-white border-4 border-gray-300 p-8 shadow-2xl">
                  <div className="space-y-4 text-base leading-relaxed">
                    {originalNote.split('\n\n').map((paragraph, i) => (
                      <p 
                        key={i} 
                        className={`font-handwriting ${
                          paragraph.includes('receipts 💸') ? 'text-pink-600 font-handwriting-bold text-lg' :
                          paragraph.includes('taken for granted') ? 'text-violet-600 font-handwriting-bold' :
                          paragraph.includes('Pay me, bitches') ? 'text-red-600 font-handwriting-bold text-xl transform rotate-1' :
                          'text-gray-800'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Signature like it's signed with attitude */}
            {signature && (
              <div className="absolute bottom-20 right-40 transform rotate-2">
                <div className="bg-pink-100 border-2 border-pink-300 p-4 shadow-lg">
                  {signature.split('\n').map((line, i) => (
                    <div key={i} className={`font-handwriting ${i === 0 ? 'font-handwriting-bold text-pink-700 text-lg' : 'text-pink-600'}`}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Hearts scattered around like excitement */}
            <div className="absolute bottom-10 left-10 text-4xl transform rotate-12">💕</div>
            <div className="absolute top-10 left-1/3 text-3xl transform -rotate-12">✨</div>
            <div className="absolute bottom-40 left-1/2 text-3xl transform rotate-45">❤️</div>
          </div>
        )}
      </div>
    </div>
  )
}