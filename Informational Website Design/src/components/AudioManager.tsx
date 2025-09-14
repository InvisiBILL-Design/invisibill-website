import { useEffect, useRef, useState } from 'react'

interface AudioManagerProps {
  audioUrl?: string // Path to your .wav file (optional)
  currentScreen: number
  onAudioCue?: (cuePoint: string) => void
  isPlaying: boolean
  onPlaybackChange?: (isPlaying: boolean) => void
}

// Define audio cue points that match your narrative timing
const AUDIO_CUES = {
  // Screen 1 timings (matches your existing DelightfulSurprise timings)
  typewriterStart: 0, // Start typing immediately
  typewriterComplete: 2.0, // When typing finishes (matches 2000ms delay)
  surpriseReveal: 3.5, // The "OPPOSITE" reveal (matches 3500ms)
  invisiBillReveal: 4.0, // InvisiBILL easter egg (matches 4000ms)
  restContent: 5.0, // Full content visible (matches 5000ms)
  explosionEnd: 6.0, // Stop explosion effects (matches 6000ms)
  
  // Screen transitions (you can adjust these based on your audio)
  screen2Transition: 8.0, // Move to recognition screen
  screen3Transition: 12.0, // Move to toolkit screen
  screen4Transition: 18.0, // Move to personal letter
  
  // Optional: Additional audio cues for emphasis
  eyeRollMoment: 10.0, // During the eye roll screen
  receiptsEmphasis: 15.0, // When "receipts" concept is introduced
  personalNoteStart: 20.0, // Beginning of Lisa's letter
  heartfeltMoment: 25.0, // The emotional core of the letter
  callToAction: 30.0, // Final "GET MY RECEIPTS" moment
}

export function AudioManager({ 
  audioUrl, 
  currentScreen, 
  onAudioCue, 
  isPlaying,
  onPlaybackChange 
}: AudioManagerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [triggeredCues, setTriggeredCues] = useState<Set<string>>(new Set())
  const [audioError, setAudioError] = useState<string | null>(null)
  const [hasAudio, setHasAudio] = useState(false)

  // Check if audio file exists and load it
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !audioUrl) return

    const handleLoadedMetadata = () => {
      setDuration(audio.duration)
      setHasAudio(true)
      setAudioError(null)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      onPlaybackChange?.(false)
    }

    const handleError = () => {
      setAudioError("Audio file not found or couldn't be loaded")
      setHasAudio(false)
      onPlaybackChange?.(false)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [audioUrl, onPlaybackChange])

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !hasAudio) return

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error('Audio play error:', error)
        setAudioError("Couldn't play audio file")
        onPlaybackChange?.(false)
      })
    } else {
      audio.pause()
    }
  }, [isPlaying, hasAudio, onPlaybackChange])

  // Trigger audio cues based on current time
  useEffect(() => {
    Object.entries(AUDIO_CUES).forEach(([cueName, cueTime]) => {
      if (currentTime >= cueTime && !triggeredCues.has(cueName)) {
        setTriggeredCues(prev => new Set(prev).add(cueName))
        onAudioCue?.(cueName)
      }
    })
  }, [currentTime, onAudioCue, triggeredCues])

  // Reset triggered cues when audio restarts
  useEffect(() => {
    if (currentTime < 1) {
      setTriggeredCues(new Set())
    }
  }, [currentTime])

  // If no audio URL provided, just handle cues with manual timing
  if (!audioUrl) {
    return null
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="auto"
      />
      
      {/* Audio Controls (for development/testing) */}
      <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm max-w-xs">
        {audioError ? (
          <div className="text-red-300 text-xs mb-2">
            ⚠️ {audioError}
            <div className="mt-1 text-gray-300">
              Add your .wav file to /public/ and update the audioUrl path
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-4 mb-2">
              <button
                onClick={() => onPlaybackChange?.(!isPlaying)}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  hasAudio 
                    ? 'bg-pink-600 hover:bg-pink-700' 
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
                disabled={!hasAudio}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
              
              <div className="text-xs">
                {Math.floor(currentTime)}s / {Math.floor(duration)}s
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-48 h-2 bg-gray-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-pink-500 transition-all duration-100"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
          </>
        )}
        
        {/* Cue indicators */}
        <div className="mt-2 text-xs opacity-70">
          Screen: {currentScreen + 1} | Cues: {triggeredCues.size}
          {!hasAudio && !audioError && (
            <div className="text-yellow-300 mt-1">
              🎵 Loading audio...
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// Helper hook for audio-synced screen progression
export function useAudioSyncedProgression(
  currentScreen: number,
  setCurrentScreen: (screen: number) => void,
  audioEnabled = false
) {
  const handleAudioCue = (cuePoint: string) => {
    if (!audioEnabled) return
    
    // Auto-advance screens based on audio cues
    switch (cuePoint) {
      case 'screen2Transition':
        if (currentScreen === 0) setCurrentScreen(1)
        break
      case 'screen3Transition':
        if (currentScreen === 1) setCurrentScreen(2)
        break
      case 'screen4Transition':
        if (currentScreen === 2) setCurrentScreen(3)
        break
    }
  }

  return { handleAudioCue }
}