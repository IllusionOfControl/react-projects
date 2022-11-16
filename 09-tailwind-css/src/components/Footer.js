import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoSlack,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-12 text-gray-200">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">DataWAVE.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sed
          faucibus turpis in eu mi bibendum. Adipiscing at in tellus integer
          feugiat scelerisque varius. Tellus id interdum velit laoreet id donec
          ultrices tincidunt arcu. Tortor dignissim convallis aenean et tortor
          at. Consectetur adipiscing elit pellentesque habitant.{" "}
        </p>
        <div className="flex justify-between">
          <IoLogoFacebook
            size={30}
            className="hover:text-[#00df9a] hover:scale-105 duration-300"
          />
          <IoLogoGithub
            size={30}
            className="hover:text-[#00df9a] hover:scale-105 duration-300"
          />
          <IoLogoInstagram
            size={30}
            className="hover:text-[#00df9a] hover:scale-105 duration-300"
          />
          <IoLogoSlack
            size={30}
            className="hover:text-[#00df9a] hover:scale-105 duration-300"
          />
          <IoLogoTwitter
            size={30}
            className="hover:text-[#00df9a] hover:scale-105 duration-300"
          />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between pt-8">
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Resources</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
