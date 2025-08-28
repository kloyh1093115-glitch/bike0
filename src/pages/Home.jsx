import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// A reusable component for scroll-triggered animations
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


const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white bg-black">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0 opacity-30">
            {/* <video autoPlay loop muted className="w-full h-full object-cover">
                <source src="/path/to/your/video.mp4" type="video/mp4" />
            </video> */}
            <img src="/vite.svg" className="w-full h-full object-contain" alt="background placeholder" />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            駆け抜ける、風と自由。
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-2xl"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            最高のバイクライフを、ここから。
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold mb-6">事業内容</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
              バイクの修理、車検、カスタム塗装から、急なトラブルに対応する出張修理まで。
              あなたのバイクに関するあらゆるお悩みを、経験豊富なスタッフが解決します。
            </p>
            <Link to="/service">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors hover:bg-blue-600"
              >
                詳細はこちら
              </motion.button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-12">当店の特徴</h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeInWhenVisible>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold mb-4">確かな技術力</h3>
                <p className="text-gray-600">国家資格を持つ整備士が、あなたの愛車を丁寧にメンテナンスします。</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold mb-4">アットホームな雰囲気</h3>
                <p className="text-gray-600">初心者の方も大歓迎。バイクに関するご相談、なんでもお聞かせください。</p>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold mb-4">出張修理対応</h3>
                <p className="text-gray-600">急なトラブルでも安心。指定の場所まで駆けつけ、迅速に対応します。</p>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center mb-12">お知らせ</h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="max-w-3xl mx-auto">
              <div className="border-b py-4">
                <p className="text-gray-500">2025.08.20</p>
                <p className="font-semibold">ホームページを公開しました。</p>
              </div>
              <div className="border-b py-4">
                <p className="text-gray-500">2025.08.15</p>
                <p className="font-semibold">夏季休業のお知らせ。</p>
              </div>
              <div className="border-b py-4">
                <p className="text-gray-500">2025.07.28</p>
                <p className="font-semibold">新サービス「バイクカスタム塗装」を開始しました。</p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold mb-6">YouTube</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
              バイクの楽しさやメンテナンスのコツなどを動画で発信中！
              ツーリング動画やカスタム紹介など、多彩なコンテンツをお届けします。
            </p>
            <Link to="/youtube">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors hover:bg-red-700"
              >
                動画一覧はこちら
              </motion.button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              修理のご相談、車検のお見積もり、その他どんなことでもお気軽にお問い合わせください。
              経験豊富なスタッフが丁寧に対応いたします。
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full text-lg transition-colors hover:bg-gray-100"
              >
                お問い合わせフォームへ
              </motion.button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

    </div>
  );
};

export default Home;
