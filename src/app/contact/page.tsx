"use client";
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan aap Formspree ya kisi API ka link dal sakte hain
    setStatus("success");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Left Side: Contact Info */}
          <div className="bg-blue-600 p-10 md:p-16 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-black mb-6">Get in Touch</h1>
              <p className="text-blue-100 mb-10 text-lg">
                Have a question about our calculators or want to suggest a new tool? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Email us at</p>
                    <p className="font-bold">saeedkhan5000@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Office</p>
                    <p className="font-bold">Pakistan / Ghazi,KPK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-700 rounded-2xl border border-blue-500">
              <p className="text-sm italic text-blue-100">
                "Financial freedom starts with a single step and the right tools."
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="p-10 md:p-16">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Send size={40} />
                </div>
                <h2 className="text-2xl font-bold">Message Sent!</h2>
                <p className="text-gray-500">Thank you for reaching out. We will get back to you within 24 hours.</p>
                <button onClick={() => setStatus(null)} className="text-blue-600 font-bold underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">How can we help?</label>
                  <textarea required rows={4} placeholder="Your message here..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 transition flex items-center justify-center gap-2">
                  <MessageSquare size={20} /> SEND MESSAGE
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}