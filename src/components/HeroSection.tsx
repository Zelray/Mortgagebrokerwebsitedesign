import React, { useEffect, useState } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

function TypebotEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3/dist/web.js';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <typebot-standard typebot="lead-generation-gfek6cj" style={{ width: "100%", height: "600px" }} />;
}

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Your Dream Home Starts Here';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 80); // 80ms per character for smooth typing

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Animated Gradient Background with Fluid Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366] via-[#1e40af] to-[#6366f1]">
        {/* Animated Blob 1 - Teal */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-[#14b8a6] to-[#06b6d4] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        
        {/* Animated Blob 2 - Purple */}
        <div className="absolute top-0 -right-20 w-96 h-96 bg-gradient-to-br from-[#a855f7] to-[#ec4899] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        {/* Animated Blob 3 - Green */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#10b981] to-[#34d399] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        {/* Animated Blob 4 - Orange */}
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-reverse" />
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/50 via-transparent to-transparent" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-grid-flow" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#10b981]/40 rounded-full animate-float animation-delay-1000" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#a855f7]/40 rounded-full animate-float animation-delay-2000" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#06b6d4]/40 rounded-full animate-float animation-delay-3000" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 animate-fade-in">
              <Sparkles className="w-4 h-4 text-[#10b981]" />
              <span className="text-sm">NMLS #2280851 | Licensed in FL, AZ, TX</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up">
              <span className="bg-gradient-to-r from-[#10b981] via-[#14b8a6] to-[#06b6d4] bg-clip-text text-transparent">
                {typedText}
                {!isTypingComplete && <span className="animate-blink">|</span>}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-slide-up animation-delay-200">
              Get pre-approved in as little as 24 hours. Expert guidance for VA, FHA, Conventional & Jumbo loans.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 animate-slide-up animation-delay-400">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
                  3.5%
                </div>
                <div className="text-xs text-white/80 mt-1">Min. Down Payment</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#06b6d4] to-[#0ea5e9] bg-clip-text text-transparent">
                  24hr
                </div>
                <div className="text-xs text-white/80 mt-1">Fast Approval</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
                  $500M+
                </div>
                <div className="text-xs text-white/80 mt-1">Loans Funded</div>
              </div>
            </div>
          </div>

          {/* Right - Interactive Chatbot Placeholder */}
          <div className="relative animate-slide-up animation-delay-400">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#10b981] via-[#06b6d4] to-[#a855f7] rounded-3xl opacity-20 blur-2xl animate-pulse-glow" />
            
            {/* Chatbot Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/50">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#003366] via-[#1e40af] to-[#6366f1] p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Find Your Perfect Loan</h3>
                    <p className="text-sm text-white/80">Answer a few quick questions</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse-subtle" />
                  <span>Powered by AI • Average time: 2 minutes</span>
                </div>
              </div>

              {/* Chatbot Embed Area */}
              <div className="bg-gradient-to-br from-gray-50 to-white">
                <TypebotEmbed />
              </div>

              {/* Footer */}
              <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Secure & Confidential</span>
                  </div>
                  <span>🔒 SSL Encrypted</span>
                </div>
              </div>
            </div>

            {/* Floating Badge - Rating */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#f59e0b] to-[#ea580c] text-white rounded-full px-5 py-3 shadow-xl rotate-12 animate-bounce-slow">
              <div className="flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <div className="text-left">
                  <div className="text-sm font-bold leading-tight">5.0 Rating</div>
                  <div className="text-xs text-white/90 leading-tight">200+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}