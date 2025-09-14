import { ChevronRight, Sparkles, Zap, Heart, Star, Receipt, Clipboard, DollarSign, Users } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface SplashScreenProps {
  id: number
  chapter?: string
  chapterTitle?: string
  title: string
  subtitle: string
  highlight: string
  bgColor: string
  extraContent?: string
  signature?: string
  confession?: string
  eyeRoll?: string
  mythicIntro?: string
  diaryEntry?: string
  originalNote?: string
  description?: string
  steps?: {
    step1: string
    step2: string 
    step3: string
  }
  transformation?: {
    before: string
    after: string
  }
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrevious: () => void
  onGetStarted: () => void
  isFirst: boolean
  isLast: boolean
}

export function SplashScreen({
  id,
  chapter,
  chapterTitle,
  title,
  subtitle,
  highlight,
  bgColor,
  extraContent,
  signature,
  confession,
  eyeRoll,
  mythicIntro,
  diaryEntry,
  originalNote,
  description,
  steps,
  transformation,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onGetStarted,
  isFirst,
  isLast
}: SplashScreenProps) {
  // Dynamic content based on screen
  const getScreenSpecificContent = () => {
    switch(id) {
      case 1:
        return {
          icon: <Sparkles className="w-20 h-20" />,
          decorativeText: "OPPOSITE",
          pattern: "zigzag",
          mainColor: "from-pink-200 to-fuchsia-200"
        }
      case 2:
        return {
          icon: <Heart className="w-20 h-20" />,
          decorativeText: "TRUTH",
          pattern: "diary",
          mainColor: "from-yellow-200 to-amber-200"
        }
      case 3:
        return {
          icon: <Receipt className="w-20 h-20" />,
          decorativeText: "RECEIPTS",
          pattern: "waves",
          mainColor: "from-pink-200 to-fuchsia-300"
        }
      case 4:
        return {
          icon: <Heart className="w-20 h-20" />,
          decorativeText: "LISA",
          pattern: "diary",
          mainColor: "from-fuchsia-200 to-pink-200"
        }
      default:
        return {
          icon: <Sparkles className="w-20 h-20" />,
          decorativeText: "INVISIBILL",
          pattern: "dots",
          mainColor: "from-pink-300 to-purple-300"
        }
    }
  }

  const screenContent = getScreenSpecificContent()

  return (
    <div className={`min-h-screen w-full ${bgColor} flex flex-col relative overflow-y-auto`}>
      {/* Dramatic Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Base animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-white/10 animate-pulse"></div>
        
        {/* Dynamic patterns based on screen */}
        {screenContent.pattern === 'zigzag' && (
          <div className="absolute inset-0 opacity-20 animate-pulse">
            <svg className="w-full h-full" viewBox="0 0 400 800">
              <path d="M0 100 L50 150 L100 100 L150 150 L200 100 L250 150 L300 100 L350 150 L400 100" 
                    stroke="white" strokeWidth="4" fill="none" className="animate-pulse"/>
              <path d="M0 300 L50 350 L100 300 L150 350 L200 300 L250 350 L300 300 L350 350 L400 300" 
                    stroke="white" strokeWidth="3" fill="none" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
              <path d="M0 500 L50 550 L100 500 L150 550 L200 500 L250 550 L300 500 L350 550 L400 500" 
                    stroke="white" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
            </svg>
          </div>
        )}
        
        {screenContent.pattern === 'dots' && (
          <div className="absolute inset-0 opacity-15">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}

        {screenContent.pattern === 'diary' && (
          <div className="absolute inset-0 opacity-5">
            {/* Subtle notebook lines */}
            <div className="absolute inset-0">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 h-px bg-white"
                  style={{ top: `${i * 3.33}%` }}
                />
              ))}
            </div>
            {/* Margin line */}
            <div className="absolute left-12 top-0 bottom-0 w-px bg-red-200/30"></div>
          </div>
        )}

        {screenContent.pattern === 'waves' && (
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 800">
              <path d="M0 200 Q100 150 200 200 T400 200" stroke="white" strokeWidth="6" fill="none" className="animate-pulse"/>
              <path d="M0 400 Q100 350 200 400 T400 400" stroke="white" strokeWidth="4" fill="none" className="animate-pulse" style={{animationDelay: '0.7s'}}/>
              <path d="M0 600 Q100 550 200 600 T400 600" stroke="white" strokeWidth="3" fill="none" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
            </svg>
          </div>
        )}

        {screenContent.pattern === 'hearts' && (
          <div className="absolute inset-0 opacity-15">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-white text-2xl animate-bounce"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              >
                ❤️
              </div>
            ))}
          </div>
        )}

        {/* Large animated decorative text */}
        <div className="absolute top-8 right-4 text-white/20 text-7xl transform -rotate-12 select-none animate-pulse">
          {screenContent.decorativeText}
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-8 w-16 h-16 border-4 border-white/30 rounded-full animate-spin"></div>
        <div className="absolute bottom-1/4 right-8 w-12 h-12 bg-white/20 rounded-lg"></div>
      </div>

      {/* TOP NAVIGATION - Temporary fix */}
      <div className="pt-12 pb-6 px-6 relative z-50">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/30 p-4">
          <div className="flex items-center justify-between max-w-sm mx-auto">
            {/* Back button for non-first screens */}
            {!isFirst ? (
              <button
                onClick={onPrevious}
                className="flex items-center space-x-2 bg-white/30 backdrop-blur text-white px-4 py-3 rounded-full hover:bg-white/40 transition-all active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </button>
            ) : (
              <div className="w-20"></div>
            )}

            {/* Progress indicator */}
            <div className="text-white text-sm font-semibold">
              {currentStep} / {totalSteps}
            </div>

            {/* PROMINENT NEXT BUTTON */}
            <button
              onClick={isLast ? onGetStarted : onNext}
              className="flex items-center space-x-2 bg-gradient-to-r from-fuchsia-400 to-pink-400 hover:from-fuchsia-300 hover:to-pink-300 text-white px-6 py-3 rounded-full transition-all active:scale-95 shadow-xl font-semibold border-2 border-white/20"
            >
              <span>
                {isLast ? '🚀 Get My Receipts!' : 'Next →'}
              </span>
            </button>
          </div>
        </div>

        {/* Progress Indicator - More Animated */}
        <div className="flex justify-center pt-6">
          <div className="flex space-x-3">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-3 rounded-full transition-all duration-700 ease-out ${
                  index < currentStep
                    ? 'w-12 bg-white shadow-lg animate-pulse'
                    : index === currentStep - 1
                    ? 'w-8 bg-white/80 animate-pulse'
                    : 'w-3 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Dynamic Layout per Screen */}
      <div className="flex-1 flex flex-col justify-start pt-4 px-6 pb-8 relative z-10">
        
        {/* Chapter Header - Novel Style */}
        {chapter && chapterTitle && (
          <div className="text-center mb-6">
            <div className="text-white/60 text-sm tracking-widest font-mono mb-1">
              {chapter}
            </div>
            <div className="text-white/90 text-lg tracking-wide border-b border-white/20 pb-2 max-w-xs mx-auto">
              {chapterTitle}
            </div>
            {mythicIntro && (
              <div className="text-white/70 text-sm italic mt-3 max-w-sm mx-auto">
                {mythicIntro}
              </div>
            )}
          </div>
        )}
        
        {/* Static Icon */}
        <div className="flex justify-center mb-6">
          <div className="text-white/90">
            {screenContent.icon}
          </div>
        </div>

        {/* Screen 1: The Opening Scene - Mythic Hook */}
        {id === 1 && (
          <div className="space-y-8">
            {/* Epic Title Treatment */}
            <div className="text-center">
              <h1 className="text-white leading-tight max-w-sm mx-auto mb-8">
                <span className="block text-xl opacity-80 mb-2">Welcome to the</span>
                <span className={`block text-6xl bg-gradient-to-r ${screenContent.mainColor} bg-clip-text text-transparent animate-pulse font-bold tracking-tight`}>
                  OPPOSITE
                </span>
                <span className="block text-2xl mt-2 opacity-90">of every other wellness app.</span>
              </h1>
            </div>
            
            {/* Story Declaration */}
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 mx-4 border border-fuchsia-300/40 transform hover:scale-105 transition-all relative">
              {/* Decorative quote marks */}
              <div className="absolute -top-2 -left-2 text-6xl text-fuchsia-200/30">"</div>
              <div className="absolute -bottom-4 -right-2 text-6xl text-fuchsia-200/30">"</div>
              
              <p className="text-white/95 text-lg leading-relaxed text-center relative">
                <span className="font-bold text-fuchsia-200">We're not here to remind you to breathe, journal, or "find balance."</span>
              </p>
              <p className="text-fuchsia-100/80 text-base mt-4 text-center">
                You already have enough apps telling you what's wrong with you.
              </p>
            </div>
            
            {/* Royal Decree Style */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-fuchsia-500/30 to-pink-500/30 backdrop-blur rounded-full py-6 px-10 border-2 border-fuchsia-200/60 relative">
                {/* Crown decoration */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl">👑</div>
                <p className={`text-white text-2xl bg-gradient-to-r ${screenContent.mainColor} bg-clip-text text-transparent animate-pulse font-bold`}>
                  {highlight}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Screen 2: The Recognition Scene - The Knowing Look */}
        {id === 2 && (
          <div className="space-y-8 max-w-md mx-auto">
            {/* The Question Posed */}
            <div className="text-center mb-8">
              <h1 className="text-white/90 text-2xl mb-6 leading-tight">
                {title}
              </h1>
              
              {/* Central Portrait - Like a character introduction */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full transform scale-110"></div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1701470552828-318248979b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGV5ZSUyMHJvbGwlMjBleGhhdXN0ZWQlMjB0aXJlZHxlbnwxfHx8fDE3NTcwNTAxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Woman with exhausted eye roll expression"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/30 relative shadow-2xl"
                />
                
                {/* The Revelation */}
                <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 border border-slate-400/30 mb-4">
                  <p className="text-white/85 text-lg italic text-center">
                    {subtitle}
                  </p>
                </div>
                
                <div className="text-6xl mt-2 animate-bounce">{highlight}</div>
              </div>
            </div>

            {/* The Knowing Exchange */}
            {eyeRoll && (
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 relative">
                {/* Dramatic spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl"></div>
                <p className="text-white text-xl leading-relaxed text-center font-medium relative">
                  {eyeRoll}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Screen 3: The Receipts - Using your exact language */}
        {id === 3 && (
          <div className="space-y-6 max-w-md mx-auto">
            {/* Your Title */}
            <div className="text-center">
              <h1 className={`text-white text-2xl leading-tight mb-4 bg-gradient-to-r ${screenContent.mainColor} bg-clip-text text-transparent font-bold`}>
                {title}
              </h1>
              <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-300/30">
                <p className="text-white/90 text-lg leading-relaxed">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Your LOG IT ALL HERE */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-fuchsia-500/30 to-pink-500/30 backdrop-blur rounded-2xl py-6 px-8 border-2 border-fuchsia-200/60">
                <h2 className={`text-white text-3xl bg-gradient-to-r ${screenContent.mainColor} bg-clip-text text-transparent font-bold`}>
                  {highlight}
                </h2>
              </div>
            </div>

            {/* Your description */}
            {description && (
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <p className="text-white/90 text-base leading-relaxed text-center">
                  {description}
                </p>
              </div>
            )}

            {/* Your Steps */}
            {steps && (
              <div className="space-y-4">
                {/* Step 1: Log It */}
                <div className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-5 border border-indigo-300/40">
                  <h3 className="text-white font-bold text-lg mb-3">Step 1: Log It</h3>
                  <p className="text-white/90 text-base leading-relaxed">{steps.step1}</p>
                </div>

                {/* Step 2: Get It Priced */}
                <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-5 border border-purple-300/40">
                  <h3 className="text-white font-bold text-lg mb-3">Step 2: Get It Priced</h3>
                  <p className="text-white/90 text-base leading-relaxed">{steps.step2}</p>
                </div>

                {/* Step 3: (your text just says "Step 3:") */}
                <div className="bg-pink-900/30 backdrop-blur-sm rounded-2xl p-5 border border-pink-300/40">
                  <h3 className="text-white font-bold text-lg mb-3">Step 3:</h3>
                  <p className="text-white/90 text-base leading-relaxed">{steps.step3}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Screen 4: Your Personal Note - Using your exact words */}
        {id === 4 && (
          <div className="space-y-6 max-w-md mx-auto">
            <div className="text-center">
              <h1 className={`text-white text-xl mb-6 bg-gradient-to-r ${screenContent.mainColor} bg-clip-text text-transparent font-bold tracking-wide`}>
                {title}
              </h1>
            </div>

            {/* Your personal note - exactly as you wrote it */}
            {originalNote && (
              <div className="bg-gradient-to-br from-pink-900/20 to-fuchsia-900/20 backdrop-blur-sm border border-pink-300/30 rounded-3xl p-8 relative">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-pink-200/40 text-lg">💕</div>
                <div className="absolute bottom-4 left-4 text-fuchsia-200/40 text-lg">✨</div>
                
                {/* Your content with your natural paragraph breaks */}
                <div className="text-white/95 space-y-4 leading-relaxed text-base">
                  {originalNote.split('\n\n').map((paragraph, i) => (
                    <p 
                      key={i} 
                      className={`${
                        paragraph.includes('receipts 💸') ? 'text-fuchsia-200 font-medium' :
                        paragraph.includes('taken for granted') ? 'text-pink-200 font-medium' :
                        paragraph.includes('FYI:') ? 'text-yellow-200 font-medium' :
                        'text-white/90'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Your signature */}
            {signature && (
              <div className="bg-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/30 text-center">
                <div className={`text-white bg-gradient-to-r ${screenContent.mainColor} bg-clip-text text-transparent font-bold`}>
                  {signature.split('\n').map((line, i) => (
                    <div key={i} className="text-base">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>


    </div>
  )
}