// src/components/HomePage.js

import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gray-900 text-gray-100 font-sans">
        <nav className="bg-gray-800 p-4 text-gray-100">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-pink-500 text-2xl font-bold">BarberShop</a>
            <ul className="flex space-x-4">
              <li><a href="#dashboard" className="hover:text-pink-500">Dashboard</a></li>
              <li><a href="#profile" className="hover:text-pink-500">Profile</a></li>
              <li><a href="#bookings" className="hover:text-pink-500">Bookings</a></li>
              <li><a href="#settings" className="hover:text-pink-500">Settings</a></li>
            </ul>
            <div className="flex space-x-2">
              <a href="#login" className="bg-gray-700 text-gray-100 py-2 px-4 rounded hover:bg-gray-600">Login</a>
              <a href="#signup" className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-400">Sign Up</a>
            </div>
          </div>
        </nav>
  
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_vector-1682305356769-1b9776c2ffc8?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative flex items-center justify-center h-full text-center p-4">
            <div>
              <h1 className="text-5xl text-white mb-4">Book Your Perfect Haircut in Minutes</h1>
              <p className="text-lg text-gray-300 mb-6">Easily book an appointment at your favorite barbershop near you.</p>
              <a href="#search" className="bg-pink-500 text-white py-3 px-6 rounded hover:bg-pink-400">Find a Barbershop</a>
            </div>
          </div>
        </section>
  
        <section id="search" className="bg-gray-800 py-10 text-center">
          <div className="container mx-auto max-w-lg">
            <h2 className="text-3xl text-white mb-6">Find Your Nearby Barber Shops</h2>
            <form className="flex justify-center mb-6">
              <input type="text" className="w-2/3 py-2 px-4 bg-gray-700 text-white placeholder-gray-400 rounded-l" placeholder="Enter your location or ZIP code" />
              <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-r hover:bg-pink-400">Search</button>
            </form>
            <div className="flex justify-center space-x-4">
              <label className="text-gray-300 flex items-center">
                <input type="checkbox" className="mr-2" /> Haircut
              </label>
              <label className="text-gray-300 flex items-center">
                <input type="checkbox" className="mr-2" /> Beard Trim
              </label>
              <label className="text-gray-300 flex items-center">
                <input type="checkbox" className="mr-2" /> Styling
              </label>
            </div>
          </div>
        </section>
  
        <section className="bg-gray-800 py-10 text-center">
          <h2 className="text-4xl text-white mb-10">Featured Barbershops</h2>
          <div className="container mx-auto flex flex-wrap justify-center gap-6">
            {["Classic Cuts", "Modern Mane", "Urban Clippers"].map((shop, index) => (
              <div key={index} className="bg-gray-700 rounded-lg overflow-hidden w-80 hover:scale-105 transition-transform">
                <img src={`https://images.unsplash.com/photo-${index + 1}?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3`} alt={`Barbershop ${index + 1}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl text-white mb-2">{shop}</h3>
                  <p className="text-gray-300 mb-4">Description for {shop}.</p>
                  <a href="#" className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-400">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <section className="bg-gray-800 py-10 text-center">
          <h2 className="text-3xl text-white mb-6">How It Works</h2>
          <div className="container mx-auto flex flex-wrap justify-center gap-8">
            {[
              { step: "Step 1: Sign Up", description: "Create an account to get started. It’s quick and easy.", icon: "user" },
              { step: "Step 2: Find a Shop", description: "Search for the best barbershops in your area.", icon: "search" },
              { step: "Step 3: Book a Slot", description: "Select your preferred time slot and book your appointment.", icon: "appointment-reminders" },
              { step: "Step 4: Get Confirmation", description: "Receive a confirmation once your booking is accepted.", icon: "checked" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs">
                <img src={`https://img.icons8.com/ios-filled/100/ffffff/${item.icon}.png`} alt={item.step} className="mb-4" />
                <h3 className="text-xl text-white mb-2">{item.step}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section className="bg-gray-800 py-10 text-center">
          <h2 className="text-3xl text-white mb-6">Our Services</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Haircut", description: "Classic and modern cuts tailored to your style.", icon: "cut" },
              { title: "Shave", description: "Relaxing and precise shave with premium products.", icon: "razor" },
              { title: "Hair Dye", description: "Transform your look with professional hair dye services.", icon: "paint-brush" },
              { title: "Hair Styling", description: "Get your hair styled for any occasion with our expert stylists.", icon: "tachometer-alt" },
            ].map((service, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <div className="text-4xl text-pink-500 mb-4">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="text-xl text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
  
        <footer className="bg-gray-800 py-6 text-center text-gray-300">
          <div className="container mx-auto">
            <p>&copy; 2024 BarberShop. All rights reserved.</p>
            <p>Made with <span className="text-pink-500">♥</span> by YourName</p>
          </div>
        </footer>
      </div>
    );
};

export default HomePage;
