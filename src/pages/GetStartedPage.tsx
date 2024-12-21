import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const services = [
  'AI Chatbots',
  'Email Automation',
  'AI Phone Systems',
  'Social Media Automation',
  'Website Building'
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Started with Flow AI</h1>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                id="company"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
              <input
                type="text"
                id="industry"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700">Interested Service</label>
              <select
                id="service"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="problems" className="block text-sm font-medium text-gray-700">
                What problems are you looking to solve?
              </label>
              <textarea
                id="problems"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Describe the challenges your business is facing..."
              />
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea
                id="notes"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Any additional information you'd like to share..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Request
                <Send className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}