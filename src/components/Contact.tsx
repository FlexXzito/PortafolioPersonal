import React, { useState } from 'react';

interface FormData {
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-blue-500/30 text-white placeholder-blue-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-white/10 border border-blue-500/30 text-white placeholder-blue-200 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold 
                ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700'} 
                transition-all`}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;