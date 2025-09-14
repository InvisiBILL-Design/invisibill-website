import { useEffect, useRef } from 'react'

interface QRCodeGeneratorProps {
  url: string
  size?: number
  className?: string
  title?: string
}

// Simple QR Code generation using a public API
export function QRCodeGenerator({ 
  url, 
  size = 200, 
  className = "",
  title = "Scan to download"
}: QRCodeGeneratorProps) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&format=png&margin=10&qzone=2&color=EC4899&bgcolor=FFFFFF`
  
  return (
    <div className={`flex flex-col items-center space-y-3 ${className}`}>
      <div className="relative group">
        <img 
          src={qrUrl}
          alt={`QR Code for ${url}`}
          className="rounded-lg shadow-lg transition-transform group-hover:scale-105"
          width={size}
          height={size}
        />
        
        {/* Invisible surprise: QR code pulses when you hover */}
        <div className="absolute inset-0 bg-pink-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Easter egg: tiny "invisiBILL" text that appears on hover */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-700 font-handwriting-bold">
          ✨ made with love (and spite) ✨
        </div>
      </div>
      
      <p className="text-sm text-gray-600 text-center max-w-32">
        {title}
      </p>
    </div>
  )
}