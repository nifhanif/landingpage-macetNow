import { motion } from 'motion/react';
import { AppleWatchMockup, IPhoneMockup } from './components/DeviceMockups';
import { Map, Navigation, Smartphone, Watch, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500" />
            MacetNow
          </div>
          <button className="text-sm font-medium bg-zinc-900 text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-colors">
            Get the App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
              Real-time traffic, <br />
              <span className="text-zinc-500">right on your wrist.</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              Monitor real-time traffic conditions directly from your Apple Watch. Avoid congestion with instant visual traffic indicators and smart route tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors text-lg">
                Download on App Store
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-colors text-lg">
                Learn more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <div className="relative h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-10 md:right-32 z-10"
            >
              <IPhoneMockup 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" 
                alt="MacetNow iPhone App" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 z-20"
            >
              <AppleWatchMockup 
                src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=400&auto=format&fit=crop" 
                alt="MacetNow Apple Watch App" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">Your Personal Traffic Companion</h2>
          <p className="text-xl text-zinc-600 leading-relaxed">
            <strong className="text-zinc-900 font-medium">MacetNow for Apple Watch</strong> brings real-time traffic monitoring to your wrist. No more guessing about road conditions - know before you go!
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Key Features</h2>
            <p className="text-lg text-zinc-500">Everything you need to beat the traffic.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Traffic Visualization</h3>
              <p className="text-zinc-600 mb-4">Instantly see traffic conditions along your route with color-coded indicators.</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span> Green = Smooth flowing traffic</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Yellow = Moderate traffic</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span> Red = Heavy congestion / Macet</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Route Tracking</h3>
              <p className="text-zinc-600">Set your origin and destination on your iPhone. The Watch automatically displays the route with traffic conditions. See your progress along the route in real-time.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless iPhone Integration</h3>
              <p className="text-zinc-600">Route data syncs automatically from iPhone to Apple Watch. Works with Google Maps integration on the companion iPhone app. Stay connected with WatchConnectivity.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Watch className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Navigation</h3>
              <p className="text-zinc-600">Visual progress indicator shows your current position. Destination flag indicator helps you track your destination. Quick glance at traffic without touching your phone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-zinc-400">Get started in four simple steps.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Open App", desc: "Open the TrafficWatch iPhone app to set your route." },
              { step: "2", title: "Set Route", desc: "Choose your origin and destination." },
              { step: "3", title: "Auto Sync", desc: "The traffic data automatically syncs to your Apple Watch." },
              { step: "4", title: "Glance", desc: "Check traffic conditions at a glance on your wrist." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-zinc-800 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 right-0 w-full h-[1px] bg-zinc-800 -z-10 translate-x-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-tight mb-4">Perfect For</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Daily commuters in busy cities",
              "Delivery drivers and ride-share operators",
              "Anyone who wants to avoid traffic delays",
              "Indonesian users navigating Jakarta and other cities"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <p className="text-lg text-zinc-700 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 py-12 px-6 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-orange-500" />
            MacetNow
          </div>
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} MacetNow. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
