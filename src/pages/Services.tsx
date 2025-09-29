import { Shield, Cloud, Brain, CheckCircle, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      subtitle: 'Comprehensive Protection for Your Digital Assets',
      description: 'Protect your business from cyber threats with our advanced security solutions, compliance management, and employee training programs.',
      features: [
        'Advanced Threat Detection & Response',
        'Vulnerability Assessment & Penetration Testing',
        'Compliance Management (SOC 2, HIPAA, PCI DSS)',
        'Security Awareness Training',
        'Incident Response Planning',
        '24/7 Security Monitoring',
        'Data Loss Prevention',
        'Network Security Architecture'
      ],
      benefits: [
        'Reduce security incidents by 95%',
        'Achieve compliance certification',
        'Minimize business disruption',
        'Protect customer data and reputation'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      subtitle: 'Scalable Infrastructure for Modern Business',
      description: 'Migrate, optimize, and secure your cloud infrastructure with our expert guidance and ongoing support for maximum efficiency and cost savings.',
      features: [
        'Cloud Migration & Strategy',
        'Multi-Cloud & Hybrid Solutions',
        'Cost Optimization & Management',
        'Disaster Recovery Planning',
        'Performance Monitoring & Optimization',
        'Cloud Security Implementation',
        'DevOps & CI/CD Pipeline Setup',
        'Infrastructure as Code (IaC)'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Ensure 99.9% uptime reliability',
        'Enable remote work capabilities'
      ]
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      subtitle: 'Intelligent Automation for Enhanced Productivity',
      description: 'Transform your business operations with AI-powered solutions including chatbots, analytics, and process automation to drive efficiency and growth.',
      features: [
        'AI Chatbots & Virtual Assistants',
        'Predictive Analytics & Business Intelligence',
        'Process Automation & RPA',
        'Machine Learning Model Development',
        'Natural Language Processing Solutions',
        'Computer Vision Applications',
        'AI Strategy & Implementation',
        'Custom AI Solution Development'
      ],
      benefits: [
        'Save 20+ hours per week on manual tasks',
        'Improve customer response time by 80%',
        'Increase data-driven decision making',
        'Enhance customer experience and satisfaction'
      ]
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive technology solutions designed to secure, scale, and automate your business operations
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="text-lg text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-lg">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Business Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start">
                            <Award className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="btn-hero">
                      Get Started with {service.title}
                    </Button>
                  </Link>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="card-elegant h-full">
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <service.icon className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{service.title} Solutions</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="font-semibold">Expert Team</p>
                          <p className="text-sm text-muted-foreground">Certified professionals</p>
                        </div>
                        <div className="text-center p-4 bg-muted rounded-lg">
                          <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="font-semibold">24/7 Support</p>
                          <p className="text-sm text-muted-foreground">Always available</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our services can transform your business. Get a free consultation today.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;