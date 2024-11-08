import { useState } from 'react';

export default function Home() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }]);
      // Simulate a response for testing
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { role: 'assistant', content: `You said: ${input}` }]);
      }, 500);
      setInput('');
    }
  };

  return (
    <div>
      {/* Test Div for Tailwind CSS */}
      <div className="bg-red-500 text-white p-10">
        Tailwind CSS is working!
      </div>

      {/* Main Content with Background Image */}
      <div className="min-h-screen relative overflow-hidden bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KrLOlRijtL3jm0f4D7EOkCuloFG0iL.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-2xl">
            {!started ? (
              <div className="p-8 text-center backdrop-blur-sm bg-black/50 rounded-3xl border-2 border-orange-400/50">
                <h1 className="text-5xl font-bold text-orange-400 mb-6 font-serif">
                  Tales of Middle-earth
                </h1>
                <p className="text-xl text-orange-300/90 mb-8 font-serif">
                  Begin your journey through the realms of shadow and flame
                </p>
                <button
                  onClick={() => setStarted(true)}
                  className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_15px_rgba(251,146,60,0.5)] font-serif"
                >
                  Start your adventure ✨
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-[600px] backdrop-blur-md bg-black/40 rounded-3xl border-2 border-orange-400/50">
                <div className="flex-grow p-4 overflow-auto">
                  {messages.map((m, index) => (
                    <div key={index} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <span
                        className={`inline-block p-3 rounded-2xl ${
                          m.role === 'user' ? 'bg-orange-400 text-black' : 'bg-green-700 text-orange-400'
                        } shadow-lg`}
                      >
                        {m.content}
                      </span>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="p-4 border-t border-orange-400/30">
                  <div className="flex gap-2">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Speak, friend..."
                      className="flex-grow bg-black/30 text-orange-400 border border-orange-400/30 rounded-md p-2 placeholder-orange-400/50 focus:border-orange-400 focus:ring-1 focus:ring-orange-400 outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
