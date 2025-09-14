import { useState, useEffect } from 'react'
import { ChevronLeft, Receipt, Zap, Target, DollarSign, Sparkles } from 'lucide-react'
import invoiceImage from 'figma:asset/8bde6774b2fa80bdb69ce2e6639672c4b4aad356.png'

interface DelightfulSurpriseProps {
  id: number
  title: string
  titleSurprise?: string
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
  audioSyncEnabled?: boolean
  onAnimationComplete?: (animationType: string) => void
}

export function DelightfulSurprise({
  id,
  title,
  titleSurprise,
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
  isLast,
  audioSyncEnabled = false,
  onAnimationComplete
}: DelightfulSurpriseProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [typewriterText, setTypewriterText] = useState('')
  const [showSurprise, setShowSurprise] = useState(false)
  const [showRest, setShowRest] = useState(false)
  const [colorTransform, setColorTransform] = useState(false)
  const [explosionMode, setExplosionMode] = useState(false)
  const [invisibleElements, setInvisibleElements] = useState(false)
  const [showInvisiBill, setShowInvisiBill] = useState(false)

  useEffect(() => {
    if (id === 1) {
      // Typewriter effect for "Once upon a time, there lived"
      const fullText = title
      let currentIndex = 0
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typeInterval)
        }
      }, 80) // Typing speed
      
      // Show invisible elements after typing
      const timer1 = setTimeout(() => setInvisibleElements(true), 2000)
      
      // Dramatic surprise reveal after pause
      const timer2 = setTimeout(() => {
        setShowSurprise(true)
        setColorTransform(true)
        setExplosionMode(true)
      }, 3500)
      
      // Show InvisiBILL easter egg
      const timer3 = setTimeout(() => setShowInvisiBill(true), 4000)
      
      // Show rest of content
      const timer4 = setTimeout(() => setShowRest(true), 5000)
      
      // Stop explosion
      const timer5 = setTimeout(() => setExplosionMode(false), 6000)
      
      return () => {
        clearInterval(typeInterval)
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
        clearTimeout(timer4)
        clearTimeout(timer5)
      }
    }
  }, [id, title])

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
    <div className={`min-h-screen relative overflow-hidden transition-all duration-1500 ${
      id === 1 && colorTransform 
        ? 'bg-gradient-to-br from-pink-200 via-purple-200 to-fuchsia-200'
        : 'bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100'
    }`}>
      
      {/* Elegant reveal effects for surprise moment */}
      {id === 1 && explosionMode && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Sophisticated radial lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 origin-left animate-pulse"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            >
              <div className="w-24 h-px bg-gradient-to-r from-pink-400 to-transparent opacity-60"></div>
            </div>
          ))}
        </div>
      )}

      {/* Floating elements that change with color transformation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Elegant floating receipts */}
        <div className={`absolute top-24 left-12 opacity-30 transition-all duration-2000 ${
          id === 1 && colorTransform ? 'opacity-60' : 'opacity-30'
        }`}>
          <Receipt className={`w-8 h-8 transform -rotate-12 ${
            id === 1 && colorTransform ? 'text-pink-400' : 'text-gray-300'
          }`} />
        </div>
        <div className={`absolute top-48 right-16 opacity-25 transition-all duration-2000 ${
          id === 1 && colorTransform ? 'opacity-50' : 'opacity-25'
        }`} style={{transitionDelay: '0.5s'}}>
          <Receipt className={`w-6 h-6 transform rotate-8 ${
            id === 1 && colorTransform ? 'text-purple-400' : 'text-gray-300'
          }`} />
        </div>
        <div className={`absolute bottom-40 left-24 opacity-35 transition-all duration-2000 ${
          id === 1 && colorTransform ? 'opacity-55' : 'opacity-35'
        }`} style={{transitionDelay: '1s'}}>
          <Receipt className={`w-9 h-9 transform rotate-3 ${
            id === 1 && colorTransform ? 'text-pink-500' : 'text-gray-300'
          }`} />
        </div>
        
        {/* Hidden receipt elements that become visible - InvisiBILL easter egg */}
        {id === 1 && invisibleElements && (
          <>
            <div className={`absolute top-20 left-4 transition-all duration-1000 ${
              showInvisiBill ? 'opacity-60' : 'opacity-0'
            }`}>
              <div className="bg-white/90 border border-gray-300 rounded-lg p-3 shadow-lg transform -rotate-12 text-xs">
                <div className="font-handwriting-bold text-gray-700">INVOICE #001</div>
                <div className="font-handwriting text-gray-600">Emotional Labor</div>
                <div className="font-handwriting text-pink-600">$127.50</div>
              </div>
            </div>
            
            <div className={`absolute bottom-20 right-8 transition-all duration-1000 ${
              showInvisiBill ? 'opacity-50' : 'opacity-0'
            }`} style={{transitionDelay: '0.5s'}}>
              <div className="bg-white/90 border border-gray-300 rounded-lg p-3 shadow-lg transform rotate-6 text-xs">
                <div className="font-handwriting-bold text-gray-700">RECEIPT</div>
                <div className="font-handwriting text-gray-600">Project Management</div>
                <div className="font-handwriting text-purple-600">$89.00</div>
              </div>
            </div>
            
            <div className={`absolute top-1/2 right-4 transition-all duration-1000 ${
              showInvisiBill ? 'opacity-40' : 'opacity-0'
            }`} style={{transitionDelay: '1s'}}>
              <div className="font-handwriting text-gray-400 text-sm transform -rotate-45">
                Invisi<span className="text-pink-500 font-handwriting-bold">BILL</span>
              </div>
            </div>
          </>
        )}

        {/* Refined sparkle accents */}
        {id === 1 && colorTransform && (
          <>
            <div className="absolute top-20 right-20 opacity-60 animate-pulse">
              <Sparkles className="w-6 h-6 text-pink-400" />
            </div>
            <div className="absolute top-32 left-16 opacity-50 animate-pulse" style={{animationDelay: '1s'}}>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
            <div className="absolute bottom-32 right-24 opacity-55 animate-pulse" style={{animationDelay: '2s'}}>
              <Sparkles className="w-5 h-5 text-pink-300" />
            </div>
          </>
        )}
        
        {/* Minimal accent elements */}
        <div className={`absolute top-32 right-32 opacity-30 transition-all duration-2000 ${
          id === 1 && colorTransform ? 'text-pink-300' : 'text-gray-400'
        }`}>
          <Zap className="w-5 h-5" />
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 px-8 pt-16 pb-8">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          
          {!isFirst && (
            <button
              onClick={() => handleTransition('prev')}
              className={`flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-sm transition-all shadow-lg border-2 ${
                id === 1 && colorTransform 
                  ? 'bg-white/80 hover:bg-white/90 border-pink-300' 
                  : 'bg-white/60 hover:bg-white/80 border-gray-300'
              }`}
            >
              <ChevronLeft className={`w-6 h-6 ${
                id === 1 && colorTransform ? 'text-pink-600' : 'text-gray-600'
              }`} />
            </button>
          )}
          
          {/* Progress indicators */}
          <div className="flex items-center space-x-4">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index < currentStep
                    ? id === 1 && colorTransform
                      ? 'w-12 h-3 bg-gradient-to-r from-pink-500 to-purple-500 transform rotate-1 shadow-lg'
                      : 'w-12 h-3 bg-gradient-to-r from-gray-500 to-slate-500 transform rotate-1 shadow-lg'
                    : index === currentStep - 1
                    ? id === 1 && colorTransform
                      ? 'w-8 h-3 bg-pink-400 transform -rotate-1 shadow-md'
                      : 'w-8 h-3 bg-gray-400 transform -rotate-1 shadow-md'
                    : 'w-4 h-3 bg-gray-300 opacity-40'
                }`}
                style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 15% 100%)' }}
              />
            ))}
          </div>
          
          <button
            onClick={() => handleTransition('next')}
            className={`transition-colors font-handwriting-bold text-lg ${
              id === 1 && colorTransform ? 'text-pink-600 hover:text-pink-700' : 'text-gray-600 hover:text-gray-700'
            }`}
          >
            {isLast ? 'BEGIN' : 'NEXT'}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-8 pb-12">
        <div className="max-w-lg mx-auto">

          {/* Screen 1: The surprise fairy tale opening */}
          {id === 1 && (
            <div className="space-y-10 text-center">
              
              {/* Elegant typewriter invitation */}
              <div className="space-y-8">
                <div className="min-h-[4rem]">
                  <h1 className="text-4xl leading-tight text-gray-700 font-handwriting">
                    {typewriterText}
                    <span className={`inline-block w-1 h-9 bg-gray-700 ml-1 animate-pulse ${
                      typewriterText.length >= title.length ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                  </h1>
                </div>
                
                {/* SOPHISTICATED REVEAL */}
                <div className={`transform transition-all duration-1500 ${
                  showSurprise 
                    ? 'scale-110 opacity-100 translate-y-0 translate-x-0' 
                    : 'scale-50 opacity-0 translate-y-8 translate-x-16'
                }`}>
                  {titleSurprise && (
                    <div className="relative">
                      {/* Hidden/invisible text effect before reveal */}
                      <div className={`absolute inset-0 transition-all duration-500 ${
                        showSurprise ? 'opacity-0' : 'opacity-100'
                      }`}>
                        <h1 className="text-5xl leading-tight font-handwriting-bold text-transparent"
                        dangerouslySetInnerHTML={{ __html: titleSurprise || '' }}>
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-gray-400 font-handwriting text-base">
                            [loading invitation...]
                          </div>
                        </div>
                      </div>
                      
                      {/* Elegant reveal */}
                      <h1 className={`text-5xl leading-tight font-handwriting-bold transition-all duration-1500 ${
                        colorTransform 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-fuchsia-600' 
                          : 'text-gray-800'
                      }`}
                      dangerouslySetInnerHTML={{ __html: titleSurprise || '' }}>
                      </h1>
                      
                      {/* Subtle glow effect */}
                      {colorTransform && (
                        <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl blur-lg"></div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Refined subtitle */}
                <div className={`transform transition-all duration-1000 delay-500 ${
                  showRest ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <p className="text-xl leading-relaxed font-handwriting text-black">
                    {subtitle}
                  </p>
                </div>
              </div>
              
              {/* ELEGANT CONFIDENCE STATEMENT */}
              <div className={`relative transform transition-all duration-1000 delay-1000 ${
                showRest ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}>
                <div className={`backdrop-blur-sm rounded-2xl px-10 py-8 shadow-xl border-2 transition-all duration-1000 ${
                  colorTransform 
                    ? 'bg-gradient-to-br from-pink-500 to-purple-600 border-pink-300 shadow-pink-300/30' 
                    : 'bg-white/80 border-gray-300'
                }`}>
                  <p className={`text-3xl font-handwriting-bold transition-colors duration-1000 ${
                    colorTransform ? 'text-white' : 'text-gray-800'
                  }`}>
                    {highlight}
                  </p>
                  
                  {/* Refined decorative line */}
                  <div className={`mt-6 mx-auto w-24 h-1 shadow-lg transition-all duration-1000 rounded-full ${
                    colorTransform 
                      ? 'bg-gradient-to-r from-pink-200 to-purple-200' 
                      : 'bg-gradient-to-r from-gray-400 to-slate-400'
                  }`}></div>
                  
                  {/* InvisiBILL tagline with invisible effect */}
                  {showInvisiBill && (
                    <div className="mt-8">
                      <p className="text-base font-handwriting text-black animate-invisible">
                        Welcome to <span className="font-handwriting-bold">InvisiBILL</span> — where your invisible work becomes visible.
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Single elegant accent */}
                {colorTransform && (
                  <div className="absolute -top-3 -right-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg"></div>
                  </div>
                )}
              </div>
              
              <div className={`transform transition-all duration-1000 delay-1500 ${
                showRest ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <button
                  onClick={() => handleTransition('next')}
                  className={`w-full py-6 px-8 rounded-2xl transition-all shadow-lg border-2 font-handwriting-bold text-xl transform hover:scale-105 ${
                    colorTransform 
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-pink-300 shadow-pink-200/40' 
                      : 'bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white border-gray-400'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Screen 2: Recognition */}
          {id === 2 && (
            <div className="space-y-8 text-center">
              
              <div className="space-y-6">
                <h1 className="text-3xl text-gray-800 leading-tight font-handwriting-bold">
                  {title}
                </h1>
                
                <div className="bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-2xl p-6 shadow-xl">
                  <p className="text-lg text-purple-700 leading-relaxed font-handwriting mb-6">
                    {subtitle}
                  </p>
                  
                  {/* Massive eye roll - made smaller to reduce blocking */}
                  <div className="relative">
                    <div className="text-7xl mb-3 filter drop-shadow-xl animate-pulse">
                      {highlight}
                    </div>
                    
                    {/* Accent lines around eye roll */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-6">
                      <div className="w-12 h-1 bg-yellow-500 transform -rotate-12 shadow-lg"></div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-6">
                      <div className="w-16 h-1 bg-yellow-500 transform rotate-12 shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                {eyeRoll && (
                  <div className="bg-pink-600 text-white border-2 border-pink-400 rounded-2xl p-4 shadow-xl transform -rotate-1">
                    <p className="text-xl font-handwriting-bold">
                      {eyeRoll}
                    </p>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-6 px-8 rounded-2xl transition-all shadow-xl border-2 border-pink-400 font-handwriting-bold text-xl transform hover:scale-105"
              >
                EXACTLY
              </button>
            </div>
          )}

          {/* Screen 3: Toolkit */}
          {id === 3 && (
            <div className="space-y-8 relative">
              
              {/* Floating invoice example - moved much higher to avoid blocking any text */}
              <div className="absolute -top-32 -left-16 transform rotate-12 scale-30 opacity-30 hover:opacity-60 transition-all duration-300 hover:scale-35 hover:rotate-6 z-10">
                <img 
                  src={invoiceImage} 
                  alt="InvisiBILL invoice example" 
                  className="w-64 h-auto rounded-lg shadow-2xl border-2 border-pink-300"
                />
              </div>
              
              <div className="text-center space-y-6">
                <h1 className="text-3xl text-gray-800 leading-tight font-handwriting-bold">
                  {title}
                </h1>
                
                {subtitle && (
                  <p className="text-xl text-gray-700 leading-relaxed font-handwriting">
                    {subtitle}
                  </p>
                )}
              </div>
              
              {/* Feature highlight */}
              <div className="relative">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white border-2 border-pink-400 rounded-2xl p-8 shadow-xl text-center transform rotate-1">
                  <h2 className="text-3xl font-handwriting-bold mb-2">
                    {highlight}
                  </h2>
                </div>
                
                {/* Corner sparkles */}
                <div className="absolute -top-2 -left-2">
                  <Sparkles className="w-8 h-8 text-yellow-500 animate-ping" />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <Sparkles className="w-8 h-8 text-yellow-500 animate-ping" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
              
              {/* Description - moved right after LOG IT ALL HERE */}
              {description && (
                <div className="bg-purple-100/80 backdrop-blur-sm border-2 border-purple-300 rounded-xl p-6 shadow-lg">
                  <p className="text-purple-800 leading-relaxed font-handwriting">
                    {description}
                  </p>
                </div>
              )}
              
              {/* How it works header */}
              <div className="text-center">
                <h3 className="text-2xl font-handwriting-bold text-gray-800 mb-4">How it works:</h3>
              </div>
              
              {/* Steps */}
              {steps && (
                <div className="space-y-4">
                  <div className="bg-white/90 backdrop-blur-sm border-2 border-pink-300 rounded-xl p-6 shadow-xl transform -rotate-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-handwriting-bold text-lg flex-shrink-0 shadow-lg border-2 border-pink-400">
                        1
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed font-handwriting">
                          {steps.step1}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-xl p-6 shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-handwriting-bold text-lg flex-shrink-0 shadow-lg border-2 border-purple-400">
                        2
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed font-handwriting">
                          {steps.step2}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm border-2 border-pink-300 rounded-xl p-6 shadow-xl transform rotate-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-handwriting-bold text-lg flex-shrink-0 shadow-lg border-2 border-pink-400">
                        3
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed font-handwriting">
                          {steps.step3}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-6 px-8 rounded-2xl transition-all shadow-xl border-2 border-pink-400 font-handwriting-bold text-xl transform hover:scale-105"
              >
                One Last Thing Before You Start...
              </button>
            </div>
          )}

          {/* Screen 4: Personal letter */}
          {id === 4 && (
            <div className="space-y-8">
              
              <div className="text-center">
                <h1 className="text-2xl text-gray-800 mb-8 font-handwriting-bold">
                  {title}
                </h1>
              </div>
              
              {/* Personal note */}
              {originalNote && (
                <div className="relative">
                  {/* Handwritten note frame with notebook paper styling */}
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-lg p-8 shadow-xl space-y-5 transform -rotate-1 relative paper-texture">
                    {/* Notebook holes */}
                    <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-evenly">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-yellow-200 rounded-full border border-yellow-300"></div>
                      ))}
                    </div>
                    
                    {/* Red margin line */}
                    <div className="absolute left-12 top-0 bottom-0 w-px bg-red-300"></div>
                    
                    {/* Horizontal lines */}
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="absolute left-0 right-0 h-px bg-blue-200/50" style={{ top: `${20 + i * 30}px` }}></div>
                      ))}
                    </div>
                    
                    <div className="relative z-10 ml-8">
                      {originalNote.split('\n\n').map((paragraph, i) => {
                        // Handle italic parenthetical text
                        if (paragraph.startsWith('*(') && paragraph.endsWith(')*')) {
                          return (
                            <p 
                              key={i} 
                              className="leading-relaxed font-handwriting italic text-gray-600 text-center mt-2"
                            >
                              {paragraph.replace(/^\*\(/, '(').replace(/\)\*$/, ')')}
                            </p>
                          )
                        }
                        
                        // Handle bold text marked with **
                        if (paragraph.includes('**')) {
                          const parts = paragraph.split('**')
                          return (
                            <p 
                              key={i} 
                              className={`leading-relaxed font-handwriting ${
                                paragraph.includes('receipts 💸') ? 'text-pink-600 font-handwriting-bold' :
                                paragraph.includes('taken for granted') ? 'text-gray-700' :
                                paragraph.includes('FYI: your labor') ? 'text-gray-900 font-handwriting-bold text-lg' :
                                'text-gray-700'
                              }`}
                            >
                              {parts.map((part, partIndex) => {
                                if (partIndex % 2 === 1) {
                                  // Handle the "This app tells the story" line specifically
                                  if (part.includes('This app tells the story')) {
                                    return <span key={partIndex} className="font-handwriting-bold text-gray-900">{part}</span>
                                  }
                                  // Handle "I made this for you" 
                                  return <span key={partIndex} className="font-handwriting-bold text-pink-700">{part}</span>
                                }
                                return part
                              })}
                            </p>
                          )
                        }
                        
                        return (
                          <p 
                            key={i} 
                            className={`leading-relaxed font-handwriting ${
                              paragraph.includes('receipts 💸') ? 'text-pink-600 font-handwriting-bold' :
                              paragraph.includes('taken for granted') ? 'text-gray-700' :
                              paragraph.includes('FYI: your labor') ? 'text-gray-900 font-handwriting-bold text-lg' :
                              'text-gray-700'
                            }`}
                          >
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                  
                  {/* Heart accent */}
                  <div className="absolute -bottom-3 -right-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-xl border-2 border-pink-300">
                      ❤️
                    </div>
                  </div>
                </div>
              )}

              {/* Signature */}
              {signature && (
                <div className="text-right mt-8">
                  <div className="inline-block bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg p-4 shadow-lg transform rotate-1">
                    <p className="text-gray-700 font-handwriting whitespace-pre-line">
                      {signature}
                    </p>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => handleTransition('next')}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-8 px-8 rounded-2xl transition-all text-2xl shadow-xl font-handwriting-bold border-4 border-pink-400 transform hover:scale-105"
              >
                ✨ GET MY RECEIPTS
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}