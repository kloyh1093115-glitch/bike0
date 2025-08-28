import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    id: 1,
    question: '修理の見積もりは無料ですか？',
    answer: 'はい、無料でお見積もりいたします。お気軽にご相談ください。',
  },
  {
    id: 2,
    question: '車検にはどのくらいの期間がかかりますか？',
    answer: '通常、1日〜2日程度お預かりしております。車両の状態や交換部品の在庫状況によって変動する場合がございます。',
  },
  {
    id: 3,
    question: '他店で購入したバイクでも修理してもらえますか？',
    answer: 'もちろん可能です。メーカーや車種問わず、どんなバイクでもお気軽にご相談ください。',
  },
  {
    id: 4,
    question: '出張修理はどのエリアまで対応していますか？',
    answer: '店舗から半径20km圏内を基本エリアとしておりますが、エリア外の場合もご相談に応じますので、まずはお電話ください。',
  },
  {
    id: 5,
    question: '支払いにクレジットカードは使えますか？',
    answer: 'はい、各種クレジットカード（VISA, MasterCard, JCB, AMEXなど）をご利用いただけます。',
  },
];

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

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">よくあるご質問</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b">
                <motion.div
                  className="flex justify-between items-center cursor-pointer py-6"
                  onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                >
                  <h2 className="text-xl font-semibold">{faq.question}</h2>
                  <motion.div
                    animate={{ rotate: expanded === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" /></svg>
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {expanded === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-8">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Faq;