import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Service data
const services = [
  {
    id: 1,
    title: 'バイク修理',
    description: 'エンジンやブレーキのトラブルといった専門的な修理から、タイヤやオイル交換などの日常的なメンテナンスまで、国家資格を持つ整備士が責任を持って対応します。最新の診断テスターを用いて、目視では発見しづらい電気系統の不具合なども的確に特定。お客様の愛車が常に最高のコンディションを保てるよう、根本原因を追求した丁寧な作業を心がけています。旧車から最新モデルまで、あらゆるバイクのお悩みをご相談ください。',
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
    title: 'バイクの点検',
    description: '法令に基づいた厳格な点検・整備を行い、お客様のバイクが次の2年間も安全・安心に走行できるよう徹底的にサポートします。光軸調整や排ガス測定といった専門的な項目も、最新のテスターを用いて正確に実施。基本料金には、法令で定められた24ヶ月点検の費用が含まれています。交換が必要な部品が見つかった場合は、必ず事前にお客様にご連絡・ご相談の上で作業を進めますのでご安心ください。面倒な書類手続きも全て代行いたします。',
    pricing: [
        { item: '基本車検料（251cc以上）', price: '45,000円〜' },
        { item: '基本車検料（250cc以下）', price: '38,000円〜' },
        { item: '構造変更検査', price: '別途お見積もり' },
        { item: 'ユーザー車検代行', price: '20,000円〜' },
    ]
  },
  {
    id: 3,
    title: 'カスタム・塗装',
    description: '世界に一台だけの、お客様の理想のバイクを形にするお手伝いをします。マフラーやハンドル交換といったライトカスタムから、エンジンのボアアップなどのハードなカスタムまで、ご予算とご要望に応じて最適なプランをご提案。塗装については、オリジナルカラーへの全塗装や、パーツごとのペイント、傷や凹みの補修塗装まで、高い技術力で美しく仕上げます。デザインのご相談から承りますので、お気軽にご相談ください。',
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
    description: 'ツーリング先での急なエンジントラブルやパンク、ご自宅でのバッテリー上がりなど、バイクを動かせない状況でもご安心ください。経験豊富なスタッフがサービスカーでご指定の場所まで駆けつけ、迅速に初期対応を行います。現場での修理が困難な場合でも、当店まで安全に車両を輸送（レッカー）する手配が可能です。まずはお電話一本で状況をお知らせください。',
    pricing: [
        { item: '出張基本料（3km圏内）', price: '5,000円' },
        { item: '出張基本料（10km圏内）', price: '8,000円' },
        { item: 'パンク修理', price: '3,000円〜 + 出張基本料' },
        { item: 'バッテリー上がり対応', price: '2,000円〜 + 出張基本料' },
    ]
  },
];

// Reusable animation component
const FadeInWhenVisible = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Accordion Item Component
const AccordionItem = ({ service, isExpanded, onClick }) => {
    return (
        <motion.div
            layout
            className="bg-white rounded-xl shadow-md overflow-hidden mb-6 border border-gray-100"
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            <motion.header
                layout
                className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors"
                onClick={onClick}
            >
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">{service.title}</h2>
                <motion.div
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </motion.div>
            </motion.header>
            <AnimatePresence>
                {isExpanded && (
                    <motion.section
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0">
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                                <h4 className="text-lg font-semibold mb-4 text-gray-800">料金表</h4>
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-300">
                                            <th className="pb-2 font-medium text-gray-500 text-sm">項目</th>
                                            <th className="pb-2 font-medium text-gray-500 text-sm text-right">料金（税抜）</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {service.pricing.map((p, index) => (
                                            <tr key={index} className="border-b border-gray-200 last:border-none">
                                                <td className="py-3 text-gray-700">{p.item}</td>
                                                <td className="py-3 text-right font-mono text-gray-800">{p.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


const Service = () => {
  const [expanded, setExpanded] = useState(1); // Initially open the first item

  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <FadeInWhenVisible>
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">事業内容</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様のバイクライフをトータルでサポートする、多彩なサービスをご提供しています。
            </p>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="max-w-4xl mx-auto">
            {services.map((service) => (
              <AccordionItem
                key={service.id}
                service={service}
                isExpanded={expanded === service.id}
                onClick={() => setExpanded(expanded === service.id ? null : service.id)}
              />
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Service;