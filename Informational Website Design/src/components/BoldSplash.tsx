import { useState } from 'react'
import { ArrowRight, ChevronLeft, Receipt, DollarSign } from 'lucide-react'

interface BoldSplashProps {
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

export function BoldSplash({
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
}: BoldSplashProps) {
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
    }, 150)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 to-purple-50 flex flex-col">
      
      {/* Top Navigation - Clean like the app */}
      <div className="px-6 pt-16 pb-8">
        <div className="flex items-center justify-between max-w-md mx-auto">
          
          {/* Back button */}
          {!isFirst && (
            <button
              onClick={() => handleTransition('prev')}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          
          {/* Progress dots - clean and minimal */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index < currentStep
                    ? 'bg-pink-500'
                    : index === currentStep - 1
                    ? 'bg-pink-300'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Skip/Next */}
          <button
            onClick={() => handleTransition('next')}
            className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
          >
            {isLast ? 'Done' : 'Skip'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pb-8">
        <div className="max-w-md mx-auto">

          {/* Screen 1: Direct Introduction */}
          {id === 1 && (
            <div className="space-y-8">
              
              {/* Bold headline */}
              <div className="text-center space-y-6">
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                  Welcome to the <span className="text-pink-500">opposite</span> of every other wellness app.
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're not here to remind you to breathe, journal, or "find balance."
                </p>
                
                {/* Visual hint at the humor */}
                <div className="flex items-center justify-center space-x-4 py-4">
                  <Receipt className="w-8 h-8 text-pink-500" />
                  <span className="text-2xl">+</span>
                  <DollarSign className="w-8 h-8 text-green-500" />
                  <span className="text-2xl">=</span>
                  <span className="text-2xl">😈</span>
                </div>
              </div>
              
              {/* Key message card */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                <p className="text-xl font-semibold text-gray-900 text-center">
                  {highlight}
                </p>
              </div>
              
              {/* Teaser text */}
              <div className="text-center">
                <p className="text-gray-700 font-medium">
                  Time to invoice your life. 
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  (Yes, including that thing they did this morning)
                </p>
              </div>
              
              {/* Continue button - matching app style */}
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors shadow-sm"
              >
                Continue
              </button>
            </div>
          )}

          {/* Screen 2: The Recognition */}
          {id === 2 && (
            <div className="space-y-8">
              
              <div className="text-center space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">
                  {title}
                </h1>
                
                {/* The realization */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {subtitle}
                  </p>
                  
                  {/* Eye roll - big and prominent */}
                  <div className="text-6xl text-center mt-4">
                    {highlight}
                  </div>
                </div>
                
                {/* Response */}
                {eyeRoll && (
                  <div className="bg-gray-900 text-white rounded-2xl p-4">
                    <p className="font-medium text-center">
                      {eyeRoll}
                    </p>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors"
              >
                Exactly
              </button>
            </div>
          )}

          {/* Screen 3: The Solution - Clean and Direct */}
          {id === 3 && (
            <div className="space-y-6">
              
              <div className="text-center space-y-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {title}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {subtitle}
                </p>
              </div>
              
              {/* Feature highlight with humor */}
              <div className="bg-pink-500 text-white rounded-2xl p-6 text-center">
                <h2 className="text-xl font-bold mb-2">
                  {highlight}
                </h2>
                <p className="text-pink-100 text-sm">
                  From toilet seats to emotional labor
                </p>
              </div>
              
              {/* Steps - clean cards with examples */}
              {steps && (
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Log It</p>
                        <p className="text-sm text-gray-600">{steps.step1}</p>
                        <p className="text-xs text-pink-600 mt-1 italic">
                          "Cleaned up pee around toilet... again"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Get It Priced</p>
                        <p className="text-sm text-gray-600">{steps.step2}</p>
                        <p className="text-xs text-yellow-600 mt-1 italic">
                          "Janitorial services: $25/hour"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Your Choice</p>
                        <p className="text-sm text-gray-600">{steps.step3}</p>
                        <p className="text-xs text-purple-600 mt-1 italic">
                          "Send invoice or keep for self-validation"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Description with humor */}
              {description && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {description}
                  </p>
                  <p className="text-purple-600 text-xs mt-2 font-medium">
                    Because your sanity has a price tag. 💸
                  </p>
                </div>
              )}
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors"
              >
                Show Me The Money 💰
              </button>
            </div>
          )}

          {/* Screen 4: Personal Note - Clean and Confident */}
          {id === 4 && (
            <div className="space-y-6">
              
              <div className="text-center">
                <h1 className="text-xl font-bold text-gray-900 mb-4">
                  {title}
                </h1>
              </div>
              
              {/* Mock invoice example */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="font-bold text-pink-600">INVOICE</span>
                    <span className="text-sm text-gray-600">#001</span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Toilet seat replacement</span>
                      <span className="font-medium">$15.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Bathroom sanitization</span>
                      <span className="font-medium">$25.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Emotional labor surcharge</span>
                      <span className="font-medium">$50.00</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
                      <span>TOTAL</span>
                      <span className="text-pink-600">$90.00</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Personal note - clean typography */}
              {originalNote && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-4">
                  {originalNote.split('\n\n').map((paragraph, i) => (
                    <p 
                      key={i} 
                      className={`leading-relaxed ${
                        paragraph.includes('receipts 💸') ? 'text-pink-600 font-semibold' :
                        paragraph.includes('taken for granted') ? 'text-purple-600 font-semibold' :
                        paragraph.includes('FYI: your labor') ? 'text-gray-900 font-semibold' :
                        'text-gray-700'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              
              {/* Signature */}
              {signature && (
                <div className="text-center">
                  <div className="inline-block bg-pink-50 border border-pink-200 rounded-xl p-4">
                    {signature.split('\n').map((line, i) => (
                      <div key={i} className={`${i === 0 ? 'font-bold text-pink-700' : 'text-pink-600 text-sm'}`}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Final CTA - bold and confident */}
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-5 px-6 rounded-2xl transition-all text-lg shadow-lg"
              >
                🚀 Get My Receipts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}