import { TrendingUp, Shield, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'TechCorp Solutions: Complete Security Transformation',
      client: 'TechCorp Solutions',
      industry: 'Software Development',
      size: '150 employees',
      challenge: 'Frequent security breaches, non-compliant infrastructure, and outdated systems putting customer data at risk.',
      solution: 'Implemented comprehensive cybersecurity framework with 24/7 monitoring, achieved SOC 2 compliance, and deployed advanced threat detection.',
      results: [
        { metric: '95%', description: 'Reduction in security incidents' },
        { metric: '$2.3M', description: 'Prevented losses from avoided breaches' },
        { metric: '100%', description: 'SOC 2 compliance achievement' },
        { metric: '3 months', description: 'Implementation timeline' }
      ],
      tags: ['Cybersecurity', 'Compliance', 'Risk Management'],
      testimonial: 'SecureCloud AI transformed our security posture completely. We went from constant worry about breaches to confident protection.',
      author: 'Sarah Johnson, CTO'
    },
    {
      title: 'Growth Dynamics: Cloud Cost Optimization & AI Automation',
      client: 'Growth Dynamics',
      industry: 'Marketing Agency',
      size: '80 employees',
      challenge: 'Spiraling cloud costs, inefficient workflows, and manual processes consuming valuable time and resources.',
      solution: 'Optimized cloud infrastructure, implemented AI chatbots for customer service, and automated repetitive marketing tasks.',
      results: [
        { metric: '40%', description: 'Reduction in cloud costs' },
        { metric: '20 hrs/week', description: 'Saved through automation' },
        { metric: '80%', description: 'Faster customer response time' },
        { metric: 'ROI 300%', description: 'Return on investment in 6 months' }
      ],
      tags: ['Cloud Computing', 'AI Automation', 'Cost Optimization'],
      testimonial: 'The AI automation alone saved us 20 hours per week, and the cloud optimization cut our costs by 40%. Incredible results!',
      author: 'Michael Chen, CEO'
    },
    {
      title: 'DataFlow Inc: Enterprise-Grade Infrastructure Migration',
      client: 'DataFlow Inc',
      industry: 'Data Analytics',
      size: '200 employees',
      challenge: 'Legacy on-premise infrastructure limiting growth, poor disaster recovery, and scaling challenges.',
      solution: 'Complete cloud migration to AWS with multi-region deployment, implemented disaster recovery, and AI-powered analytics platform.',
      results: [
        { metric: '99.9%', description: 'Uptime reliability achieved' },
        { metric: '5x', description: 'Faster data processing' },
        { metric: '60%', description: 'Improved system performance' },
        { metric: '0', description: 'Data loss incidents since migration' }
      ],
      tags: ['Cloud Migration', 'Disaster Recovery', 'Performance Optimization'],
      testimonial: 'The migration was seamless and the performance improvements exceeded our expectations. Our analytics are now 5x faster.',
      author: 'Emily Rodriguez, Operations Director'
    }
  ];

  const industryStats = [
    { industry: 'Technology', projects: '45+', avgSavings: '$1.2M' },
    { industry: 'Healthcare', projects: '32+', avgSavings: '$800K' },
    { industry: 'Finance', projects: '28+', avgSavings: '$1.5M' },
    { industry: 'Manufacturing', projects: '25+', avgSavings: '$900K' },
    { industry: 'Retail', projects: '20+', avgSavings: '$600K' },
    { industry: 'Education', projects: '15+', avgSavings: '$400K' }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real results from real businesses. See how we've helped companies like yours achieve significant cost savings, security improvements, and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <Card key={study.client} className="card-elegant overflow-hidden">
                <CardHeader className="bg-muted pb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{study.title}</CardTitle>
                  <div className="text-muted-foreground">
                    <p><strong>Industry:</strong> {study.industry}</p>
                    <p><strong>Company Size:</strong> {study.size}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Challenge & Solution */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-red-600">Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary">Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>

                      <div className="bg-muted p-6 rounded-lg">
                        <blockquote className="italic text-lg mb-4">"{study.testimonial}"</blockquote>
                        <cite className="text-sm font-medium">— {study.author}</cite>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6 text-green-600">Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result) => (
                          <div key={result.metric} className="text-center p-4 bg-primary/5 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-2">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">{result.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've delivered successful projects across diverse industries, helping businesses of all sizes achieve their technology goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryStats.map((stat) => (
              <Card key={stat.industry} className="card-elegant">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-4">{stat.industry}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Projects:</span>
                      <span className="font-semibold">{stat.projects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg. Savings:</span>
                      <span className="font-semibold text-green-600">{stat.avgSavings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">
              Measurable results across all our client engagements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Total Cost Savings</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Zero</div>
              <div className="text-muted-foreground">Major Breaches Post-Implementation</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">2-6</div>
              <div className="text-muted-foreground">Months to Full ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with our solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudies;