import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 1,
    title: 'バイク修理',
    description: 'エンジンやブレーキのトラブルから、タイヤ交換、オイル交換などの日常的なメンテナンスまで、幅広く対応します。',
    pricing: [
      { item: '基本点検・診断', price: '8,000円〜' },
      { item: 'エンジンオイル交換', price: '3,000円〜 + オイル代' },
      { item: 'タイヤ交換（1本）', price: '5,000円〜 + 部品代' },
      { item: 'ブレーキパッド交換（1キャリパー）', price: '6,000円〜 + 部品代' },
      { item: 'チェーン・スプロケット交換', price: '12,000円〜 + 部品代' },
    ]
  },
  {
    id: 2,
    title: 'バイクの車検',
    description: '法令に基づいた厳格な点検・整備を行い、安全な走行をサポートします。面倒な手続きも代行いたします。',
    pricing: [
        { item: '基本車検料（251cc以上）', price: '45,000円〜' },
        { item: '基本車検料（250cc以下）', price: '38,000円〜' },
        { item: '構造変更検査', price: '別途お見積もり' },
        { item: 'ユーザー車検代行', price: '20,000円〜' },
    ]
  },
  {
    id: 3,
    title: 'バイクの塗装',
    description: 'オリジナルカラーへの変更や、傷・凹みの補修塗装など、お客様の理想を形にします。',
    pricing: [
        { item: 'タンク塗装（単色）', price: '30,000円〜' },
        { item: 'カウル一式塗装', price: '80,000円〜' },
        { item: 'ホイール塗装（1本）', price: '15,000円〜' },
        { item: 'デザイン・ロゴ入れ', price: '別途お見積もり' },
    ]
  },
  {
    id: 4,
    title: '出張修理',
    description: 'ツーリング先での急なトラブルや、自宅でのバッテリー上がりなど、ご指定の場所まで駆けつけます。',
    pricing: [
        { item: '出張基本料（3km圏内）', price: '5,000円' },
        { item: '出張基本料（10km圏内）', price: '8,000円' },
        { item: 'パンク修理', price: '3,000円〜 + 出張基本料' },
        { item: 'バッテリー上がり対応', price: '2,000円〜 + 出張基本料' },
    ]
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

const Service = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">事業内容</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            お客様のバイクライフをトータルでサポートする、多彩なサービスをご提供しています。
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="max-w-3xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="border-b">
                <motion.div
                  className="flex justify-between items-center cursor-pointer py-6"
                  onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                >
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <motion.div
                    animate={{ rotate: expanded === service.id ? 90 : 0 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {expanded === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-2">
                        <p className="text-gray-700 mb-6">{service.description}</p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="text-xl font-semibold mb-4">料金表</h4>
                          <table className="w-full text-left">
                            <thead>
                              <tr className="border-b">
                                <th className="pb-2 font-medium text-gray-600">項目</th>
                                <th className="pb-2 font-medium text-gray-600 text-right">料金（税抜）</th>
                              </tr>
                            </thead>
                            <tbody>
                              {service.pricing.map((p, index) => (
                                <tr key={index} className="border-b last:border-none">
                                  <td className="py-3">{p.item}</td>
                                  <td className="py-3 text-right font-mono">{p.price}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
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

export default Service;
