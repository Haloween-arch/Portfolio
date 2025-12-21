import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-2 rounded-lg bg-gray-900 dark:bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-blue-600 dark:bg-blue-400"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question, opportunity, or project in mind? Let’s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600 dark:text-blue-400" />
                <span>hitanshuyadav04@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-600 dark:text-blue-400" />
                <span>+91 7355317646</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600 dark:text-blue-400" />
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 md:p-8">
            {success ? (
              <div className="text-center py-10">
                <p className="text-green-500 text-xl font-semibold">
                  ✅ Message sent successfully!
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  I’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all"
                >
                  <Send size={18} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
