'use client';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Wan 2.6 Video Kit
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional-grade video editing tools powered by Wan 2.6 AI. Create stunning content faster than ever before.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Pack */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Starter Pack</h2>
                <div className="text-4xl font-bold text-purple-300 mb-1">
                  $29
                  <span className="text-lg font-normal text-purple-200">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Basic AI video enhancement',
                  'Up to 10 projects/month',
                  '720p export quality',
                  'Email support',
                  '1 user license'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-purple-100">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/checkout?price=price_starter"
                className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Buy Now
              </a>
            </div>

            {/* Professional Pack */}
            <div className="bg-white/10 backdrop-blur-lg border-2 border-purple-400 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Professional Pack</h2>
                <div className="text-4xl font-bold text-purple-300 mb-1">
                  $79
                  <span className="text-lg font-normal text-purple-200">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Advanced AI video enhancement',
                  'Unlimited projects',
                  '4K export quality',
                  'Priority support',
                  '5 user licenses',
                  'Batch processing',
                  'Custom AI model fine-tuning',
                  'API access'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-purple-100">
                    <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/checkout?price=price_professional"
                className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-purple-300 mb-4">
            © 2025 Wan 2.6 Video Kit. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-purple-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}