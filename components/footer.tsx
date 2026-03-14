import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/post-work", label: "Post Work" },
  { href: "/tasks", label: "Search Work" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const socialLinks = [
  { href: "https://www.facebook.com/", label: "Facebook", icon: FaFacebookF },
  { href: "https://twitter.com/", label: "Twitter", icon: FaTwitter },
  {
    href: "https://www.linkedin.com/company/work4u-services/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.instagram.com/work4uservices.in/",
    label: "Instagram",
    icon: FaInstagram,
  },
];

export function Footer() {
  return (
    <footer className="bg-[#1A202C] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold">
                <span className="text-[#7DB48E]">Work</span>
                <span className="text-white">4u</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your Work, Our Help. Connecting Pune residents with
              Aadhar-verified student helpers for affordable, reliable home
              services.
            </p>
            <p className="text-xs text-gray-400 italic">
              By Students, For Students, To The Society
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" strokeWidth={2} />
                <span>
                  Shrivardhan, Ganesh Nagar, Galli number 2, New Sanghavi,
                  Pimpri-Chinchwad, Maharashtra 411027
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" strokeWidth={2} />
                <a
                  href="mailto:info@work4u.com"
                  className="hover:text-white transition-colors"
                >
                  info@work4u.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" strokeWidth={2} />
                <div className="flex flex-col">
                  <a
                    href="tel:+918421502803"
                    className="hover:text-white transition-colors"
                  >
                    +91 84215 02803
                  </a>
                  <a
                    href="tel:+917219154615"
                    className="hover:text-white transition-colors"
                  >
                    +91 72191 54615
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Work4U Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
