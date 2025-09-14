import { useState, useEffect } from 'react'
import { ChevronLeft, Receipt, Zap, Target, DollarSign } from 'lucide-react'

interface SharpSurpriseProps {
  id: number
  title: string
  subtitle: string
  highlight: string
  bgColor: string
  signature?: string
  eyeRoll?: string
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

export function SharpSurprise({
  id,
  title,
  subtitle,
  highlight,
  eyeRoll,
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
}: SharpSurpriseProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)

  useEffect(() => {
    if (id === 1) {
      // Surprise animation for the first screen
      const timer = setTimeout(() => setShowSurprise(true), 800)
      return () => clearTimeout(timer)
    }
  }, [id])

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-pink-900 to-purple-900 relative overflow-hidden">
      
      {/* Sharp geometric elements floating */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sharp receipt icons */}
        <div className="absolute top-24 left-12 opacity-30">
          <Receipt className="w-8 h-8 text-pink-400 transform -rotate-45 animate-bounce" />
        </div>
        <div className="absolute top-48 right-16 opacity-25" style={{animationDelay: '1s'}}>
          <Receipt className="w-6 h-6 text-purple-300 transform rotate-45 animate-bounce" />
        </div>
        <div className="absolute bottom-40 left-24 opacity-35" style={{animationDelay: '2s'}}>
          <Receipt className="w-10 h-10 text-pink-500 transform rotate-12 animate-bounce" />
        </div>
        
        {/* Lightning bolts for sharp energy */}
        <div className="absolute top-32 right-32 opacity-40">
          <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute bottom-32 right-20 opacity-30" style={{animationDelay: '1.5s'}}>
          <Zap className="w-4 h-4 text-pink-400 animate-pulse" />
        </div>
        
        {/* Dollar signs for the money theme */}
        <div className="absolute top-1/2 left-8 opacity-25 animate-pulse" style={{animationDelay: '0.5s'}}>
          <DollarSign className="w-7 h-7 text-green-400" />
        </div>
        
        {/* Target for precision */}
        <div className="absolute bottom-48 right-32 opacity-20">
          <Target className="w-8 h-8 text-purple-400 animate-spin" style={{animationDuration: '8s'}} />
        </div>
      </div>

      {/* Sharp, bold navigation */}
      <div className="relative z-10 px-8 pt-16 pb-8">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          
          {!isFirst && (
            <button
              onClick={() => handleTransition('prev')}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-all shadow-2xl border-2 border-pink-400"
            >
              <ChevronLeft className="w-6 h-6 text-pink-400" />
            </button>
          )}
          
          {/* Sharp progress indicators */}
          <div className="flex items-center space-x-4">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  index < currentStep
                    ? 'w-12 h-3 bg-gradient-to-r from-pink-500 to-purple-500 transform rotate-1 shadow-lg'
                    : index === currentStep - 1
                    ? 'w-8 h-3 bg-pink-400 transform -rotate-1 shadow-md'
                    : 'w-4 h-3 bg-gray-600 opacity-40'
                }`}
                style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 15% 100%)' }}
              />
            ))}
          </div>
          
          <button
            onClick={() => handleTransition('next')}
            className="text-pink-400 hover:text-pink-300 transition-colors font-handwriting-bold text-lg"
          >
            {isLast ? 'BEGIN' : 'NEXT'}
          </button>
        </div>
      </div>

      {/* Main content with sharp, surprising elements */}
      <div className="relative z-10 px-8 pb-12">
        <div className="max-w-lg mx-auto">

          {/* Screen 1: Sharp fairy tale opening with surprise */}
          {id === 1 && (
            <div className="space-y-10 text-center">
              
              {/* Animated title reveal */}
              <div className="space-y-8">
                <div className={`transform transition-all duration-1000 ${showSurprise ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                  <h1 className="text-3xl leading-tight text-white font-handwriting-bold">
                    {title}
                  </h1>
                </div>
                
                <div className={`transform transition-all duration-1000 delay-500 ${showSurprise ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                  <p className="text-xl text-pink-200 leading-relaxed font-handwriting">
                    {subtitle}
                  </p>
                </div>
              </div>
              
              {/* Sharp confident statement */}
              <div className={`relative transform transition-all duration-1000 delay-1000 ${showSurprise ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <div className="bg-black/80 backdrop-blur-sm border-2 border-pink-500 rounded-2xl p-8 shadow-2xl">
                  <p className="text-3xl text-pink-400 font-handwriting-bold">
                    {highlight}
                  </p>
                  
                  {/* Sharp decorative line */}
                  <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform rotate-1 shadow-lg"></div>
                </div>
                
                {/* Sharp corner accent */}
                <div className="absolute -top-3 -right-3">
                  <div className="w-8 h-8 bg-pink-500 transform rotate-45 shadow-lg"></div>
                </div>
              </div>
              
              <div className={`transform transition-all duration-1000 delay-1500 ${showSurprise ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <button
                  onClick={() => handleTransition('next')}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-6 px-8 rounded-2xl transition-all shadow-2xl border-2 border-pink-400 font-handwriting-bold text-xl transform hover:scale-105"
                >
                  LET'S GO →
                </button>
              </div>
            </div>
          )}

          {/* Screen 2: Sharp recognition */}
          {id === 2 && (
            <div className="space-y-10 text-center">
              
              <div className="space-y-8">
                <h1 className="text-3xl text-white leading-tight font-handwriting-bold">
                  {title}
                </h1>
                
                <div className="bg-black/80 backdrop-blur-sm border-2 border-purple-500 rounded-2xl p-8 shadow-2xl">
                  <p className="text-xl text-purple-200 leading-relaxed font-handwriting mb-8">
                    {subtitle}
                  </p>
                  
                  {/* Massive eye roll with sharp styling */}
                  <div className="relative">
                    <div className="text-9xl mb-4 filter drop-shadow-2xl animate-pulse">
                      {highlight}
                    </div>
                    
                    {/* Sharp accent lines around eye roll */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-8">
                      <div className="w-16 h-1 bg-yellow-400 transform -rotate-12 shadow-lg"></div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-8">
                      <div className="w-20 h-1 bg-yellow-400 transform rotate-12 shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                {eyeRoll && (
                  <div className="bg-pink-600 text-white border-2 border-pink-400 rounded-2xl p-6 shadow-2xl transform -rotate-1">
                    <p className="text-2xl font-handwriting-bold">
                      {eyeRoll}
                    </p>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-6 px-8 rounded-2xl transition-all shadow-2xl border-2 border-pink-400 font-handwriting-bold text-xl transform hover:scale-105"
              >
                EXACTLY
              </button>
            </div>
          )}

          {/* Screen 3: Sharp toolkit */}
          {id === 3 && (
            <div className="space-y-8">
              
              <div className="text-center space-y-6">
                <h1 className="text-3xl text-white leading-tight font-handwriting-bold">
                  {title}
                </h1>
                <p className="text-xl text-pink-200 leading-relaxed font-handwriting">
                  {subtitle}
                </p>
              </div>
              
              {/* Sharp feature highlight */}
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-2 border-pink-400 rounded-2xl p-8 shadow-2xl text-center transform rotate-1">
                  <h2 className="text-3xl font-handwriting-bold mb-2">
                    {highlight}
                  </h2>
                </div>
                
                {/* Sharp corner elements */}
                <div className="absolute -top-2 -left-2">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              
              {/* Sharp step cards */}
              {steps && (
                <div className="space-y-4">
                  <div className="bg-black/80 backdrop-blur-sm border-2 border-pink-500 rounded-xl p-6 shadow-2xl transform -rotate-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-handwriting-bold text-lg flex-shrink-0 shadow-lg border-2 border-pink-400">
                        1
                      </div>
                      <div>
                        <h3 className="font-handwriting-bold text-pink-400 mb-2 text-lg">Log every unappreciated task</h3>
                        <p className="text-pink-200 leading-relaxed font-handwriting">
                          {steps.step1}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/80 backdrop-blur-sm border-2 border-purple-500 rounded-xl p-6 shadow-2xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-handwriting-bold text-lg flex-shrink-0 shadow-lg border-2 border-purple-400">
                        2
                      </div>
                      <div>
                        <h3 className="font-handwriting-bold text-purple-400 mb-2 text-lg">We'll use AI to assign real world roles</h3>
                        <p className="text-purple-200 leading-relaxed font-handwriting">
                          {steps.step2}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/80 backdrop-blur-sm border-2 border-pink-500 rounded-xl p-6 shadow-2xl transform rotate-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-handwriting-bold text-lg flex-shrink-0 shadow-lg border-2 border-pink-400">
                        3
                      </div>
                      <div>
                        <h3 className="font-handwriting-bold text-pink-400 mb-2 text-lg">Get validating invoices</h3>
                        <p className="text-pink-200 leading-relaxed font-handwriting">
                          {steps.step3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Sharp description */}
              {description && (
                <div className="bg-purple-900/80 backdrop-blur-sm border-2 border-purple-400 rounded-xl p-6 shadow-2xl">
                  <p className="text-purple-200 leading-relaxed font-handwriting">
                    {description}
                  </p>
                </div>
              )}
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-6 px-8 rounded-2xl transition-all shadow-2xl border-2 border-pink-400 font-handwriting-bold text-xl transform hover:scale-105"
              >
                SHOW ME HOW
              </button>
            </div>
          )}

          {/* Screen 4: Sharp personal letter */}
          {id === 4 && (
            <div className="space-y-8">
              
              <div className="text-center">
                <h1 className="text-2xl text-white mb-8 font-handwriting-bold">
                  {title}
                </h1>
              </div>
              
              {/* Sharp personal note */}
              {originalNote && (
                <div className="relative">
                  <div className="bg-black/90 backdrop-blur-sm border-2 border-gray-400 rounded-2xl p-8 shadow-2xl space-y-5 transform -rotate-1">
                    {originalNote.split('\n\n').map((paragraph, i) => (
                      <p 
                        key={i} 
                        className={`leading-relaxed font-handwriting ${
                          paragraph.includes('receipts 💸') ? 'text-pink-400 font-handwriting-bold' :
                          paragraph.includes('taken for granted') ? 'text-purple-400' :
                          paragraph.includes('FYI: your labor') ? 'text-white font-handwriting-bold text-lg' :
                          'text-gray-300'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Sharp corner accent */}
                  <div className="absolute -bottom-3 -right-3">
                    <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-pink-400">
                      ❤️
                    </div>
                  </div>
                </div>
              )}
              
              {/* Sharp signature */}
              {signature && (
                <div className="text-center">
                  <div className="inline-block bg-pink-900/80 backdrop-blur-sm border-2 border-pink-400 rounded-xl p-6 shadow-2xl transform rotate-1">
                    {signature.split('\n').map((line, i) => (
                      <div key={i} className={`font-handwriting ${i === 0 ? 'font-handwriting-bold text-pink-400 text-xl' : 'text-pink-300'}`}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Sharp final button with extra flair */}
              <div className="relative">
                <button
                  onClick={() => handleTransition('next')}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-8 px-8 rounded-2xl transition-all text-2xl shadow-2xl font-handwriting-bold border-4 border-pink-400 transform hover:scale-105"
                >
                  🚀 GET MY RECEIPTS
                </button>
                
                {/* Sharp lightning accents */}
                <div className="absolute -top-2 -left-2">
                  <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <Zap className="w-8 h-8 text-yellow-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}