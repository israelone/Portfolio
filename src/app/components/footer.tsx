import Logo from "./logo";
import Navbar from "./navbar";
import SocialMediaLinks from "./socialMediaLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <Logo />
      <Navbar />
      <SocialMediaLinks />
    </footer>
  );
}
