import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Globe, Clock, MapPin, Linkedin, Github,MessageSquare } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); 
  const [errors, setErrors] = useState({});
  const [phoneValue, setPhoneValue] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataObj = Object.fromEntries(formData.entries());
    const newErrors = {};

    if (!dataObj.name.trim()) newErrors.name = "Required";
    if (!dataObj.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataObj.email)) newErrors.email = "Invalid email";
    if (!phoneValue || !isValidPhoneNumber(phoneValue)) newErrors.whatsapp = "Valid number required";
    if (!dataObj.message || dataObj.message.trim().length < 10) newErrors.message = "Too short";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    setErrors({});
    setIsSubmitting(true);
    formData.append("full_phone", phoneValue);
    formData.append("access_key", "0de5244e-73c9-469e-aaf0-3e6a4f7cde92"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      if ((await response.json()).success) {
        setStatus("success");
        event.target.reset();
        setPhoneValue("");
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
    finally { setIsSubmitting(false); setTimeout(() => setStatus(null), 5000); }
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-12 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* LEFT SIDE: Balanced Content (2 Columns wide) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for new projects
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A0B1E] tracking-tight">
                Let's start a <span className="text-indigo-600">Conversation.</span>
              </h1>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-indigo-50 p-2 rounded-lg text-indigo-600"><Clock size={18}/></div>
                <div>
                  <h4 className="font-bold text-[#0A0B1E] text-sm">Fast Response</h4>
                  <p className="text-gray-500 text-xs">I typically reply within 12-24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-indigo-50 p-2 rounded-lg text-indigo-600"><MapPin size={18}/></div>
                <div>
                  <h4 className="font-bold text-[#0A0B1E] text-sm">Global Remote</h4>
                  <p className="text-gray-500 text-xs">Serving clients worldwide from Nigeria.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex gap-4 text-gray-400">
              <a href="https://www.linkedin.com/in/abdullateef-onanusi-644927398" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} className="hover:text-indigo-600 cursor-pointer transition-colors"/>
              </a>
              <a href="https://github.com/AyoRichie1-ops" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="hover:text-indigo-600 cursor-pointer transition-colors" />
              </a>
                {/* <MessageSquare size={20} className="hover:text-indigo-600 cursor-pointer transition-colors" /> */}
            </div>
          </div>

          {/* RIGHT SIDE: Compact Form (3 Columns wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 bg-gray-50 p-6 md:p-8 rounded-2rem border border-gray-100"
          >
            <AnimatePresence>
              {status && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className={`mb-6 p-4 rounded-xl text-xs font-bold flex items-center gap-2 ${status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                  {status === 'success' ? <CheckCircle2 size={16}/> : <AlertCircle size={16}/>}
                  {status === 'success' ? "Received! I'll message you on WhatsApp." : "Error sending message."}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Name</label>
                  <input name="name" type="text" placeholder="Abdullateef" className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:border-indigo-600 outline-none transition-all text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Email</label>
                  <input name="email" type="email" placeholder="hello@site.com" className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:border-indigo-600 outline-none transition-all text-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">WhatsApp</label>
                  <div className={`bg-white rounded-xl border transition-all ${errors.whatsapp ? 'border-red-500 ring-1 ring-red-50' : 'border-gray-200 focus-within:border-indigo-600'}`}>
                    <PhoneInput placeholder="Number" value={phoneValue} onChange={setPhoneValue} defaultCountry="NG" className="compact-phone" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Service</label>
                  <select name="subject" className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:border-indigo-600 outline-none appearance-none text-sm cursor-pointer">
                    <option>Web Dev</option>
                    <option>UI Design</option>
                    <option>Full Project</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                <textarea name="message" rows="3" placeholder="Tell me about your goal..." className="w-full px-5 py-3 rounded-xl bg-white border border-gray-200 focus:border-indigo-600 outline-none text-sm"></textarea>
              </div>

              <button disabled={isSubmitting} className="w-full bg-[#0A0B1E] text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all shadow-lg">
                {isSubmitting ? "Sending..." : "Send Inquiry"} <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .compact-phone { display: flex; align-items: center; padding-left: 12px; }
        .PhoneInputInput { width: 100%; padding: 12px 8px; border: none; outline: none; font-size: 14px; background: transparent; }
        .PhoneInputCountrySelect { cursor: pointer; }
      `}</style>
    </div>
  );
}