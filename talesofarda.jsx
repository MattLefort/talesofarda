'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sparkles, Send } from 'lucide-react'

export default function Component() {
  const [started, setStarted] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="min-h-screen relative overflow-hidden bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KrLOlRijtL3jm0f4D7EOkCuloFG0iL.png')] bg-cover bg-center bg-no-repeat">
      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          {!started ? (
            <div className="p-8 text-center backdrop-blur-sm bg-black/50 rounded-3xl border-2 border-orange-400/50">
              <h1 className="text-5xl font-bold text-orange-400 mb-6 font-cinzel">
                Tales of Middle-earth
              </h1>
              <p className="text-xl text-orange-300/90 mb-8 font-cinzel">
                Begin your journey through the realms of shadow and flame
              </p>
              <Button 
                onClick={() => setStarted(true)}
                className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-6 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(251,146,60,0.5)] font-cinzel"
              >
                Start your adventure <Sparkles className="ml-2 w-6 h-6" />
              </Button>
            </div>
          ) : (
            <div className="flex flex-col h-[600px] backdrop-blur-md bg-black/40 rounded-3xl border-2 border-orange-400/50">
              <ScrollArea className="flex-grow p-4">
                {messages.map(m => (
                  <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`inline-block p-3 rounded-2xl ${
                      m.role === 'user' 
                        ? 'bg-orange-400 text-black' 
                        : 'bg-[#2d9659] text-orange-400'
                    } shadow-lg`}>
                      {m.content}
                    </span>
                  </div>
                ))}
              </ScrollArea>
              <form onSubmit={handleSubmit} className="p-4 border-t border-orange-400/30">
                <div className="flex gap-2">
                  <Input 
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Speak, friend..."
                    className="flex-grow bg-black/30 text-orange-400 border-orange-400/30 placeholder-orange-400/50 focus:border-orange-400 focus:ring-orange-400"
                  />
                  <Button 
                    type="submit" 
                    className="bg-orange-400 hover:bg-orange-500 text-black"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
