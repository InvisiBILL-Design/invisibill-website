import { useState, useEffect } from 'react'

// Hidden surprises that activate based on user behavior
export function InvisibleSurprises() {
  const [secrets, setSecrets] = useState({
    konami: false,
    tripleClick: false,
    scrollSpy: false,
    timeSpent: false
  })
  
  const [timeOnSite, setTimeOnSite] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])
  
  // Track time spent on site
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnSite(prev => prev + 1)
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  // Unlock secret after 30 seconds
  useEffect(() => {
    if (timeOnSite >= 30 && !secrets.timeSpent) {
      setSecrets(prev => ({ ...prev, timeSpent: true }))
    }
  }, [timeOnSite, secrets.timeSpent])
  
  // Konami code listener (↑↑↓↓←→←→BA)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key
      const newSequence = [...konamiSequence, key].slice(-10)
      setKonamiSequence(newSequence)
      
      const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                     'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
      
      if (newSequence.length >= 10 && 
          newSequence.slice(-10).join('') === konami.join('')) {
        setSecrets(prev => ({ ...prev, konami: true }))
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiSequence])
  
  // Triple click detector
  useEffect(() => {
    let clickTimeout: NodeJS.Timeout
    
    const handleClick = () => {
      setClicks(prev => prev + 1)
      
      clearTimeout(clickTimeout)
      clickTimeout = setTimeout(() => {
        if (clicks >= 2) { // Will be 3 after this click
          setSecrets(prev => ({ ...prev, tripleClick: true }))
        }
        setClicks(0)
      }, 500)
    }
    
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
      clearTimeout(clickTimeout)
    }
  }, [clicks])
  
  // Scroll percentage tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      
      if (scrollPercent > 80 && !secrets.scrollSpy) {
        setSecrets(prev => ({ ...prev, scrollSpy: true }))
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [secrets.scrollSpy])
  
  return (
    <>
      {/* Secret messages that appear based on user behavior */}
      
      {/* Time-based secret */}
      {secrets.timeSpent && (
        <div className="fixed bottom-4 left-4 z-50 animate-fadeInvisible">
          <div className="bg-pink-100 border border-pink-300 rounded-lg p-3 text-xs text-pink-800 max-w-48">
            <div className="font-handwriting-bold">psst... 👀</div>
            <div className="mt-1">You've been here {timeOnSite}s. That's longer than most people spend reading their own texts.</div>
          </div>
        </div>
      )}
      
      {/* Konami code secret */}
      {secrets.konami && (
        <div className="fixed top-20 right-4 z-50 animate-bounce">
          <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 text-sm text-purple-800 max-w-64">
            <div className="font-handwriting-bold text-center">🎮 CHEAT CODE ACTIVATED!</div>
            <div className="mt-2 text-xs text-center">
              You found the secret! Here's your reward: knowing that you're exactly the kind of person who needs this app. 💅
            </div>
          </div>
        </div>
      )}
      
      {/* Triple click secret */}
      {secrets.tripleClick && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-pulse">
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 text-center shadow-lg">
            <div className="text-lg">🙄</div>
            <div className="text-sm text-yellow-800 font-handwriting-bold mt-2">
              Triple clicking? Really?<br />
              <span className="text-xs">You're going to love this app.</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Scroll-based secret */}
      {secrets.scrollSpy && (
        <div className="fixed bottom-16 right-4 z-40 animate-fadeInvisible">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-300 rounded-full px-4 py-2 text-xs text-pink-800">
            <span className="font-handwriting-bold">You made it this far!</span> 🏆
          </div>
        </div>
      )}
      
      {/* Floating invisible elements that appear occasionally */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-invisible text-pink-200 text-xs opacity-20"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 2}s`
            }}
          >
            invisible
          </div>
        ))}
      </div>
    </>
  )
}