import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Dummy data - replace with actual video IDs from your channel
const youtubeVideos = [
  { id: 'dQw4w9WgXcQ', title: '最新ツーリング動画！絶景の海岸線を走る' },
  { id: '3tmd-ClpJxA', title: '【メンテナンス講座】初心者向けオイル交換' },
  { id: 'C0DPdy98e4c', title: 'カスタムバイク紹介！こだわりの一台' },
  { id: 'h6fcK_fRYaI', title: 'バイク女子が行く！カフェレーサーの旅' },
];

// Replace with your YouTube channel URL
const channelUrl = 'https://www.youtube.com'; 

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

const YouTube = () => {
  const [mainVideo, setMainVideo] = useState(youtubeVideos[0]);

  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">YouTube</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            バイクの楽しさやメンテナンス方法などを動画で発信しています。
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${mainVideo.id}`}
                  title={mainVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h2 className="text-2xl font-bold mt-4">{mainVideo.title}</h2>
            </div>

            {/* Video List & Subscribe Button */}
            <div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">動画リスト</h3>
                <ul className="space-y-3">
                  {youtubeVideos.map((video) => (
                    <li
                      key={video.id}
                      className={`cursor-pointer p-2 rounded-md transition-colors ${mainVideo.id === video.id ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                      onClick={() => setMainVideo(video)}
                    >
                      <p className="font-semibold text-gray-800">{video.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <a href={channelUrl} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 0, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-red-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors hover:bg-red-700 flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.78,9.05C21.78,9.82 21.69,10.45 21.56,10.92C21.34,11.88 20.78,12.44 19.82,12.66C19.35,12.79 18.72,12.88 17.94,12.88C17.16,12.88 16.53,12.79 16.06,12.66C15.1,12.44 14.54,11.88 14.32,10.92C14.19,10.45 14.1,9.82 14.1,9.05C14.1,8.27 14.19,7.64 14.32,7.17C14.54,6.21 15.1,5.65 16.06,5.43C16.53,5.3 17.16,5.21 17.94,5.21C18.72,5.21 19.35,5.3 19.82,5.43C20.78,5.65 21.34,6.21 21.56,7.17Z M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"></path></svg>
                  <span>チャンネル登録</span>
                </motion.button>
              </a>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default YouTube;