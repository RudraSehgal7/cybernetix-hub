import { Link } from 'react-router-dom';
import { Shield, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-lg">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SecureCloud AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Securing, scaling & automating your business with cutting-edge cybersecurity, 
              cloud computing, and AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@securecloudai.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Cloud Computing</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Free Audit</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: contact@securecloudai.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SecureCloud AI. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;