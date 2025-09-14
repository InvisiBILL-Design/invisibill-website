import { useState, useEffect } from 'react'
import { QRCodeGenerator } from './QRCodeGenerator'
import { InvisibleSurprises } from './InvisibleSurprises'
import { Button } from './ui/button'
const logoImage = 'https://7beec641cf2efd4dbb21cb99a86b3e7a.cdn.bubble.io/f1751601939690x372511263820131140/Background-2.svg'

export function MarketingWebsite() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  // App Store URLs (replace with actual URLs when ready)
  const appStoreUrl = "https://apps.apple.com/app/invisibill" // Replace with actual
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.invisibill" // Replace with actual
  const websiteUrl = "https://getinvisibill.com"

  // Detect scroll to add subtle animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  // Easter egg trigger after hovering logo
  const handleLogoHover = () => {
    setTimeout(() => setShowEasterEgg(true), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <InvisibleSurprises />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo area with hover easter egg */}
          <div 
            className="mb-8 cursor-pointer transition-all duration-300 hover:scale-105"
            onMouseEnter={handleLogoHover}
          >
            <img 
              src={logoImage}
              alt="InvisiBILL Logo"
              className="w-auto h-16 md:h-20 mx-auto mb-4 transition-transform duration-300 hover:rotate-2"
            />
            <h1 className="text-3xl md:text-5xl font-handwriting-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 mb-2">
              InvisiBILL - Your Anxiety and Burnout Best Friend
            </h1>
            <div className="text-sm text-gray-500 font-handwriting">
              from InvisiBILL LLC
            </div>
            <div className="text-xs text-pink-400 font-handwriting mt-1 transition-opacity duration-1000">
              {showEasterEgg ? "✨ The app that sees you ✨" : ""}
            </div>
          </div>

          {/* Main tagline with typewriter effect */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl mb-6 font-handwriting leading-relaxed">
              Finally, an app that's the 
              <span className="relative mx-2">
                <span className="text-yellow-600 font-handwriting-bold">OPPOSITE</span>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-600/50 animate-pulse" />
              </span>
              of every other wellness app
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're not here to remind you to breathe. We already know you're enough.
              <br />
              <span className="text-pink-600 font-handwriting-bold">
                We're here to help you keep the receipts.
              </span>
            </p>
          </div>

          {/* Download CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            {/* QR Code */}
            <QRCodeGenerator 
              url={websiteUrl}
              size={180}
              title="Scan to download"
              className="order-2 md:order-1"
            />

            {/* Download buttons */}
            <div className="order-1 md:order-2 space-y-4">
              <Button 
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(appStoreUrl, '_blank')}
              >
                Download for iPhone
              </Button>
              
              <div className="text-sm text-gray-500">
                Android coming soon • Currently in Apple review
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce text-pink-400 cursor-pointer" onClick={() => {
            document.getElementById('what-section')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            <div className="text-sm mb-2">Keep reading, it gets better</div>
            <div className="text-2xl">↓</div>
          </div>
        </div>
      </section>

      {/* What Section */}
      <section id="what-section" className="py-20 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-handwriting-bold mb-8 text-gray-800">
            What we don't know is...
          </h3>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            how many things you already did today that no one noticed – but still expected
          </p>
          
          <div className="text-6xl mb-6">🙄</div>
          
          <p className="text-lg text-pink-600 font-handwriting-bold italic">
            Yeah, we thought so.
          </p>
          
          {/* Invisible labor examples */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            {[
              "Remembering everyone's dietary restrictions",
              "Being the 'team player' who stays late",
              "Managing everyone else's emotions"
            ].map((item, i) => (
              <div key={i} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="text-sm text-gray-700">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-handwriting-bold text-center mb-12 text-gray-800">
            This is where you keep the receipts.
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                title: "Log Everything",
                description: "Every thankless task, every time you had to do something because someone else wouldn't.",
                icon: "📝"
              },
              {
                step: "02", 
                title: "Get Real Prices",
                description: "We'll use AI to assign real professional rates – therapy, project management, executive assistance.",
                icon: "💰"
              },
              {
                step: "03",
                title: "Your Receipts",
                description: "Send them out, keep them to yourself, share on social media, or maybe share with the community? We don't care! Just get your validation.",
                icon: "📄"
              }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-sm text-pink-600 font-handwriting-bold mb-2">
                  STEP {item.step}
                </div>
                <h4 className="text-xl font-handwriting-bold mb-4 text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}  
                </p>
              </div>
            ))}
          </div>

          {/* CTA in this section */}
          <div className="text-center">
            <Button 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(appStoreUrl, '_blank')}
            >
              I NEED MY RECEIPTS
            </Button>
          </div>
        </div>
      </section>



      {/* Why This Matters Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100/50 to-purple-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-handwriting-bold mb-8 text-gray-800">
            Look, we get it.
          </h3>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-pink-200">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xl">
                You do a million tiny things that keep everyone's world spinning.
              </p>
              
              <p className="text-lg">
                And somehow, you're still the one feeling guilty about "not doing enough."
              </p>
              
              <div className="text-4xl my-8">🤡</div>
              
              <p className="text-lg text-pink-600 font-handwriting-bold">
                That's some expensive clown behavior right there.
              </p>
              
              <p>
                Time to get some receipts and see what all that "nothing" you do is actually worth.
              </p>
              
              <p className="text-pink-600 font-handwriting-bold">
                Spoiler alert: It's probably more than your actual salary.
              </p>
              
              <p className="text-sm text-gray-500 italic mt-8">
                (And hey, if you want to share your invoices with other people who get it, cool. 
                If you want to keep them private and just quietly seethe, also cool. We're not your mom.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-handwriting-bold mb-6">
            Ready to become visible?
          </h3>
          
          <p className="text-xl mb-8 opacity-90">
            Download InvisiBILL now and finally get the validation you deserve.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <QRCodeGenerator 
              url={websiteUrl}
              size={150}
              title="Scan to download"
              className="text-white"
            />
            
            <div className="space-y-4">
              <Button 
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open(appStoreUrl, '_blank')}
              >
                GET MY RECEIPTS
              </Button>
              
              <div className="text-sm opacity-75">
                Available on iPhone • Android coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src={logoImage}
              alt="InvisiBILL Logo"
              className="w-auto h-6"
            />
            <div className="text-2xl font-handwriting-bold text-pink-400">
              InvisiBILL
            </div>
          </div>
          
          <div className="text-sm text-gray-400 mb-4">
            © 2025 InvisiBILL LLC • Made with love (and a little bit of petty) by Lisa
          </div>
          
          <div className="text-xs text-gray-500 mb-4">
            getinvisibill.com
          </div>
          
          <div className="mb-6">
            <a 
              href="mailto:help@getinvisibill.com?subject=InvisiBILL%20Support%20Request&body=Hi%20there!%20I%20need%20help%20with%20the%20InvisiBILL%20app.%20%0A%0AHere's%20what's%20going%20on:%20%0A%0A"
              className="text-pink-400 hover:text-pink-300 underline transition-colors duration-300 text-sm"
            >
              Need help? Email us
            </a>
          </div>
          
          {/* Hidden surprise in footer */}
          <div className="mt-8 p-4 border border-pink-400/30 rounded-lg bg-pink-50/20">
            <div className="text-sm text-pink-400 font-handwriting-bold hover:text-pink-300 transition-colors duration-500 cursor-default">
              ✨ You made it to the bottom. That's very you. ✨
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}