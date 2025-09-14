import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

interface ContradictionSplashProps {
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

export function ContradictionSplash({
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
}: ContradictionSplashProps) {
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
    <div className="min-h-screen bg-white flex flex-col font-handwriting">
      
      {/* Clean navigation */}
      <div className="px-6 pt-16 pb-8">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          
          {!isFirst && (
            <button
              onClick={() => handleTransition('prev')}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}
          
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index < currentStep ? 'bg-pink-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => handleTransition('next')}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            {isLast ? 'Done' : 'Skip'}
          </button>
        </div>
      </div>

      {/* Content - preserving exact copy */}
      <div className="flex-1 px-6 pb-8">
        <div className="max-w-sm mx-auto">

          {/* Screen 1: Exact copy, clean presentation */}
          {id === 1 && (
            <div className="space-y-8 text-center">
              <h1 className="text-2xl leading-tight text-gray-900">
                {title}
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {subtitle}
              </p>
              
              <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200">
                <p className="text-xl text-gray-900">
                  {highlight}
                </p>
              </div>
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-2xl transition-colors"
              >
                Continue
              </button>
            </div>
          )}

          {/* Screen 2: The exact copy with the eye roll */}
          {id === 2 && (
            <div className="space-y-8 text-center">
              <h1 className="text-2xl text-gray-900 leading-tight">
                {title}
              </h1>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {subtitle}
              </p>
              
              <div className="py-8">
                <div className="text-8xl mb-4">
                  {highlight}
                </div>
              </div>
              
              {eyeRoll && (
                <div className="bg-gray-900 text-white rounded-2xl p-4">
                  <p className="text-lg">
                    {eyeRoll}
                  </p>
                </div>
              )}
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-2xl transition-colors"
              >
                Exactly
              </button>
            </div>
          )}

          {/* Screen 3: Her exact copy about receipts */}
          {id === 3 && (
            <div className="space-y-6">
              
              <div className="text-center space-y-4">
                <h1 className="text-2xl text-gray-900 leading-tight">
                  {title}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {subtitle}
                </p>
              </div>
              
              <div className="bg-pink-500 text-white rounded-2xl p-6 text-center">
                <h2 className="text-xl">
                  {highlight}
                </h2>
              </div>
              
              {steps && (
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 rounded-2xl p-4">
                    <h3 className="font-handwriting-bold text-gray-900 mb-2">Log every unappreciated task</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {steps.step1}
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-4">
                    <h3 className="font-handwriting-bold text-gray-900 mb-2">We'll use AI to assign real world roles</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {steps.step2}
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl p-4">
                    <h3 className="font-handwriting-bold text-gray-900 mb-2">Get validating invoices</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {steps.step3}
                    </p>
                  </div>
                </div>
              )}
              
              {description && (
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              )}
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-2xl transition-colors"
              >
                Show me how
              </button>
            </div>
          )}

          {/* Screen 4: Her personal note, exactly as written */}
          {id === 4 && (
            <div className="space-y-6">
              
              <div className="text-center">
                <h1 className="text-xl text-gray-900 mb-6">
                  {title}
                </h1>
              </div>
              
              {originalNote && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
                  {originalNote.split('\n\n').map((paragraph, i) => (
                    <p 
                      key={i} 
                      className={`leading-relaxed ${
                        paragraph.includes('receipts 💸') ? 'text-pink-600' :
                        paragraph.includes('taken for granted') ? 'text-purple-600' :
                        paragraph.includes('FYI: your labor') ? 'text-gray-900' :
                        'text-gray-700'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              
              {signature && (
                <div className="text-center">
                  <div className="inline-block bg-pink-50 border border-pink-200 rounded-2xl p-4">
                    {signature.split('\n').map((line, i) => (
                      <div key={i} className={`${i === 0 ? 'text-pink-700' : 'text-pink-600 text-sm'}`}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-5 px-6 rounded-2xl transition-all text-lg"
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