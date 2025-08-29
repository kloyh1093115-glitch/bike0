import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logoImage from '../assets/logo01.svg';

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

const About = () => {
  const dailyPhotos = [
    { src: '/image03.png', alt: '整備中のバイク', className: 'md:col-span-2 md:row-span-2' },
    { src: '/image03.png', alt: 'カスタム塗装の様子', className: '' },
    { src: '/image03.png', alt: 'お客様との談笑風景', className: '' },
    { src: '/image03.png', alt: '店内の休憩スペース', className: 'md:col-span-2' },
  ];

  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <FadeInWhenVisible>
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">当店について</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              一台のバイクと、一人のオーナー様に、真摯に向き合う。それが私たちの原点です。
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Profile Section */}
        <section className="mb-16 md:mb-24">
          <FadeInWhenVisible>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
              <div className="md:w-1/4 flex justify-center">
                <motion.img 
                  src={logoImage} 
                  alt="Bike Station TONO ロゴ" 
                  className="w-48 h-48 md:w-56 md:h-56"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">代表: カズピコ</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  幼い頃から機械いじりが好きで、気づけば30年以上バイクの世界に魅了され続けてきました。
                  大手ディーラーでの豊富な整備経験を積み、お客様一人ひとりとより深く向き合いたいという想いから、この「Bike Station TONO」をオープンしました。
                  ただ修理するだけでなく、お客様のバイクライフそのものが豊かになるような、温かい場所でありたいと願っています。
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* Daily Work Section */}
        <section className="mb-16 md:mb-24">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">私たちの仕事風景</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                日々のメンテナンスから専門的なカスタムまで。情熱を込めて、一台一台と向き合っています。
              </p>
            </div>
          </FadeInWhenVisible>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
            {dailyPhotos.map((photo, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.05}>
                <motion.div 
                  className={`overflow-hidden rounded-lg shadow-lg h-full ${photo.className}`}
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                >
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section>
          <FadeInWhenVisible>
            <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">事業への想い</h2>
                <div className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed space-y-6">
                    <p className="text-lg">
                        「バイクは単なる移動手段ではない。人生を豊かにするパートナーだ。」
                    </p>
                    <p>
                        私たちは心からそう信じています。風を切って走る爽快感、仲間と語り合う時間、愛車を自分の手で育てる喜び。
                        そのすべてが、日常を少しだけ特別にしてくれる、かけがえのない体験です。
                    </p>
                     <p>
                        私たちの役目は、その素晴らしい体験を、確かな技術と温かい心で支えること。
                        一台のバイクが、一人のお客様の人生を、もっと輝かせる。
                        そんな未来を創るお手伝いをすることが、私たちの最大の喜びです。
                    </p>
                </div>
            </div>
          </FadeInWhenVisible>
        </section>

      </div>
    </div>
  );
};

export default About;