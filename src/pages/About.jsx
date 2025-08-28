import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/react.svg'; // Using react.svg as a placeholder

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">当店について</h1>
        </FadeInWhenVisible>

        {/* Profile Section */}
        <section className="mb-20">
          <FadeInWhenVisible>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                className="md:w-1/3"
                whileHover={{ scale: 1.05 }}
              >
                <img src={profileImage} alt="代表者" className="rounded-full shadow-lg mx-auto w-64 h-64 object-cover" />
              </motion.div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">代表: 山田 太郎</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  幼い頃から機械いじりが好きで、気づけばバイクの世界に魅了されていました。
                  数々のレース経験と大手ディーラーでの整備士経験を経て、2010年に「BikeShop」をオープン。
                  お客様一人ひとりのバイクライフに寄り添い、安全と楽しさを提供することを信条としています。
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* History Section */}
        <section className="mb-20">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-12">沿革</h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative border-l-2 border-blue-500 pl-8 py-4">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-5"></div>
                <p className="font-semibold">2010年</p>
                <p>地元に根差したバイクショップ「BikeShop」を創業。</p>
              </div>
              <div className="relative border-l-2 border-blue-500 pl-8 py-4">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-5"></div>
                <p className="font-semibold">2015年</p>
                <p>カスタム塗装サービスを開始。多くのバイカーから支持を得る。</p>
              </div>
              <div className="relative border-l-2 border-blue-500 pl-8 py-4">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-5"></div>
                <p className="font-semibold">2020年</p>
                <p>オンラインでの部品販売を開始し、全国のバイクファンへサービスを拡大。</p>
              </div>
               <div className="relative border-l-2 border-blue-500 pl-8 py-4">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-5"></div>
                <p className="font-semibold">2024年</p>
                <p>出張修理サービスを開始。より迅速なサポート体制を構築。</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Philosophy Section */}
        <section>
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-8">事業への想い</h2>
            <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-inner">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                「バイクは単なる移動手段ではない。人生を豊かにするパートナーだ。」
                <br /><br />
                私たちはそう信じています。風を切って走る爽快感、仲間と語り合う時間、愛車を自分の手で育てる喜び。
                そのすべてが、日常を忘れさせてくれるかけがえのない体験です。
                私たちの役目は、その素晴らしい体験を技術と心で支えること。
                一台のバイクが、一人のお客様の人生を、もっと輝かせる。
                そんな未来を創るお手伝いをすることが、私たちの最大の喜びです。
              </p>
            </div>
          </FadeInWhenVisible>
        </section>

      </div>
    </div>
  );
};

export default About;