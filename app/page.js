"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bolt, Security, BarChart, Link as LinkIcon, ArrowForward, GitHub } from "@mui/icons-material";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: <Bolt sx={{ fontSize: 48 }} />, title: "Lightning Fast", desc: "Get your short URL instantly" },
    { icon: <Security sx={{ fontSize: 48 }} />, title: "Privacy First", desc: "No tracking, no data collection" },
    { icon: <BarChart sx={{ fontSize: 48 }} />, title: "Easy Analytics", desc: "Track your link performance" },
    { icon: <LinkIcon sx={{ fontSize: 48 }} />, title: "Reliable Links", desc: "Your links stay active forever" },
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Welcome to ShortifyLinks
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Shorten URLs with
                <span className="text-blue-600 block">Style & Speed</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                The most elegant URL shortener that prioritizes your privacy. Create short links instantly without any signup or tracking.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/shorten">
                <button className='group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2'>
                  Try Now
                  <ArrowForward className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

            </div>
          </div>

          {/* Right Image Section */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:rotate-1 transition-transform duration-300">
                <Image
                  src="/cover.jpg"
                  alt="Cover"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover"
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Bolt sx={{ fontSize: 24 }} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Security sx={{ fontSize: 24 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ShortifyLinks?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our feature-rich URL shortening platform
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                <div className="w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300 mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Links Shortened</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-blue-100">Data Collected</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-blue-100">Free Forever</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of users who trust ShortifyLinks for their URL shortening needs. No signup, no hassle, just results.
          </p>
          <Link href="/shorten">
            <button className='group bg-white text-gray-900 hover:bg-gray-100 px-12 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 mx-auto'>
              Start Shortening Now
              <ArrowForward className="group-hover:translate-x-2 transition-transform" sx={{ fontSize: 24 }} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
