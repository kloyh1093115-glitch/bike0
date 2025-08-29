import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// FIX: Re-added image imports as requested, even if they might cause compile errors depending on the file structure.
import hiroImage_sumaho from '../assets/image_sumaho01.png';
import heroImage from '../assets/image03.png';
import featureTechImage from '../assets/image03.png';
import featureLoungeImage from '../assets/image03.png';
import featureCustomImage from '../assets/image03.png';
import youtubeThumbnailImage from '../assets/image03.png';


// A reusable component for scroll-triggered animations
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

// Data for service cards using direct image paths
const services = [
  { name: '修理', img: '/image03.png' },
  { name: '点検', img: '/image03.png' },
  { name: '塗装', img: '/image03.png' },
  { name: '出張修理', img: '/image03.png' },
];

const Home = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white bg-black">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          {/* Mobile Image (hidden on md screens and up) */}
          <img src={hiroImage_sumaho} alt="Hero Background" className="w-full h-full object-cover md:hidden" />
          {/* Desktop Image (hidden on screens smaller than md) */}
          <img src={heroImage} alt="Hero Background" className="hidden w-full h-full object-cover md:block" />

          <div className="absolute inset-0 bg-black opacity-50"></div>
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-7xl font-bold mb-4"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
          >
            Bike Station TONO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: 'easeOut' }}
            className="text-lg md:text-2xl font-light"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
          >
            あなたのバイクライフに、安心と楽しさを。
          </motion.p>
        </div>
      </section>

 
        {/* About/Service Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* メインタイトルとイントロ */}
              <FadeInWhenVisible>
                {/* FIX: Changed alignment for mobile */}
                <div className="text-left md:text-center mb-16">
                  <h2 className="inline-block md:inline text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 border-b-4 md:border-b-0 border-gray-900 pb-2 md:pb-0">
                    サービス内容
                  </h2>
                  <div className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl md:mx-auto">
                    <p>
                      私たちバイクステーションTONOは、そんな皆様のバイクライフに寄り添う、町の温かいパートナーでありたいと考えています。
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>

              {/* サービス説明 - フロー形式 */}
              <div className="space-y-12 md:space-y-16 mb-16">
                {/* 点検・メンテナンス */}
                <FadeInWhenVisible>
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border-2 border-gray-900 rounded-full">
                        <span className="text-2xl md:text-3xl font-bold text-gray-900">01</span>
                      </div>
                    </div>
                    <div className="flex-1 md:pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        <span className="border-b-2 border-gray-200 pb-1">点検</span>・メンテナンス
                      </h3>
                     {/* <p className="text-gray-700 leading-relaxed mb-4">
                        エンジンオイル交換、タイヤ点検など、メンテナンスから定期点検まで。オイル漏れやタイヤの摩耗状況、ブレーキの効き具合など、見落としがちな箇所も丁寧に確認いたします。
                      </p> */}
                      <div className="text-sm text-gray-500 italic">
                        定期点検 / オイル交換 / タイヤ・ブレーキ点検 / チェーン調整
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>

                {/* 修理・整備 */}
                <FadeInWhenVisible>
                  <div className="flex flex-col md:flex-row-reverse md:items-start md:space-x-reverse md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex-shrink-0 md:order-2">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border-2 border-gray-900 rounded-full">
                        <span className="text-2xl md:text-3xl font-bold text-gray-900">02</span>
                      </div>
                    </div>
                    <div className="flex-1 md:pt-2 md:order-1 md:text-right">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        <span className="border-b-2 border-gray-200 pb-1">修理</span>・重整備
                      </h3>
                     {/* <p className="text-gray-700 leading-relaxed mb-4">
                        エンジントラブル、車検対応まで、専門的な技術が必要な重整備もお任せください。どんな症状でもまずはご相談ください。
                      </p>*/}
                      <div className="text-sm text-gray-500 italic">
                        エンジン整備 / 電装系修理 / 車検対応 / 故障診断
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>
                
                {/* 塗装・カスタム */}
                <FadeInWhenVisible>
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border-2 border-gray-900 rounded-full">
                        <span className="text-2xl md:text-3xl font-bold text-gray-900">03</span>
                      </div>
                    </div>
                    <div className="flex-1 md:pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        <span className="border-b-2 border-gray-200 pb-1">塗装</span>・カスタム
                      </h3>
                      {/*<p className="text-gray-700 leading-relaxed mb-4">
                        塗装の色替えから本格的なカスタムまで、オーナー様の理想を形にする創造的なサービスを提供いたします。
                      </p>*/}
                      <div className="text-sm text-gray-500 italic">
                        オリジナル塗装 / パーツカスタム / デザイン相談 / レストア
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>

                {/* 出張修理 */}
                <FadeInWhenVisible>
                  <div className="flex flex-col md:flex-row-reverse md:items-start md:space-x-reverse md:space-x-8 space-y-6 md:space-y-0">
                    <div className="flex-shrink-0 md:order-2">
                      <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border-2 border-gray-900 rounded-full">
                        <span className="text-2xl md:text-3xl font-bold text-gray-900">04</span>
                      </div>
                    </div>
                    <div className="flex-1 md:pt-2 md:order-1 md:text-right">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        <span className="border-b-2 border-gray-200 pb-1">出張修理</span>サービス
                      </h3>
                      {/*<p className="text-gray-700 leading-relaxed mb-4">
                        ツーリング先での突然のトラブルや、バイクが動かなくなった時も安心。萩市周辺エリアへ迅速に駆けつけ、現場での応急処置から本格修理まで対応いたします。
                      </p>*/}
                      <div className="text-sm text-gray-500 italic">
                        緊急出張対応 / 現場修理 / レッカーサービス / 24時間受付
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>
              </div>

              {/* 補足説明 */}
              <FadeInWhenVisible>
                <div className="border-t border-gray-200 pt-12">
                  <div className="text-center mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      初心者からベテランまで、すべてのライダーのために
                    </h3>
                  </div>
                  
                  <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                    <p>
                      長年の経験を積んだ整備士が、国産車から輸入車まで幅広い車種に対応。作業内容や料金について事前に詳しくご説明し、初心者の方にも分かりやすくバイクとの付き合い方をアドバイスいたします。
                    </p>

                  </div>
                </div>
              </FadeInWhenVisible>

              {/* CTA */}
              <FadeInWhenVisible>
                <div className="mt-12 text-center">
                  <Link to="/service" className="group text-gray-900 font-bold inline-flex items-center text-lg">
                    <span>サービス詳細へ</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                  <p className="text-gray-600 mt-4 text-sm">
                    お気軽にお電話・ご来店ください。お見積りは無料です。
                  </p>
                </div>
              </FadeInWhenVisible>
            </div>
        </div>
      </section>


      {/* Features Section */} 
       <section className="py-16 md:py-24 bg-gray-50"> 
         <div className="container mx-auto px-6 lg:px-8"> 
           <FadeInWhenVisible> 
             {/* FIX: Changed alignment for mobile */}
             <div className="text-left md:text-center mb-12 md:mb-16"> 
               <h2 className="inline-block md:inline text-3xl md:text-4xl font-bold text-gray-900 border-b-4 md:border-b-0 border-gray-900 pb-2 md:pb-0">TONOが選ばれる理由</h2> 
               <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl md:mx-auto"> 
                 私たちが提供するのは、確かな技術と温かいサービス。お客様のバイクライフを全力でサポートします。 
               </p> 
             </div> 
           </FadeInWhenVisible> 

           <div className="space-y-16 md:space-y-20"> 
             <FadeInWhenVisible> 
                 <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16"> 
                     <div className="md:w-1/2 w-full"> 
                         <img src={featureTechImage} alt="熟練の整備士が作業中" className="rounded-lg shadow-lg object-cover w-full h-auto" /> 
                     </div> 
                     <div className="md:w-1/2 w-full text-center md:text-left"> 
                         <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">30年以上の経験が支える、確かな技術</h3> 
                         <p className="text-gray-600 leading-relaxed"> 
                         代表は、30年以上にわたりバイク整備一筋で歩んできました。あらゆるメーカー、年式のバイクを診断・修理してきた経験と知識は、他店には真似できない当店の強みです。最新のバイクはもちろん、メーカーサポートの終了した旧車もお気軽にご相談ください。長年の経験と勘、そして最新の設備を融合させ、お客様の大切なバイクを最高の状態に保ちます。 
                         </p> 
                     </div> 
                 </div> 
             </FadeInWhenVisible> 
             <FadeInWhenVisible> 
                 <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16"> 
                     <div className="md:w-1/2 w-full"> 
                         <img src={featureLoungeImage} alt="店内の休憩スペース" className="rounded-lg shadow-lg object-cover w-full h-auto" /> 
                     </div> 
                     <div className="md:w-1/2 w-full text-center md:text-left"> 
                         <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">ツーリングの休憩にも、お気軽に</h3> 
                         <p className="text-gray-600 leading-relaxed"> 
                         当店は整備工場であると同時に、ライダーたちが気軽に立ち寄れるコミュニティスペースでもあります。広い休憩スペースでは、淹れたてのコーヒーをご用意。ツーリングの途中に、ぜひお立ち寄りください。バイク談義に花を咲かせたり、次の計画を立てたり、思い思いの時間をお過ごしいただけます。 
                         </p> 
                     </div> 
                 </div> 
             </FadeInWhenVisible> 
             <FadeInWhenVisible> 
                 <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16"> 
                     <div className="md:w-1/2 w-full"> 
                         <img src={featureCustomImage} alt="カスタムされたバイク" className="rounded-lg shadow-lg object-cover w-full h-auto" /> 
                     </div> 
                     <div className="md:w-1/2 w-full text-center md:text-left"> 
                         <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">世界に一台だけの、あなただけの相棒へ</h3> 
                         <p className="text-gray-600 leading-relaxed"> 
                         理想のカラーリング、こだわりのパーツ。お客様の「好き」を形にするカスタムも、私たちの得意分野です。単純なパーツ交換だけでなく、全体のバランスや乗り心地まで考慮したトータルコーディネートをご提案。お客様との対話を大切にしながら、世界に一台だけの、特別なバイク作りをサポートします。 
                         </p> 
                     </div> 
                 </div> 
             </FadeInWhenVisible> 
           </div> 
         </div> 
       </section>



      {/* News Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeInWhenVisible>
            {/* FIX: Changed alignment for mobile */}
            <div className="text-left md:text-center mb-12 md:mb-16">
              <h2 className="inline-block md:inline text-3xl md:text-4xl font-bold text-gray-900 border-b-4 md:border-b-0 border-gray-900 pb-2 md:pb-0">お知らせ</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="p-4 transition-colors duration-300 hover:bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-500 mb-1">2025.08.20</p>
                    <p className="font-semibold text-gray-800">ホームページをリニューアル公開しました。</p>
                </div>
                <div className="p-4 transition-colors duration-300 hover:bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-500 mb-1">2025.08.15</p>
                    <p className="font-semibold text-gray-800">夏季休業のお知らせ（8/20〜8/25）</p>
                </div>
                <div className="p-4 transition-colors duration-300 hover:bg-gray-50 rounded-md">
                    <p className="text-sm text-gray-500 mb-1">2025.07.28</p>
                    <p className="font-semibold text-gray-800">新サービス「バイクカスタム塗装」を開始しました。詳細はお問い合わせください。</p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <Link to="/news" className="group text-gray-900 font-bold inline-flex items-center">
                    <span>過去のお知らせ一覧へ</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
      


      {/* YouTube Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <FadeInWhenVisible>
            {/* FIX: Changed alignment for mobile */}
            <div className="text-left md:text-center md:mb-12">
              <h2 className="inline-block md:inline text-3xl md:text-4xl font-bold mb-4 border-b-4 md:border-b-0 border-gray-900 pb-2 md:pb-0">YouTubeチャンネル</h2>
              <p className="text-lg text-gray-600 mt-4 md:mt-0 md:mb-10">整備士の休日、田舎暮らしVlog。</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:gap-12">
              {/* Left Side (PC): Thumbnail */}
              <div className="w-full md:w-1/2">
                <Link to="/youtube" className="block group">
                  <motion.div
                    className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 250 }}
                  >
                    <img src={youtubeThumbnailImage} alt="YouTube Thumbnail" className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <svg className="w-24 h-24 text-white opacity-80 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* Right Side (PC): Description */}
              <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    平日は整備士、休日は田舎の実家に帰って家の手入れや農作業を楽しむ「カズピコ」のチャンネルです。子供の頃は何もないのが嫌でしたが、40代の今、週末に実家で色々なことに挑戦するのが何よりの楽しみになりました。
                  </p>
                  <p>
                    バイク整備の裏側や、草刈り、DIY、そして大好きなサッカーやマラソンまで。日々の暮らしを動画にしてお届けします。
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/youtube" className="group text-gray-900 font-bold inline-flex items-center">
                    <span>チャンネルで動画をもっと見る</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        {/* FIX: Changed alignment for mobile */}
        <div className="container mx-auto px-6 lg:px-8 text-left md:text-center">
          <FadeInWhenVisible>
            <h2 className="inline-block md:inline text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-b-4 md:border-b-0 border-gray-900 pb-2 md:pb-0">お問い合わせ</h2>
            <p className="max-w-2xl md:mx-auto text-lg text-gray-600 mb-8 leading-relaxed">
              修理のご相談、車検のお見積もり、その他どんなことでもお気軽にお問い合わせください。
              お客様のバイクライフがより豊かになるよう、私たちが全力でサポートいたします。
            </p>
            <Link to="/contact">
              <motion.div
                className="inline-block bg-black text-white font-bold text-lg py-3 px-8 rounded-lg transition-transform duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                お問い合わせフォームへ
              </motion.div>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>



    </div>
  );
};

export default Home;

