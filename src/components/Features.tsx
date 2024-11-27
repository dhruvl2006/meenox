import { DollarSign, Shield, Scissors, ArrowLeftRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'Cheapest TXs',
    description: 'Exchange popular digital currencies at the cheapest possible transaction price'
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'CerTiK',
    description: 'We are Audited by CerTiK, CerTiK is the leading security-focused ranking platform'
  },
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    title: 'No Contract Sells',
    description: 'No contract sells to fund the marketing wallet'
  },
  {
    icon: <ArrowLeftRight className="h-8 w-8 text-primary" />,
    title: 'CrossDex Support',
    description: 'Exchange popular digital currencies at the cheapest possible transaction price'
  }
];

export function Features() {
  return (
    <section className="py-20 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-primary">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-0">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}