import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Case Studies", href: "#" }
  ];

  const resourceLinks = [
    { label: "Resources", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Partners", href: "#" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Compliance", href: "#" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto  max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-2">FinPark Global</h3>
            <p className="text-sm text-gray-400 mb-4">Private Limited</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted partner for regulatory excellence. Helping financial institutions navigate global compliance with confidence.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-sm text-gray-400">
            © 2025 FinPark Global Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}