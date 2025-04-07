
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Check, BarChart2, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-16 flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 py-24 sm:py-32 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                  Manage your tasks with <span className="text-brand-600">ease and efficiency</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
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
              <div className="rounded-lg overflow-hidden shadow-xl animate-slide-in bg-white p-4">
                <img
                  src="https://source.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="TaskFlow Dashboard"
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Powerful features for high-performing teams
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to manage your projects effectively
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="h-12 w-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-5">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Task Management</h3>
                <p className="text-gray-600">
                  Create, organize, and track your tasks with a flexible and intuitive interface.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="h-12 w-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-5">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
                <p className="text-gray-600">
                  Gain valuable insights with beautiful charts and detailed analysis.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="h-12 w-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center mb-5">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Updates</h3>
                <p className="text-gray-600">
                  Collaborate effectively with team members using real-time updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-brand-50">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Ready to boost your productivity?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-md bg-brand-600 flex items-center justify-center mr-2">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">TaskFlow</span>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
