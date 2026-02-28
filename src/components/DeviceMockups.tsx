import { motion } from 'motion/react';

export function IPhoneMockup({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] h-[500px] w-[240px] shadow-2xl overflow-hidden ${className}`}>
      <div className="w-[120px] h-[18px] bg-gray-900 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] z-20"></div>
      <div className="h-[36px] w-[3px] bg-gray-800 absolute -left-[11px] top-[100px] rounded-l-lg"></div>
      <div className="h-[36px] w-[3px] bg-gray-800 absolute -left-[11px] top-[150px] rounded-l-lg"></div>
      <div className="h-[50px] w-[3px] bg-gray-800 absolute -right-[11px] top-[120px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
        <img src={src} className="w-full h-full object-cover" alt={alt} referrerPolicy="no-referrer" />
        {/* Overlay for map look */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
      </div>
    </div>
  );
}

export function AppleWatchMockup({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto border-gray-800 bg-gray-800 border-[6px] rounded-[2rem] h-[220px] w-[180px] shadow-xl overflow-visible ${className}`}>
      {/* Digital Crown */}
      <div className="absolute -right-[10px] top-[40px] w-[4px] h-[30px] bg-gray-600 rounded-r-md shadow-sm"></div>
      {/* Side Button */}
      <div className="absolute -right-[8px] top-[90px] w-[2px] h-[40px] bg-gray-700 rounded-r-md"></div>
      {/* Watch Band Top */}
      <div className="absolute -top-[40px] left-[20px] right-[20px] h-[40px] bg-zinc-900 rounded-t-xl -z-10"></div>
      {/* Watch Band Bottom */}
      <div className="absolute -bottom-[40px] left-[20px] right-[20px] h-[40px] bg-zinc-900 rounded-b-xl -z-10"></div>
      
      <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-black relative">
        <img src={src} className="w-full h-full object-cover opacity-90" alt={alt} referrerPolicy="no-referrer" />
        {/* Traffic overlay simulation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
      </div>
    </div>
  );
}
