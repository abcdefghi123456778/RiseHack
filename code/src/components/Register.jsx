import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', { email, password, username });
  };

  const handleGoogleRegister = () => {
    console.log('Google Register');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4 sm:p-6">
      {/* Adjusted Blur effects - Larger, more diffuse, and subtle */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-700/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
         <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl "></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl"> {/* Reduced max-width */}
        {/* Main dark container - Changed background color and padding */}
        <div className="bg-zinc-800 rounded-2xl p-8 md:p-10 shadow-2xl"> {/* bg-[#2D2D2D] equivalent, adjusted padding */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center"> {/* Reduced gap */}
            
            {/* Left side - Form */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-8">Register</h1> {/* Reduced margin-bottom */}
              
              <form onSubmit={handleSubmit} className="space-y-5"> {/* Reduced space between elements */}
                {/* Email field */}
                <div>
                  <label className="block text-neutral-300 text-xs font-medium mb-1.5 uppercase tracking-wider"> {/* Adjusted label style */}
                    EMAIL (*)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base placeholder-neutral-500" /* bg-[#3A3A3A] equivalent */
                  />
                </div>
                {/* Password field */}
                <div>
                  <label className="block text-neutral-300 text-xs font-medium mb-1.5 uppercase tracking-wider">
                    PASSWORD (*)
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base placeholder-neutral-500"
                  />
                </div>
                {/* Username field */}
                <div>
                  <label className="block text-neutral-300 text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full px-4 py-3 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base placeholder-neutral-500"
                  />
                </div>
                
                {/* Login link and Google button */}
                <div className="pt-3 space-y-5"> {/* Adjusted spacing */}
                  <p className="text-sm text-neutral-400">
                    Already have an account?{' '}
                    <button 
                      type="button" 
                      className="font-medium text-white hover:text-neutral-200 focus:outline-none"
                      onClick={() => console.log('Login clicked')}
                    >
                      Login
                    </button>
                  </p>
                                      
                  <button
                    type="button"
                    onClick={handleGoogleRegister}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md font-medium transition-colors" /* Changed to purple, rounded-md */
                  >
                    Continue with Google
                  </button>
                </div>
              </form>
            </div>

            {/* Right side - Logo & "Let's Get Started" Button */}
            <div className="flex flex-col items-center justify-center mt-8 lg:mt-0">
              {/* Logo container - black box. Changed background and padding */}
              <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg"> {/* bg-[#1E1E1E] equivalent, adjusted padding */}
                <div className="flex flex-col items-center">
                  {/* Logo icon - Adjusted size */}
                  <div className="w-12 h-12 mb-4 text-purple-500"> {/* Reduced size and margin */}
                    {/* Placeholder SVG - User should replace this with their actual Risehack logo SVG */}
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path fill="currentColor" d="M50 10 C 30 10, 30 30, 50 30 C 70 30, 70 10, 50 10 Z M 50 35 C 40 35, 30 45, 30 55 L 40 55 C 40 50, 45 45, 50 45 C 55 45, 60 50, 60 55 L 70 55 C 70 45, 60 35, 50 35 Z M 25 60 L 75 60 L 75 70 L 60 70 L 60 85 L 40 85 L 40 70 L 25 70 Z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-wider">RISEHACK</h2>
                </div>
              </div>
                              
              {/* Get Started button */}
              <button
                type="submit" // Assuming this button submits the form on the left, or handle separately
                onClick={handleSubmit} // Connect to form submission if this is the primary submit
                className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md font-medium transition-colors w-full max-w-xs sm:max-w-sm" /* rounded-md, added max-width for consistency */
              >
                Let's Get Started
              </button>
            </div>

          </div>
        </div>
      </div>
      {/* Basic CSS for animations if not using Tailwind's animation utilities extensively */}
      <style jsx global>{`
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
export default Register;