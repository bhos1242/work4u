import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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
  { href: "/be-a-tasker", label: "Become a Helper" },
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
    <footer className="bg-[#111827] text-white pb-20 md:pb-0">
      {/* Top CTA strip */}
      <div className="bg-primary">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm font-medium text-primary-foreground text-center sm:text-left">
            Need care for your loved ones? Get matched with a verified caregiver today.
          </p>
          <Link
            href="/post-work"
            className="inline-flex items-center gap-1.5 bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors shrink-0"
          >
            Post a Work
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-xl font-extrabold">
                <span className="text-[#5E9A6F]">Work</span>
                <span className="text-white">4u</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[240px]">
              Trusted elder care in Pune. Aadhar-verified student caregivers
              who bring companionship, daily help, and peace of mind to your
              loved ones.
            </p>
            <p className="text-[10px] text-gray-500 italic uppercase tracking-wider">
              Care That Feels Like Family
            </p>
            {/* Social */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-8 w-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-primary hover:text-white transition-all text-gray-400 hover:scale-105"
                >
                  <social.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
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

          {/* Legal & More */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
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
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-gray-500" strokeWidth={2} />
                <span className="text-xs leading-relaxed">
                  Ganesh Nagar, New Sanghavi,
                  Pimpri-Chinchwad, Maharashtra 411027
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gray-500" strokeWidth={2} />
                <a
                  href="mailto:info@work4u.com"
                  className="text-xs hover:text-white transition-colors"
                >
                  info@work4u.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gray-500" strokeWidth={2} />
                <div className="flex flex-col">
                  <a
                    href="tel:+918421502803"
                    className="text-xs hover:text-white transition-colors"
                  >
                    +91 84215 02803
                  </a>
                  <a
                    href="tel:+917219154615"
                    className="text-xs hover:text-white transition-colors"
                  >
                    +91 72191 54615
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-500">
            &copy; {new Date().getFullYear()} Work4U Services. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-500">
            Made with care in Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
}
