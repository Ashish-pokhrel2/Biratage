import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // Here you would normally send the email to your backend
    }
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-red-800 text-white p-8 flex items-center">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-4">Stay Connected With Our Community</h2>
                <p className="text-red-100 mb-4">
                  Subscribe to our newsletter to receive updates on upcoming events, cultural stories, and community initiatives.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-yellow-400" />
                    <span>Monthly cultural events calendar</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-yellow-400" />
                    <span>Featured cultural stories</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-yellow-400" />
                    <span>Exclusive member promotions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 flex items-center">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="w-full">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Join Our Newsletter</h3>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none transition-colors"
                      placeholder="youremail@example.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Mail size={18} className="mr-2" />
                    <span>Subscribe Now</span>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Thank You For Subscribing!</h3>
                  <p className="text-gray-600">
                    You're now part of our cultural community. Watch your inbox for updates.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;