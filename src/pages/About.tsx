import { Users, Award, Target, Shield, Cloud, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const teamStats = [
    { number: '50+', label: 'Security Certifications' },
    { number: '200+', label: 'Successful Projects' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const certifications = [
    'CISSP - Certified Information Systems Security Professional',
    'CISM - Certified Information Security Manager', 
    'AWS Certified Solutions Architect',
    'Microsoft Azure Expert',
    'Google Cloud Professional',
    'Certified Ethical Hacker (CEH)',
    'CompTIA Security+',
    'ISO 27001 Lead Auditor'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every solution we implement prioritizes security and compliance from the ground up.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We tailor our approach to meet the unique needs and budget of each business.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards through continuous learning and certification.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by the tangible improvements we deliver to your business.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SecureCloud AI</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empowering SMBs with enterprise-grade technology solutions that are affordable, effective, and future-ready
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every small and medium business deserves access to enterprise-grade 
                cybersecurity, cloud computing, and AI solutions without the enterprise price tag.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2020, SecureCloud AI was born from the recognition that SMBs face the same 
                cyber threats as large corporations but often lack the resources for comprehensive protection. 
                We bridge this gap with affordable, scalable solutions tailored for growing businesses.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {teamStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="card-elegant">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team brings together decades of experience across cybersecurity, cloud infrastructure, and artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elegant">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Cybersecurity Leaders</h3>
                <p className="text-muted-foreground">
                  Former security executives from Fortune 500 companies with expertise in 
                  threat detection, incident response, and compliance frameworks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardContent className="p-8 text-center">
                <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Cloud Architects</h3>
                <p className="text-muted-foreground">
                  Certified experts in AWS, Azure, and Google Cloud with proven track records 
                  in large-scale migrations and infrastructure optimization.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">AI Specialists</h3>
                <p className="text-muted-foreground">
                  Data scientists and AI engineers who have developed solutions for 
                  automation, analytics, and intelligent decision-making systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team maintains industry-leading certifications to ensure we deliver the highest quality solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <Card key={cert} className="card-elegant">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold">Assess</h3>
                <p className="text-muted-foreground">
                  We start with a comprehensive assessment of your current infrastructure, 
                  security posture, and business needs.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold">Design</h3>
                <p className="text-muted-foreground">
                  We create a customized solution that fits your budget, timeline, 
                  and long-term business objectives.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold">Deliver</h3>
                <p className="text-muted-foreground">
                  We implement the solution with minimal disruption and provide ongoing 
                  support to ensure continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;