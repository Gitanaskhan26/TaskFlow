
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Check, BarChart2, Zap, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16 flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-accent">
          <div className="container px-4 py-24 sm:py-32 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                  Manage your tasks with <span className="text-brand-600">ease and efficiency</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  TaskFlow helps teams organize, track, and manage their work in a simple and intuitive way.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/auth?mode=signup">
                    <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                      Get Started For Free
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button size="lg" variant="outline">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl animate-slide-in bg-card p-4">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="TaskFlow Dashboard"
                  className="rounded-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Powerful features for high-performing teams
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to manage your projects effectively
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                <div className="h-12 w-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-5">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Task Management</h3>
                <p className="text-muted-foreground">
                  Create, organize, and track your tasks with a flexible and intuitive interface.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                <div className="h-12 w-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-5">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights with beautiful charts and detailed analysis.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                <div className="h-12 w-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-5">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Updates</h3>
                <p className="text-muted-foreground">
                  Collaborate effectively with team members using real-time updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-16 sm:py-24 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Have questions or need help? Contact our team and we'll get back to you shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-accent p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mr-4">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground">support@taskflow.com</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                    <p className="text-foreground">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground">123 Productivity Ave, Suite 456<br />San Francisco, CA 94107</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Business Hours</p>
                    <p className="text-foreground">Monday - Friday: 9AM - 5PM PST</p>
                  </div>
                </div>
              </div>

              <div className="border border-border p-8 rounded-lg shadow-sm bg-card">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-accent">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to boost your productivity?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of teams who rely on TaskFlow to manage their work efficiently.
              </p>
              <Link to="/auth?mode=signup">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
                  Get Started For Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Social Links */}
      <footer className="bg-card text-foreground py-8 border-t border-border">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand and tagline */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-md bg-brand-600 flex items-center justify-center mr-2">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">TaskFlow</span>
              </div>
              <p className="text-muted-foreground">
                Making team productivity simple and intuitive.
              </p>
            </div>
            
            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/dashboard" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Dashboard
                </Link>
                <Link to="/tasks" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Tasks
                </Link>
                <Link to="/auth" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Sign In
                </Link>
                <Link to="#contact" className="text-muted-foreground hover:text-brand-600 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-full bg-card p-2 border border-border hover:bg-accent hover:text-brand-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-full bg-card p-2 border border-border hover:bg-accent hover:text-brand-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-full bg-card p-2 border border-border hover:bg-accent hover:text-brand-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-full bg-card p-2 border border-border hover:bg-accent hover:text-brand-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-full bg-card p-2 border border-border hover:bg-accent hover:text-brand-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-brand-600 transition-colors mr-4">Privacy Policy</Link>
              <Link to="#" className="hover:text-brand-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
