
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Home as HomeIcon, 
  IndianRupee, 
  ArrowUpRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Award,
  ShieldCheck,
  TrendingUp,
  Building,
  Key,
  Tag,
  Briefcase
} from 'lucide-react';
import { NAV_ITEMS, PROPERTIES, RENTAL_PROPERTIES, TESTIMONIALS, AGENTS } from './constants';
import { Property } from './types';

// Page Transition Component
const PageTransition = ({ children }: { children?: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="pt-24"
  >
    {children}
  </motion.div>
);

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Sub-page Components ---

  const HomeView = () => (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden -mt-24 pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Luxury Home" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-tight mb-8">
                Real Estate <br /> Made Easy <br />
                <span className="text-[#FF7A00]">& Transparent</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
                Noida's premium property platform offering handpicked listings and expert insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => handleNavClick('buy')}
                  className="bg-[#FF7A00] text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center gap-3"
                >
                  Buy Home <ArrowUpRight />
                </button>
                <button 
                  onClick={() => handleNavClick('sell')}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all"
                >
                  Sell Property
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Stats */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">Decades of <span className="text-[#FF7A00]">Trust</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">We've spent 26 years mastering the Noida real estate landscape so you don't have to.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[{ label: 'Total Sales', value: '8k+' }, { label: 'Happy Clients', value: '14k+' }, { label: 'Active Listings', value: '16k+' }, { label: 'Verification', value: '100%' }].map((s, i) => (
            <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[40px]">
              <span className="text-5xl font-black text-black mb-2">{s.value}</span>
              <span className="text-xs uppercase font-bold text-[#FF7A00] tracking-widest">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Buy Preview Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl font-black uppercase tracking-tighter">Latest <span className="text-[#FF7A00]">Buy</span> Listings</h2>
              <p className="text-gray-500 mt-4">Hand-vetted premium properties ready for you.</p>
            </motion.div>
            <button onClick={() => handleNavClick('buy')} className="hidden md:flex items-center gap-2 font-black text-[#FF7A00] hover:underline">
              View All Properties <ArrowUpRight size={20}/>
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROPERTIES.slice(0, 3).map((p, i) => (
              <motion.div key={p.id} {...fadeInUp} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
                <div className="relative rounded-[40px] overflow-hidden mb-6 aspect-square">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-duration-500" />
                  <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full font-black text-[10px]">PREMIUM</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-gray-500 mb-2 flex items-center gap-1 font-medium"><MapPin size={14}/> {p.location}</p>
                <p className="text-2xl font-black">{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent Preview Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Looking to <span className="text-[#FF7A00]">Rent?</span></h2>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed">Whether you need a modern studio or a spacious family villa, our rental portfolio offers flexible terms and premium maintenance.</p>
              <div className="space-y-4 mb-10">
                {['Verified Landlords', 'No Hidden Fees', 'Instant Site Visits'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#FF7A00]" size={20} />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => handleNavClick('rent')} className="bg-black text-[#FF7A00] px-10 py-5 rounded-2xl font-black">Explore Rentals</button>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="relative">
               <img src={RENTAL_PROPERTIES[0].image} className="rounded-[60px] w-full h-[500px] object-cover" />
               <div className="absolute -bottom-8 -left-8 bg-[#FF7A00] p-10 rounded-[40px] shadow-2xl">
                  <p className="text-white font-black text-2xl leading-none">₹45,000/mo</p>
                  <p className="text-white/60 font-bold text-sm uppercase">Starting Price</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agents Preview */}
      <section className="py-24 px-6 bg-black text-white rounded-[60px] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">The <span className="text-[#FF7A00]">Consultants</span></h2>
            <p className="text-gray-400">The transparent team behind your property dreams.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {AGENTS.map((agent, i) => (
              <motion.div key={agent.id} {...fadeInUp} transition={{ delay: i * 0.1 }} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-[40px] mb-6 grayscale group-hover:grayscale-0 transition-all">
                  <img src={agent.image} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-bold mb-1">{agent.name}</h4>
                <p className="text-[#FF7A00] text-xs font-black uppercase tracking-widest">{agent.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleNavClick('agents')} className="border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white hover:text-black transition-all">Full Team Directory</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#FF7A00] w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-10 -rotate-6">
            <Star className="text-white" fill="white" size={32} />
          </div>
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-12"
            >
              <p className="text-3xl md:text-4xl font-black leading-tight mb-10">"{TESTIMONIALS[currentTestimonial].content}"</p>
              <div className="flex items-center justify-center gap-4">
                <img src={TESTIMONIALS[currentTestimonial].avatar} className="w-16 h-16 rounded-2xl object-cover" />
                <div className="text-left">
                  <p className="font-black text-lg">{TESTIMONIALS[currentTestimonial].name}</p>
                  <p className="text-gray-500 font-bold text-sm">{TESTIMONIALS[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4">
            <button onClick={prevTestimonial} className="bg-gray-100 p-5 rounded-2xl hover:bg-[#FF7A00] hover:text-white transition-colors"><ChevronLeft /></button>
            <button onClick={nextTestimonial} className="bg-gray-100 p-5 rounded-2xl hover:bg-[#FF7A00] hover:text-white transition-colors"><ChevronRight /></button>
          </div>
        </div>
      </section>

      {/* Sell Preview (CTA) */}
      <section className="py-24 px-6 bg-[#FF7A00]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">Sell your <br /> home <span className="text-black">today</span></h2>
          <button onClick={() => handleNavClick('sell')} className="bg-black text-[#FF7A00] px-16 py-8 rounded-[32px] font-black text-2xl hover:scale-105 transition-transform">Get Valuation</button>
        </div>
      </section>

      {/* Quick Contact Form (Home) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 text-white rounded-[80px] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF7A00]/10 blur-[100px]"></div>
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">Ready for a <br /><span className="text-[#FF7A00]">Site Visit?</span></h2>
                <p className="text-gray-400 text-xl mb-12">Book a private tour of any property in Noida. Our agents are available daily from 9 AM to 8 PM.</p>
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-5 rounded-3xl"><Phone size={32} className="text-[#FF7A00]"/></div>
                  <div>
                    <p className="text-xs font-black uppercase text-gray-500 tracking-widest">Speak to Agent</p>
                    <p className="text-2xl font-bold">072061 65093</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[40px] p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border-none p-5 rounded-2xl text-black outline-none focus:ring-2 focus:ring-[#FF7A00]" />
                  <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none p-5 rounded-2xl text-black outline-none focus:ring-2 focus:ring-[#FF7A00]" />
                  <button className="w-full bg-black text-[#FF7A00] font-black py-6 rounded-2xl text-lg uppercase tracking-widest">Inquire Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );

  const BuyView = () => (
    <PageTransition>
      <div className="px-6 max-w-7xl mx-auto py-12">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">Buy <span className="text-[#FF7A00]">Homes</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl">Find your perfect match among our 16,000+ hand-vetted premium listings across Noida.</p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 p-6 rounded-[32px] mb-12 flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[200px] bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3">
            <Search className="text-gray-400" size={20} />
            <input type="text" placeholder="Search locality..." className="bg-transparent outline-none w-full font-medium" />
          </div>
          <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold">Search</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROPERTIES.map(p => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative rounded-[40px] overflow-hidden mb-6 aspect-square">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-duration-500" />
                <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full font-bold text-xs">FOR SALE</div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="text-gray-500 mb-4 flex items-center gap-1"><MapPin size={16}/> {p.location}</p>
              <p className="text-3xl font-black text-black">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );

  const RentView = () => (
    <PageTransition>
      <div className="px-6 max-w-7xl mx-auto py-12">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">Rent <span className="text-[#FF7A00]">Space</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl">Flexible leasing options for modern professionals and growing families.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {RENTAL_PROPERTIES.map(p => (
            <div key={p.id} className="bg-gray-50 rounded-[50px] p-8 flex flex-col md:flex-row gap-8 items-center border border-transparent hover:border-[#FF7A00] transition-all">
              <img src={p.image} className="w-full md:w-1/2 h-64 object-cover rounded-[32px]" />
              <div className="flex-1">
                <div className="bg-black text-[#FF7A00] px-3 py-1 rounded-full text-[10px] font-bold w-fit mb-4">FOR RENT</div>
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-gray-500 mb-6">{p.description}</p>
                <p className="text-2xl font-black">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );

  const SellView = () => (
    <PageTransition>
      <div className="px-6 max-w-7xl mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">Sell <span className="text-[#FF7A00]">Fast</span></h1>
            <p className="text-xl text-gray-500 mb-12">List your property with EYP and reach thousands of verified buyers instantly. Our agents ensure a transparent and quick sale.</p>
            
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: 'Verified Buyers', desc: 'No fake inquiries or paper work issues.' },
                { icon: TrendingUp, title: 'Top Market Value', desc: 'Get the best valuation for your asset.' },
                { icon: Briefcase, title: 'End-to-End Support', desc: 'From legal help to final signature.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-[#FF7A00]/10 p-3 rounded-xl"><item.icon className="text-black" /></div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black p-10 md:p-16 rounded-[60px] text-white">
            <h3 className="text-3xl font-bold mb-8">List Your Property</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Property Address" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#FF7A00]" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="BHK" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" />
                <input type="text" placeholder="Asking Price" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none" />
              </div>
              <button className="w-full bg-[#FF7A00] text-white py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-transform">Get Free Valuation</button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );

  const AgentsView = () => (
    <PageTransition>
      <div className="px-6 max-w-7xl mx-auto py-12">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">Our <span className="text-[#FF7A00]">Experts</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Meet the team that makes real estate remarkably simple. Trusted consultants with decades of Noida market experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {AGENTS.map(agent => (
            <div key={agent.id} className="group relative bg-white border border-gray-100 p-4 rounded-[40px] hover:shadow-2xl transition-all">
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] mb-6">
                <img src={agent.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">{agent.name}</h3>
                  <div className="bg-[#FF7A00] p-2 rounded-full"><ArrowUpRight size={16} className="text-white"/></div>
                </div>
                <p className="text-sm font-bold text-[#FF7A00] uppercase tracking-widest mb-4">{agent.role}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <CheckCircle2 size={16} className="text-[#FF7A00]" />
                  <span>Specialty: {agent.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );

  const ContactView = () => (
    <PageTransition>
      <div className="px-6 max-w-7xl mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter">Get In <span className="text-[#FF7A00]">Touch</span></h1>
            <p className="text-xl text-gray-500 mb-12">Visit our HQ or reach out via digital channels. We usually respond within 2 hours.</p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-center">
                <div className="bg-black text-white p-6 rounded-3xl"><Phone size={32} /></div>
                <div>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Call Directly</p>
                  <p className="text-2xl font-bold">072061 65093</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="bg-black text-white p-6 rounded-3xl"><MapPin size={32} /></div>
                <div>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Visit Office</p>
                  <p className="text-lg font-bold">501, 4th Floor, Homestop @ 104, Noida</p>
                </div>
              </div>
              <div className="flex gap-4">
                 <button className="flex-1 bg-gray-100 py-6 rounded-3xl font-bold hover:bg-[#FF7A00] hover:text-white transition-colors flex justify-center items-center gap-2"><Instagram /> Instagram</button>
                 <button className="flex-1 bg-gray-100 py-6 rounded-3xl font-bold hover:bg-[#FF7A00] hover:text-white transition-colors flex justify-center items-center gap-2"><Twitter /> Twitter</button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 w-full h-full min-h-[500px] rounded-[60px] flex items-center justify-center p-12 overflow-hidden relative">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-50" />
               <div className="relative bg-white p-8 rounded-[40px] shadow-2xl max-w-sm text-center">
                  <div className="w-20 h-20 bg-[#FF7A00] rounded-full mx-auto mb-6 flex items-center justify-center">
                    <MapPin size={32} className="text-white"/>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Our Noida HQ</h4>
                  <p className="text-gray-500 mb-6 text-sm">Open Daily: 9 AM - 8 PM. Site visits available on weekends.</p>
                  <button className="text-black font-black underline">Open in Google Maps</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );

  return (
    <div className="min-h-screen bg-white selection:bg-[#FF7A00] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 md:py-4 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img 
              src="https://image2url.com/r2/default/images/1769931567915-3575b95c-3eed-46cc-930b-29e7e3daa185.jpg" 
              alt="EYP Havenly Logo" 
              className="h-10 md:h-14 w-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 glass-effect px-6 py-2 rounded-full">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.label} 
                onClick={() => handleNavClick(item.href)} 
                className={`px-4 py-1.5 text-sm font-bold transition-all ${currentPage === item.href ? 'text-[#FF7A00]' : 'text-white hover:text-gray-300'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-[#FF7A00] text-white px-6 py-2.5 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-lg shadow-[#FF7A00]/20"
            >
              Book Site Visit
            </button>
          </div>

          <button 
            className="md:hidden text-white mix-blend-difference z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[45] bg-black pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.button 
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(item.href)} 
                  className="text-5xl font-black text-white text-left hover:text-[#FF7A00] tracking-tighter"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNavClick('contact')}
                className="w-full bg-[#FF7A00] text-white py-6 rounded-[24px] font-black text-2xl mt-8"
              >
                Book Site Visit
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Router */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' && <HomeView key="home" />}
        {currentPage === 'buy' && <BuyView key="buy" />}
        {currentPage === 'rent' && <RentView key="rent" />}
        {currentPage === 'sell' && <SellView key="sell" />}
        {currentPage === 'agents' && <AgentsView key="agents" />}
        {currentPage === 'contact' && <ContactView key="contact" />}
      </AnimatePresence>

      {/* Shared Footer */}
      <footer className="bg-black text-white pt-32 pb-12 px-6 rounded-t-[60px] md:rounded-t-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2">
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.9]">Real Estate <br /> Made <span className="text-[#FF7A00]">Remarkably Simple.</span></h2>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                  <button key={i} className="bg-white/10 p-4 rounded-2xl hover:bg-[#FF7A00] hover:text-white transition-all"><Icon /></button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#FF7A00] mb-8">Navigation</h4>
              <ul className="space-y-4">
                {NAV_ITEMS.map(item => (
                  <li key={item.label}>
                    <button onClick={() => handleNavClick(item.href)} className="text-xl font-bold hover:translate-x-2 transition-transform">{item.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#FF7A00] mb-8">Contact Info</h4>
              <p className="text-xl font-bold mb-4">Noida, Sector 104, Hazipur UP 201304</p>
              <p className="text-gray-400">072061 65093</p>
              <p className="text-gray-400">hello@eypproperty.com</p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <p>© 2025 EYP Havenly. Exploring Properties, Redefining Standards.</p>
            <div className="flex gap-8">
              <button>Privacy Policy</button>
              <button>Cookies Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
