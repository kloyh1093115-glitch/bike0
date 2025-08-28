import { Link } from 'react-router-dom';

// Add your social media URLs here
const socialLinks = {
  youtube: 'https://youtube.com',
  instagram: 'https://instagram.com',
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: '事業内容', path: '/service' },
  { name: 'YouTube', path: '/youtube' },
  { name: '当店について', path: '/about' },
  { name: 'よくあるご質問', path: '/faq' },
  { name: 'お問い合わせ', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">BikeShop</h3>
            <p className="text-gray-400 max-w-md mb-6">
              あなたのバイクライフを全力でサポートします。
            </p>
            <div className="flex space-x-4">
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.78 22 12 22 12s0 3.22-.42 4.814a2.506 2.506 0 0 1-1.768 1.768c-1.594.42-7.612.42-7.612.42s-6.018 0-7.612-.42a2.506 2.506 0 0 1-1.768-1.768C2 15.22 2 12 2 12s0-3.22.42-4.814a2.506 2.506 0 0 1 1.768-1.768C5.78 5 11.798 5 11.798 5s6.018 0 7.612.42ZM15.565 12 10 8.773v6.454L15.565 12Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.398 1.363.444 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.046 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.398-2.427.444-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.398-1.363-.444-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.046-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 6.08 2.525c.636-.247 1.363-.398 2.427-.444C9.531 2.013 9.885 2 12.315 2h.004Zm-.717 1.442h-.001c-2.43 0-2.784.011-3.807.06-1.064.049-1.745.218-2.275.42a3.48 3.48 0 0 0-1.244.864 3.48 3.48 0 0 0-.864 1.244c-.202.53-.371 1.21-.42 2.275-.048 1.023-.06 1.375-.06 3.807s.012 2.784.06 3.807c.049 1.065.218 1.745.42 2.275a3.48 3.48 0 0 0 .864 1.244 3.48 3.48 0 0 0 1.244.864c.53.202 1.21.371 2.275.42 1.023.048 1.375.06 3.807.06s2.784-.011 3.807-.06c1.065-.049 1.745-.218 2.275-.42a3.48 3.48 0 0 0 1.244-.864 3.48 3.48 0 0 0 .864-1.244c.202-.53.371-1.21.42-2.275.048-1.023.06-1.375.06-3.807s-.012-2.784-.06-3.807c-.049-1.064-.218-1.745-.42-2.275a3.48 3.48 0 0 0-.864-1.244 3.48 3.48 0 0 0-1.244-.864c-.53-.202-1.21-.371-2.275-.42C15.099 3.453 14.745 3.442 12.315 3.442h-.717ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM12 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm4.52-7.242a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">店舗情報</h3>
            <ul className="space-y-2 text-gray-400">
              <li>住所: 〒XXX-XXXX ダミー県ダミー市1-2-3</li>
              <li>電話番号: 012-345-6789</li>
              <li>営業時間: 10:00 - 19:00 (定休日: 水曜日)</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} BikeShop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
