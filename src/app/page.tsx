import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Brain, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-calm-50 to-primary-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Depression Care App
            </h1>
            <p className="text-xl md:text-2xl text-secondary-700 max-w-3xl mx-auto mb-8">
              AI-powered mental health support with personalized care, mood tracking, and crisis intervention
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive Mental Health Support
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Built with AWS Amplify Gen 2 and Next.js 14+ for secure, scalable, and accessible mental health care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <Brain className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <CardTitle>AI-Powered Therapy</CardTitle>
                <CardDescription>
                  Personalized therapeutic interventions using AWS Bedrock and AgentCore
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <Heart className="w-12 h-12 text-success-600 mx-auto mb-4" />
                <CardTitle>Mood Tracking</CardTitle>
                <CardDescription>
                  Daily mood monitoring with AI-powered insights and pattern recognition
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-warning-600 mx-auto mb-4" />
                <CardTitle>Crisis Support</CardTitle>
                <CardDescription>
                  24/7 crisis intervention with immediate access to emergency resources
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-calm-600 mx-auto mb-4" />
                <CardTitle>Care Team</CardTitle>
                <CardDescription>
                  Connect with healthcare providers and caregivers for comprehensive support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-secondary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">
            Built with Modern Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>AWS Amplify Gen 2</CardTitle>
                <CardDescription>
                  Full-stack serverless deployment with TypeScript support and real-time capabilities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Next.js 14+</CardTitle>
                <CardDescription>
                  Modern React framework with App Router, Server Components, and optimal performance
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>HIPAA Compliant</CardTitle>
                <CardDescription>
                  Enterprise-grade security with AWS KMS encryption and comprehensive privacy controls
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Heart className="w-8 h-8 text-primary-400 mx-auto mb-4" />
          <p className="text-secondary-300">
            Depression Care App - Supporting mental health with compassionate AI technology
          </p>
          <p className="text-sm text-secondary-400 mt-4">
            Built with AWS Amplify Gen 2, Next.js 14+, and modern web technologies
          </p>
        </div>
      </footer>
    </div>
  );
}
