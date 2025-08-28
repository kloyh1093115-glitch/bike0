import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const FadeInWhenVisible = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ submitting: false, message: '' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, message: '送信中...' });

    try {
      const response = await axios.post('http://localhost:3001/api/send-mail', formData);
      if (response.status === 200) {
        setFormStatus({ submitting: false, message: 'お問い合わせありがとうございます。内容を確認後、ご連絡いたします。' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || '送信に失敗しました。時間をおいて再度お試しください。';
      setFormStatus({ submitting: false, message: errorMessage });
    }
  };

  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">お問い合わせ</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            ご予約、ご相談、その他お問い合わせはこちらからお願いいたします。
          </p>
        </FadeInWhenVisible>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeInWhenVisible>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">お名前</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">メールアドレス</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">件名</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">お問い合わせ内容</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={formStatus.submitting}
                  whileHover={{ scale: !formStatus.submitting ? 1.05 : 1, boxShadow: !formStatus.submitting ? "0px 5px 15px rgba(0, 0, 0, 0.2)" : "none" }}
                  whileTap={{ scale: !formStatus.submitting ? 0.95 : 1 }}
                  className="w-full bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors hover:bg-blue-600 disabled:bg-gray-400"
                >
                  {formStatus.submitting ? '送信中...' : '送信する'}
                </motion.button>
                {formStatus.message && (
                  <p className={`mt-4 text-center ${formStatus.message.includes('失敗') ? 'text-red-500' : 'text-green-500'}`}>
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>
          </FadeInWhenVisible>

          {/* Map and Info */}
          <FadeInWhenVisible>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">店舗情報</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>住所:</strong> 〒XXX-XXXX ダミー県ダミー市1-2-3</li>
                  <li><strong>電話番号:</strong> 012-345-6789</li>
                  <li><strong>営業時間:</strong> 10:00 - 19:00 (定休日: 水曜日)</li>
                </ul>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8280393322833!2d139.76454931525822!3d35.68123618019422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1662356433333!5m2!1sen!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Contact;
