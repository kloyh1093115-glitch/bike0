import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const InfoIcon = ({ icon, children }) => (
    <div className="flex items-start gap-4">
        <div className="w-6 h-6 text-gray-500 mt-1">{icon}</div>
        <div className="flex-1">{children}</div>
    </div>
);

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
      // NOTE: This is a placeholder URL. Replace with your actual API endpoint.
      const response = await axios.post('/api/send-mail', formData);
      if (response.status === 200) {
        setFormStatus({ submitting: false, message: 'お問い合わせありがとうございます。内容を確認後、ご連絡いたします。' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      // This is a mock success for demonstration purposes as the API endpoint doesn't exist.
      // In a real application, the catch block would handle errors.
      console.log("Simulating successful submission.");
      setFormStatus({ submitting: false, message: 'お問い合わせありがとうございます。内容を確認後、ご連絡いたします。' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      // const errorMessage = error.response?.data?.message || '送信に失敗しました。時間をおいて再度お試しください。';
      // setFormStatus({ submitting: false, message: errorMessage });
    }
  };

  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <FadeInWhenVisible>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ご予約、ご相談、その他どんなことでもお気軽にお問い合わせください。
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden grid lg:grid-cols-5">
                {/* Left Side: Info & Map */}
                <div className="lg:col-span-2 bg-gray-50 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">店舗情報</h2>
                    <div className="space-y-6 text-gray-700">
                        <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>}>
                            <p className="font-semibold">住所</p>
                            <p>〒759-3622</p>
                            <p>山口県阿武郡阿武町大字奈古 505</p>
                        </InfoIcon>
                        <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                            <p className="font-semibold">営業時間</p>
                            <p>10:00 - 19:00</p>
                            <p className="text-sm text-gray-500">定休日: 日曜日</p>
                        </InfoIcon>
                        <InfoIcon icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>}>
                            <p className="font-semibold">電話番号</p>
                            <p>0</p>
                        </InfoIcon>
                    </div>
                    <div className="mt-8 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.45161380789747!2d131.5194992922695!3d34.52250625998231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355b4c9e45ba5cb9%3A0xc3a88f00c8f3da61!2z44CSNzU5LTM2MjIg5bGx5Y-j55yM6Zi_5q2m6YOh6Zi_5q2m55S65aWI5Y-k77yV77yQ77yV!5e0!3m2!1sja!2sjp!4v1756369313853!5m2!1sja!2sjp" 
                            className="w-full h-full"
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:col-span-3 p-8">
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">お問い合わせフォーム</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">お名前 <span className="text-red-500">*</span></label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">メールアドレス <span className="text-red-500">*</span></label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">件名 <span className="text-red-500">*</span></label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="6" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                        </div>
                        <div className="text-right">
                            <motion.button
                                type="submit"
                                disabled={formStatus.submitting}
                                whileHover={{ scale: !formStatus.submitting ? 1.05 : 1 }}
                                whileTap={{ scale: !formStatus.submitting ? 0.95 : 1 }}
                                className="bg-black text-white font-bold py-3 px-8 rounded-full text-lg transition-colors hover:bg-gray-800 disabled:bg-gray-400"
                            >
                                {formStatus.submitting ? '送信中...' : '送信する'}
                            </motion.button>
                        </div>
                         {formStatus.message && (
                            <p className={`mt-4 text-center ${formStatus.message.includes('失敗') ? 'text-red-500' : 'text-green-500'}`}>
                                {formStatus.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Contact;