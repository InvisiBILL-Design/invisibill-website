import { useState } from 'react'
import { ChevronLeft, Sparkles, Heart, Receipt } from 'lucide-react'

interface EmeraldSplashProps {
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

export function EmeraldSplash({
  id,
  chapter,
  chapterTitle,
  title,
  subtitle,
  highlight,
  eyeRoll,
  mythicIntro,
  originalNote,
  description,
  steps,
  signature,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onGetStarted,
  isFirst,
  isLast
}: EmeraldSplashProps) {
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
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-purple-50 relative overflow-hidden">
      
      {/* Floating magical elements - InvisiBILL's world */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gentle floating receipts */}
        <div className="absolute top-20 left-16 opacity-20 animate-pulse">
          <Receipt className="w-8 h-8 text-pink-400 transform -rotate-12" />
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-pulse" style={{animationDelay: '1s'}}>
          <Receipt className="w-6 h-6 text-purple-400 transform rotate-12" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-20 animate-pulse" style={{animationDelay: '2s'}}>
          <Receipt className="w-7 h-7 text-pink-300 transform rotate-6" />
        </div>
        
        {/* Soft sparkles */}
        <div className="absolute top-32 right-32 opacity-30">
          <Sparkles className="w-4 h-4 text-purple-300 animate-ping" />
        </div>
        <div className="absolute bottom-40 right-16 opacity-25" style={{animationDelay: '1.5s'}}>
          <Sparkles className="w-3 h-3 text-pink-300 animate-ping" />
        </div>
        
        {/* Heart for emotional labor */}
        <div className="absolute top-1/2 left-12 opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}>
          <Heart className="w-5 h-5 text-pink-400" />
        </div>
      </div>

      {/* Navigation with InvisiBILL personality */}
      <div className="relative z-10 px-8 pt-16 pb-8">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          
          {/* Chapter indicator - like a book */}
          {chapter && (
            <div className="text-purple-600 font-serif text-sm italic opacity-80">
              {chapter}
            </div>
          )}
          
          {!isFirst && (
            <button
              onClick={() => handleTransition('prev')}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all shadow-lg border border-white/50"
            >
              <ChevronLeft className="w-5 h-5 text-purple-700" />
            </button>
          )}
          
          {/* Progress - like book pages */}
          <div className="flex items-center space-x-3">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index < currentStep
                    ? 'w-8 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full'
                    : index === currentStep - 1
                    ? 'w-6 h-2 bg-pink-300 rounded-full'
                    : 'w-3 h-2 bg-purple-200 rounded-full opacity-50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => handleTransition('next')}
            className="text-purple-600 hover:text-purple-800 transition-colors font-handwriting"
          >
            {isLast ? 'Begin' : 'Continue'}
          </button>
        </div>
      </div>

      {/* Main content - InvisiBILL's signature style */}
      <div className="relative z-10 px-8 pb-12">
        <div className="max-w-lg mx-auto">

          {/* Screen 1: Magical introduction */}
          {id === 1 && (
            <div className="space-y-10 text-center">
              
              {/* Mythic intro */}
              {mythicIntro && (
                <div className="text-purple-600 italic font-serif opacity-90">
                  {mythicIntro}
                </div>
              )}
              
              {/* Main title with InvisiBILL style */}
              <div className="space-y-6">
                <h1 className="text-3xl leading-tight text-gray-900 font-handwriting">
                  {title}
                </h1>
                
                <p className="text-lg text-gray-700 leading-relaxed font-handwriting">
                  {subtitle}
                </p>
              </div>
              
              {/* Signature confidence */}
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                  <p className="text-2xl text-gray-900 font-handwriting-bold">
                    {highlight}
                  </p>
                  
                  {/* Subtle decorative underline */}
                  <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                </div>
                
                {/* Floating heart for emphasis */}
                <div className="absolute -top-2 -right-2">
                  <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-sm animate-pulse">
                    💅
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-5 px-8 rounded-3xl transition-all shadow-lg font-handwriting text-lg"
              >
                Continue the story
              </button>
            </div>
          )}

          {/* Screen 2: The recognition moment */}
          {id === 2 && (
            <div className="space-y-10 text-center">
              
              {mythicIntro && (
                <div className="text-purple-600 italic font-serif opacity-90">
                  {mythicIntro}
                </div>
              )}
              
              <div className="space-y-6">
                <h1 className="text-3xl text-gray-900 leading-tight font-handwriting">
                  {title}
                </h1>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                  <p className="text-xl text-gray-800 leading-relaxed font-handwriting mb-6">
                    {subtitle}
                  </p>
                  
                  {/* The eye roll - prominent but elegant */}
                  <div className="relative">
                    <div className="text-8xl mb-4 filter drop-shadow-lg">
                      {highlight}
                    </div>
                    
                    {/* Sparkle around the eye roll */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                      <Sparkles className="w-4 h-4 text-yellow-400 opacity-60" />
                    </div>
                  </div>
                </div>
                
                {eyeRoll && (
                  <div className="bg-gray-900 text-white rounded-3xl p-6 shadow-xl">
                    <p className="text-lg font-handwriting-bold">
                      {eyeRoll}
                    </p>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-5 px-8 rounded-3xl transition-all shadow-lg font-handwriting text-lg"
              >
                Exactly 
              </button>
            </div>
          )}

          {/* Screen 3: The magical toolkit */}
          {id === 3 && (
            <div className="space-y-8">
              
              {mythicIntro && (
                <div className="text-center text-purple-600 italic font-serif opacity-90">
                  {mythicIntro}
                </div>
              )}
              
              <div className="text-center space-y-6">
                <h1 className="text-3xl text-gray-900 leading-tight font-handwriting">
                  {title}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed font-handwriting">
                  {subtitle}
                </p>
              </div>
              
              {/* Feature highlight - magical box */}
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-3xl p-8 shadow-xl text-center">
                  <h2 className="text-2xl font-handwriting-bold mb-2">
                    {highlight}
                  </h2>
                </div>
                
                {/* Corner sparkle */}
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              
              {/* Steps - like spell components */}
              {steps && (
                <div className="space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-handwriting-bold flex-shrink-0 shadow-lg">
                        1
                      </div>
                      <div>
                        <h3 className="font-handwriting-bold text-gray-900 mb-2">Log every unappreciated task</h3>
                        <p className="text-gray-700 text-sm leading-relaxed font-handwriting">
                          {steps.step1}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-handwriting-bold flex-shrink-0 shadow-lg">
                        2
                      </div>
                      <div>
                        <h3 className="font-handwriting-bold text-gray-900 mb-2">We'll use AI to assign real world roles</h3>
                        <p className="text-gray-700 text-sm leading-relaxed font-handwriting">
                          {steps.step2}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-pink-400 text-white rounded-full flex items-center justify-center text-sm font-handwriting-bold flex-shrink-0 shadow-lg">
                        3
                      </div>
                      <div>
                        <h3 className="font-handwriting-bold text-gray-900 mb-2">Get validating invoices</h3>
                        <p className="text-gray-700 text-sm leading-relaxed font-handwriting">
                          {steps.step3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Description with magical touch */}
              {description && (
                <div className="bg-purple-50/80 backdrop-blur-sm border border-purple-200/50 rounded-2xl p-6 shadow-lg">
                  <p className="text-gray-800 text-sm leading-relaxed font-handwriting">
                    {description}
                  </p>
                </div>
              )}
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-5 px-8 rounded-3xl transition-all shadow-lg font-handwriting text-lg"
              >
                Show me how
              </button>
            </div>
          )}

          {/* Screen 4: Personal letter */}
          {id === 4 && (
            <div className="space-y-8">
              
              {mythicIntro && (
                <div className="text-center text-purple-600 italic font-serif opacity-90">
                  {mythicIntro}
                </div>
              )}
              
              <div className="text-center">
                <h1 className="text-2xl text-gray-900 mb-8 font-handwriting">
                  {title}
                </h1>
              </div>
              
              {/* Personal note - like a handwritten letter */}
              {originalNote && (
                <div className="relative">
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl space-y-5">
                    {originalNote.split('\n\n').map((paragraph, i) => (
                      <p 
                        key={i} 
                        className={`leading-relaxed font-handwriting ${
                          paragraph.includes('receipts 💸') ? 'text-pink-600' :
                          paragraph.includes('taken for granted') ? 'text-purple-600' :
                          paragraph.includes('FYI: your labor') ? 'text-gray-900 font-handwriting-bold' :
                          'text-gray-700'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Heart in corner like a seal */}
                  <div className="absolute -bottom-2 -right-2">
                    <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-white shadow-lg">
                      ❤️
                    </div>
                  </div>
                </div>
              )}
              
              {/* Signature with flourish */}
              {signature && (
                <div className="text-center">
                  <div className="inline-block bg-pink-50/80 backdrop-blur-sm border border-pink-200/50 rounded-2xl p-6 shadow-lg">
                    {signature.split('\n').map((line, i) => (
                      <div key={i} className={`font-handwriting ${i === 0 ? 'font-handwriting-bold text-pink-700 text-lg' : 'text-pink-600'}`}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Final magical button */}
              <div className="relative">
                <button
                  onClick={() => handleTransition('next')}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-6 px-8 rounded-3xl transition-all text-xl shadow-xl font-handwriting-bold"
                >
                  🚀 Get My Receipts
                </button>
                
                {/* Sparkles around the final button */}
                <div className="absolute -top-1 -left-1">
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-ping" />
                </div>
                <div className="absolute -bottom-1 -right-1">
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-ping" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}