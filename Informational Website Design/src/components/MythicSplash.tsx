import { useState } from 'react'
import { ChevronRight, Receipt, Target, TrendingUp, Users, ArrowRight } from 'lucide-react'
import exampleInvoice from 'figma:asset/26e521a1d14d8eb565ba2d985aae56135a7c5b89.png'
import exampleInterface from 'figma:asset/39f59ca13337ae1a23948d03a9fc14df6e5fe39a.png'

interface MythicSplashProps {
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

export function MythicSplash({
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
}: MythicSplashProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const getScreenContent = () => {
    // Using the sophisticated pink/lavender palette from the actual app
    switch(id) {
      case 1:
        return {
          icon: <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Receipt className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>,
          accent: "from-pink-400 to-pink-500",
          flaw: "coffee" // Coffee ring stain - working late nights
        }
      case 2:
        return {
          icon: <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Users className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>,
          accent: "from-violet-400 to-purple-500",
          flaw: "lipstick" // Lipstick smudge - touched face while frustrated
        }
      case 3:
        return {
          icon: <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Target className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>,
          accent: "from-pink-400 to-violet-500",
          flaw: "askew" // Slightly rotated text - tired, imperfect
        }
      case 4:
        return {
          icon: <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <TrendingUp className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>,
          accent: "from-purple-400 to-pink-500",
          flaw: "torn" // Slightly torn corner - raw emotion
        }
      default:
        return {
          icon: <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Receipt className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>,
          accent: "from-pink-400 to-pink-500",
          flaw: "coffee"
        }
    }
  }

  const screenContent = getScreenContent()

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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-lavender-50 flex flex-col relative overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(139,69,19) 0.5px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* FLAW 1: Coffee ring stain - only on screen 1, bottom left */}
      {screenContent.flaw === 'coffee' && (
        <div className="absolute bottom-20 left-16 w-16 h-16 opacity-8">
          <div className="w-full h-full rounded-full border-2 border-amber-300/30 bg-amber-100/20"></div>
          <div className="absolute top-1 left-1 w-14 h-14 rounded-full border border-amber-400/20"></div>
        </div>
      )}

      {/* FLAW 2: Lipstick smudge - only on screen 2, top right */}
      {screenContent.flaw === 'lipstick' && (
        <div className="absolute top-24 right-12 w-3 h-6 opacity-12">
          <div className="w-full h-full bg-pink-400/20 rounded-full transform rotate-12"></div>
        </div>
      )}

      {/* Top navigation - clean and minimal */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          
          {/* Left side */}
          <div className="flex items-center space-x-4">
            {!isFirst && (
              <button
                onClick={() => handleTransition('prev')}
                className="w-9 h-9 rounded-full border border-violet-200 flex items-center justify-center hover:bg-violet-50 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180 text-violet-600" />
              </button>
            )}
          </div>

          {/* Center - progress */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index < currentStep
                    ? 'w-8 bg-gradient-to-r from-pink-400 to-violet-400'
                    : index === currentStep - 1
                    ? 'w-6 bg-pink-300'
                    : 'w-3 bg-violet-200'
                }`}
              />
            ))}
          </div>

          {/* Right side */}
          <div>
            <button
              onClick={() => handleTransition('next')}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                isLast 
                  ? 'bg-gradient-to-r from-pink-400 to-violet-400 text-white hover:from-pink-300 hover:to-violet-300 shadow-lg' 
                  : 'text-violet-600 hover:text-violet-800'
              }`}
            >
              {isLast ? 'Get Started' : 'Continue'}
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-16">
        <div className="w-full max-w-4xl">

          {/* Screen 1: Professional welcome */}
          {id === 1 && (
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <div className="flex justify-center">
                  {screenContent.icon}
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl tracking-tight text-gray-800 max-w-3xl mx-auto">
                    Welcome to the <span className="italic text-violet-600">opposite</span> of every other wellness app
                  </h1>
                  
                  <p className="text-xl text-violet-700 max-w-2xl mx-auto leading-relaxed">
                    We're not here to remind you to breathe, journal, or "find balance."
                  </p>
                </div>
              </div>
              
              <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${screenContent.accent} text-white rounded-full shadow-lg`}>
                <span className="font-medium">{highlight}</span>
              </div>
            </div>
          )}

          {/* Screen 2: The knowing moment */}
          {id === 2 && (
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <div className="flex justify-center">
                  {screenContent.icon}
                </div>
                
                <div className="space-y-6">
                  <h1 className="text-3xl md:text-4xl tracking-tight text-gray-800 max-w-2xl mx-auto">
                    {title}
                  </h1>
                  
                  <div className="bg-gradient-to-br from-pink-100 to-violet-100 rounded-2xl p-8 max-w-2xl mx-auto border border-pink-300">
                    <p className="text-lg text-violet-800 leading-relaxed italic">
                      {subtitle}
                    </p>
                  </div>
                  
                  <div className="text-5xl">{highlight}</div>
                  
                  {eyeRoll && (
                    <div className="bg-gradient-to-r from-violet-400 to-purple-400 text-white rounded-xl p-6 max-w-md mx-auto shadow-lg">
                      <p className="font-medium">
                        {eyeRoll}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Screen 3: The product showcase - FLAW 3: Slightly askew text */}
          {id === 3 && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Left side - content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    {screenContent.icon}
                    <h1 className={`text-3xl tracking-tight text-gray-800 ${screenContent.flaw === 'askew' ? 'transform -rotate-0.5' : ''}`}>
                      {title}
                    </h1>
                  </div>
                  
                  <p className="text-lg text-violet-700 leading-relaxed">
                    {subtitle}
                  </p>
                </div>

                <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${screenContent.accent} text-white rounded-full font-medium`}>
                  {highlight}
                </div>

                {description && (
                  <div className="bg-gradient-to-br from-pink-100 to-violet-100 rounded-xl p-6 border border-pink-300">
                    <p className="text-violet-800 leading-relaxed">
                      {description}
                    </p>
                  </div>
                )}

                {steps && (
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 bg-white/70 border border-pink-300 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">Log It</p>
                        <p className="text-sm text-violet-700 leading-relaxed">{steps.step1}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-white/70 border border-violet-300 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-violet-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">Get It Priced</p>
                        <p className="text-sm text-violet-700 leading-relaxed">{steps.step2}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 p-4 bg-white/70 border border-purple-300 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 mb-1">Your Choice</p>
                        <p className="text-sm text-violet-700 leading-relaxed">{steps.step3}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right side - app screenshots */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src={exampleInterface} 
                    alt="InvisiBILL app interface"
                    className="w-full max-w-xs mx-auto rounded-3xl shadow-2xl border border-violet-300"
                  />
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-pink-200 to-violet-200 rounded-full opacity-30"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-30"></div>
              </div>
            </div>
          )}

          {/* Screen 4: Personal note - FLAW 4: Torn corner effect */}
          {id === 4 && (
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              
              {/* FLAW 4: Subtle torn corner on the content area */}
              {screenContent.flaw === 'torn' && (
                <div className="absolute top-0 right-0 w-8 h-8 opacity-20">
                  <div className="w-full h-full bg-white transform rotate-12"></div>
                  <div className="absolute top-1 right-1 w-6 h-6 bg-pink-100 transform -rotate-6"></div>
                </div>
              )}
              
              {/* Left side - invoice example */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src={exampleInvoice} 
                    alt="Example InvisiBILL invoice"
                    className="w-full max-w-xs mx-auto rounded-3xl shadow-2xl border border-violet-300"
                  />
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-8 left-8 w-28 h-28 bg-gradient-to-br from-pink-200 to-violet-200 rounded-full opacity-30"></div>
                <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30"></div>
              </div>

              {/* Right side - personal note */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    {screenContent.icon}
                    <h1 className="text-2xl tracking-tight text-gray-800">
                      {title}
                    </h1>
                  </div>
                </div>

                {originalNote && (
                  <div className="bg-gradient-to-br from-pink-100 to-violet-100 rounded-2xl p-8 border border-pink-300 space-y-4 relative">
                    {originalNote.split('\n\n').map((paragraph, i) => (
                      <p 
                        key={i} 
                        className={`leading-relaxed ${
                          paragraph.includes('receipts 💸') ? 'text-pink-700 font-medium' :
                          paragraph.includes('taken for granted') ? 'text-violet-700 font-medium' :
                          paragraph.includes('FYI:') ? 'text-purple-700 font-medium' :
                          'text-violet-800'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {signature && (
                  <div className="border-l-4 border-gradient-to-b from-pink-400 to-violet-400 pl-6 bg-gradient-to-r from-pink-100 to-violet-100 py-4 rounded-r-lg">
                    <div className="text-violet-800">
                      {signature.split('\n').map((line, i) => (
                        <div key={i} className={i === 0 ? 'font-medium text-pink-700' : 'text-violet-600'}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}