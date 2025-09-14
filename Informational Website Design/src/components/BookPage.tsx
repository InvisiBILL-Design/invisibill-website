import { useState, useEffect } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface BookPageProps {
  id: number
  chapter?: string
  chapterTitle?: string
  title: string
  subtitle: string
  highlight: string
  extraContent?: string
  signature?: string
  confession?: string
  eyeRoll?: string
  originalNote?: string
  description?: string
  steps?: {
    step1: string
    step2: string 
    step3: string
  }
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrevious: () => void
  onGetStarted: () => void
  isFirst: boolean
  isLast: boolean
}

export function BookPage({
  id,
  chapter,
  chapterTitle,
  title,
  subtitle,
  highlight,
  signature,
  eyeRoll,
  originalNote,
  description,
  steps,
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  onGetStarted,
  isFirst,
  isLast
}: BookPageProps) {
  const [isPageTurning, setIsPageTurning] = useState(false)

  const handlePageTurn = (direction: 'next' | 'prev') => {
    setIsPageTurning(true)
    setTimeout(() => {
      if (direction === 'next') {
        isLast ? onGetStarted() : onNext()
      } else {
        onPrevious()
      }
      setIsPageTurning(false)
    }, 600)
  }

  // Get page-specific styling
  const getPageStyling = () => {
    switch(id) {
      case 1:
        return {
          bgPattern: 'royal',
          accentColor: 'text-rose-600',
          borderColor: 'border-rose-400/30',
          dropCap: 'W',
          illumination: '👑'
        }
      case 2: 
        return {
          bgPattern: 'aged',
          accentColor: 'text-amber-700',
          borderColor: 'border-amber-500/40', 
          dropCap: 'W',
          illumination: '😤'
        }
      case 3:
        return {
          bgPattern: 'ledger',
          accentColor: 'text-purple-600',
          borderColor: 'border-purple-400/30',
          dropCap: 'T',
          illumination: '📜'
        }
      case 4:
        return {
          bgPattern: 'diary',
          accentColor: 'text-fuchsia-600', 
          borderColor: 'border-fuchsia-400/30',
          dropCap: 'I',
          illumination: '💕'
        }
      default:
        return {
          bgPattern: 'parchment',
          accentColor: 'text-purple-600',
          borderColor: 'border-purple-400/30', 
          dropCap: 'T',
          illumination: '✨'
        }
    }
  }

  const pageStyle = getPageStyling()

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 flex items-center justify-center p-4 font-serif">
      
      {/* Book Container */}
      <div className="relative max-w-4xl w-full aspect-[4/3] perspective-1000">
        
        {/* Book Shadow */}
        <div className="absolute inset-0 bg-black/20 blur-xl transform translate-x-2 translate-y-4 rounded-lg"></div>
        
        {/* Open Book */}
        <div className={`relative w-full h-full bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg shadow-2xl border-4 border-amber-800/30 transform ${isPageTurning ? 'scale-95 rotate-y-5' : ''} transition-all duration-600`}>
          
          {/* Book Binding - Center crease */}
          <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-gradient-to-b from-amber-800/20 via-amber-700/30 to-amber-800/20 transform -translate-x-2 shadow-inner rounded-sm"></div>
          
          {/* Left Page (Previous or Current) */}
          <div className="absolute left-0 top-0 w-1/2 h-full">
            {/* Page Content Container */}
            <div className="relative w-full h-full p-8 pr-12">
              
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className={`w-full h-full ${
                  pageStyle.bgPattern === 'royal' ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(190,24,93,0.1)_0%,transparent_50%)]' :
                  pageStyle.bgPattern === 'aged' ? 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4a574" fill-opacity="0.08"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="27" cy="17" r="1"/%3E%3Ccircle cx="47" cy="27" r="1"/%3E%3C/g%3E%3C/svg%3E")]' :
                  pageStyle.bgPattern === 'ledger' ? 'bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(139,69,19,0.05)_25px)]' :
                  pageStyle.bgPattern === 'diary' ? 'bg-[repeating-linear-gradient(0deg,transparent,transparent_28px,rgba(219,39,119,0.06)_29px)]' :
                  'bg-gradient-to-br from-yellow-100/50 to-amber-100/50'
                }`}></div>
              </div>
              
              {/* Page Number */}
              <div className="absolute top-6 left-8 text-amber-800/60 text-sm font-mono">
                {currentPage}
              </div>
              
              {/* Decorative Border */}
              <div className={`absolute inset-6 border-2 ${pageStyle.borderColor} rounded-md`}>
                {/* Corner Decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-100 rotate-45 border border-amber-400/30"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-100 rotate-45 border border-amber-400/30"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-100 rotate-45 border border-amber-400/30"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-amber-100 rotate-45 border border-amber-400/30"></div>
              </div>
            </div>
          </div>
          
          {/* Right Page (Main Content) */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="relative w-full h-full p-8 pl-12">
              
              {/* Paper Texture */}
              <div className="absolute inset-0 opacity-20">
                <div className={`w-full h-full ${
                  pageStyle.bgPattern === 'royal' ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(190,24,93,0.1)_0%,transparent_50%)]' :
                  pageStyle.bgPattern === 'aged' ? 'bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4a574" fill-opacity="0.08"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="27" cy="17" r="1"/%3E%3Ccircle cx="47" cy="27" r="1"/%3E%3C/g%3E%3C/svg%3E")]' :
                  pageStyle.bgPattern === 'ledger' ? 'bg-[repeating-linear-gradient(0deg,transparent,transparent_24px,rgba(139,69,19,0.05)_25px)]' :
                  pageStyle.bgPattern === 'diary' ? 'bg-[repeating-linear-gradient(0deg,transparent,transparent_28px,rgba(219,39,119,0.06)_29px)]' :
                  'bg-gradient-to-br from-yellow-100/50 to-amber-100/50'
                }`}></div>
              </div>
              
              {/* Page Number */}
              <div className="absolute top-6 right-8 text-amber-800/60 text-sm font-mono">
                {currentPage + 1}
              </div>
              
              {/* Chapter Header - Illuminated Manuscript Style */}
              {chapter && (
                <div className="mb-6 text-center relative">
                  <div className="text-amber-800/70 text-xs tracking-[0.3em] font-mono mb-2">
                    {chapter.toUpperCase()}
                  </div>
                  <div className={`${pageStyle.accentColor} text-lg tracking-wide border-b border-amber-400/30 pb-2 inline-block font-bold`}>
                    {chapterTitle}
                  </div>
                  
                  {/* Decorative flourish */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl">
                    {pageStyle.illumination}
                  </div>
                </div>
              )}
              
              {/* Main Content */}
              <div className="space-y-4 text-amber-900 relative z-10">
                
                {/* Page 1: Royal Decree */}
                {id === 1 && (
                  <div className="space-y-6">
                    {/* Illuminated Drop Cap */}
                    <div className="relative">
                      <div className="float-left w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-lg mr-4 mb-2 flex items-center justify-center border-2 border-rose-700 shadow-lg">
                        <span className="text-white text-2xl font-bold font-serif">{pageStyle.dropCap}</span>
                      </div>
                      <p className="text-lg leading-relaxed font-serif">
                        elcome to the <em className="font-bold text-rose-700">opposite</em> of every other wellness app.
                      </p>
                    </div>
                    
                    <div className="clear-both border-l-4 border-rose-400 pl-6 my-6">
                      <p className="text-base leading-loose italic">
                        {subtitle}
                      </p>
                    </div>
                    
                    {/* Royal Proclamation Box */}
                    <div className="bg-rose-50 border-2 border-rose-300 rounded-lg p-6 text-center relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose-100 px-4 py-1 border border-rose-300 rounded-full">
                        <span className="text-xs text-rose-700 font-mono tracking-wider">ROYAL DECREE</span>
                      </div>
                      <p className="text-xl text-rose-800 font-bold mt-2">
                        {highlight}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Page 2: The Recognition */}
                {id === 2 && (
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="float-left w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg mr-4 mb-2 flex items-center justify-center border-2 border-amber-800 shadow-lg">
                        <span className="text-white text-2xl font-bold font-serif">{pageStyle.dropCap}</span>
                      </div>
                      <p className="text-lg leading-relaxed">
                        hat we don't know is...
                      </p>
                    </div>
                    
                    <div className="clear-both bg-amber-50 border border-amber-300 rounded-lg p-6 text-center relative">
                      {/* Portrait placeholder */}
                      <div className="w-20 h-20 bg-amber-200 rounded-full mx-auto mb-4 border-3 border-amber-400 relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300/50 to-amber-600/50"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-2xl">
                          {pageStyle.illumination}
                        </div>
                      </div>
                      
                      <p className="text-base italic leading-relaxed mb-4">
                        {subtitle}
                      </p>
                      
                      <div className="text-4xl mb-2">{highlight}</div>
                      
                      {eyeRoll && (
                        <div className="border-t border-amber-400/50 pt-4 mt-4">
                          <p className="text-amber-800 font-medium">
                            {eyeRoll}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Page 3: The Receipts */}
                {id === 3 && (
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="float-left w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg mr-4 mb-2 flex items-center justify-center border-2 border-purple-800 shadow-lg">
                        <span className="text-white text-2xl font-bold font-serif">{pageStyle.dropCap}</span>
                      </div>
                      <p className="text-lg leading-relaxed">
                        his is where you keep the receipts. 🧾
                      </p>
                    </div>
                    
                    <div className="clear-both border-l-4 border-purple-400 pl-6">
                      <p className="text-base leading-loose italic">
                        {subtitle}
                      </p>
                    </div>
                    
                    {/* LOG IT ALL HERE - Ledger Style */}
                    <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4 text-center">
                      <p className="text-2xl font-bold text-purple-800 tracking-wider">
                        {highlight}
                      </p>
                    </div>
                    
                    {description && (
                      <div className="bg-amber-50/50 border border-amber-300 rounded-lg p-4">
                        <p className="text-sm leading-relaxed text-amber-800">
                          {description}
                        </p>
                      </div>
                    )}
                    
                    {/* Steps as a numbered list */}
                    {steps && (
                      <div className="space-y-3">
                        <div className="border border-purple-300/50 rounded-lg p-4 bg-purple-50/30">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">I</div>
                            <div>
                              <p className="font-semibold text-purple-800 mb-1">Log It</p>
                              <p className="text-sm text-purple-700 leading-relaxed">{steps.step1}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-purple-300/50 rounded-lg p-4 bg-purple-50/30">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">II</div>
                            <div>
                              <p className="font-semibold text-purple-800 mb-1">Get It Priced</p>
                              <p className="text-sm text-purple-700 leading-relaxed">{steps.step2}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-purple-300/50 rounded-lg p-4 bg-purple-50/30">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">III</div>
                            <div>
                              <p className="font-semibold text-purple-800 mb-1">Your Choice</p>
                              <p className="text-sm text-purple-700 leading-relaxed">{steps.step3}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Page 4: Personal Letter */}
                {id === 4 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-lg font-medium text-fuchsia-700 mb-4">
                        {title}
                      </p>
                    </div>
                    
                    {/* Letter Content */}
                    {originalNote && (
                      <div className="bg-fuchsia-50/50 border border-fuchsia-200 rounded-lg p-6 relative">
                        {/* Decorative wax seal */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-fuchsia-600 rounded-full border-3 border-fuchsia-100 flex items-center justify-center">
                          <span className="text-white text-xs">💕</span>
                        </div>
                        
                        <div className="space-y-3 text-sm leading-relaxed">
                          {originalNote.split('\n\n').map((paragraph, i) => (
                            <p 
                              key={i} 
                              className={`${
                                paragraph.includes('receipts 💸') ? 'font-medium text-fuchsia-700' :
                                paragraph.includes('taken for granted') ? 'font-medium text-fuchsia-600' :
                                paragraph.includes('FYI:') ? 'font-medium text-amber-700' :
                                'text-amber-800'
                              }`}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Signature */}
                    {signature && (
                      <div className="text-right">
                        <div className="inline-block bg-fuchsia-100 border border-fuchsia-300 rounded-lg p-4">
                          {signature.split('\n').map((line, i) => (
                            <div key={i} className="text-sm text-fuchsia-800 font-medium">
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Decorative Border */}
              <div className={`absolute inset-6 border-2 ${pageStyle.borderColor} rounded-md pointer-events-none`}></div>
            </div>
          </div>
          
          {/* Page Turn Controls - Styled as Book Edges */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            
            {/* Previous Page */}
            {!isFirst && (
              <button
                onClick={() => handlePageTurn('prev')}
                className="bg-amber-700 hover:bg-amber-600 text-amber-100 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg border border-amber-800 flex items-center space-x-2"
              >
                <span className="text-lg">←</span>
                <span>Previous Page</span>
              </button>
            )}
            
            {/* Page Indicator */}
            <div className="bg-amber-100 border-2 border-amber-400 rounded-full px-4 py-2">
              <span className="text-amber-800 font-mono text-sm">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            
            {/* Next Page / Get Started */}
            <button
              onClick={() => handlePageTurn('next')}
              className="bg-amber-700 hover:bg-amber-600 text-amber-100 px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg border border-amber-800 flex items-center space-x-2"
            >
              <span>{isLast ? '🚀 Begin My Story' : 'Next Page'}</span>
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
        
        {/* Book Bookmark */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-16 bg-gradient-to-b from-fuchsia-500 to-fuchsia-700 rounded-b-lg shadow-lg border-2 border-fuchsia-800">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-fuchsia-700"></div>
        </div>
      </div>
    </div>
  )
}