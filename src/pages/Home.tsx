import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cloud, Brain, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-tech.jpg';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced threat detection, compliance management, and security training to protect your digital assets.',
      features: ['24/7 Monitoring', 'Compliance Audits', 'Security Training']
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Seamless migration, cost optimization, and disaster recovery solutions for scalable growth.',
      features: ['Cloud Migration', 'Cost Optimization', 'Disaster Recovery']
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Intelligent chatbots, advanced analytics, and automation to streamline your operations.',
      features: ['AI Chatbots', 'Data Analytics', 'Process Automation']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'SecureCloud AI transformed our security posture and reduced our cloud costs by 40%. Outstanding service!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Growth Dynamics',
      role: 'CEO',
      content: 'Their AI automation saved us 20 hours per week and their cybersecurity expertise gives us peace of mind.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Inc',
      role: 'Operations Director',
      content: 'Professional, responsive, and results-driven. They delivered exactly what they promised.',
      rating: 5
    }
  ];

  const clientLogos = [
    'TechCorp', 'DataFlow', 'GrowthDyne', 'CloudFirst', 'SecureNet', 'AI Solutions'
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text-glow">
              Securing, Scaling & Automating Your Business
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in-up delay-1">
              with Cybersecurity, Cloud Computing & AI Solutions
            </p>
            <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto fade-in-up delay-2">
              Protect your business, optimize your infrastructure, and automate your processes 
              with our comprehensive tech solutions designed for SMBs.
            </p>
            <div className="fade-in-up delay-3">
              <Link to="/contact">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Get a Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to secure, scale, and automate your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="card-elegant hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo) => (
              <div key={logo} className="text-lg font-semibold text-foreground">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a free security and infrastructure audit to see how we can help you save costs and improve security.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Your Free Audit Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;