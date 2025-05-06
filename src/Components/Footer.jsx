import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 font-poppins">
      <div className="flex justify-between gap-8">
        {/* Exclusive / Subscribe */}
        <div>
          <h2 className="font-bold text-2xl mb-4 font-inter">Exclusive</h2>
          <p className="mb-2 font-medium text-xl">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 text-sm focus:outline-none w-full"
            />
            <button className="bg-white text-black px-3 py-2">➤</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-medium text-xl mb-4">Support</h2>
          <p className="text-sm mb-2">111 Bijoy sarani, Dhaka,</p>
          <p className="text-sm mb-2">DH 1515, Bangladesh.</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="font-medium text-xl mb-4">Account</h2>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="font-medium text-xl mb-4">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="font-bold text-lg mb-4">Download App</h2>
          <p className="text-xs mb-2">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-4">
            <img src="./qrcode.png" alt="QR Code" className="w-16 h-16" />
            <div className="flex flex-col gap-2 items-center">
                    <img src="./googleplay.svg" alt="" className="w-30"/>
                    <img src="./appstore.svg" alt="" className="w-24"/>
            </div>
          </div>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white mt-12 pt-4 text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
