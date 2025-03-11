import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white p-5 ">
      <div className="flex md:flex-row flex-col justify-between gap-4">
        <div className="space-y-10">
          <img src="./Logo.png" className="w-32" />
          <p className="text-xs w-72">
            Discover the power of connection with Communion. Uniting diverse
            communities through spirituality and innovation, we foster
            inclusivity, collaboration, and social cohesion for a better world.
          </p>
          <div className="flex gap-4">
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagramSquare/>
            <FaYoutube/>
          </div>
        </div>
        <div className="space-y-4">
            <h1 className="text-2xl">Company</h1>
            <div className="flex flex-col text-sm gap-2">
                <span>Home</span>
                <span>Communities</span>
                <span>Events</span>
                <span>Leaders</span>
                <span>Support</span>
                <span>Profile</span>
            </div>
        </div>
        <div className="space-y-4">
            <h1 className="text-2xl">Contact</h1>
            <p className="text-xs">contact@communionhub.org</p>
        </div>
      </div>
      <div className="text-center text-xs mt-10">
        <p>Copyright © 2024. All right reserved to Communion</p>
        <div>
            <p>privacy policy</p>
            <p>Terms & conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
