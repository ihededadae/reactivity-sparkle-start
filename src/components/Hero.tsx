import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-white">
      <div className="container px-4 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          Build Something <span className="text-primary">Amazing</span>
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Create beautiful, responsive web applications with modern tools and frameworks.
          Start your journey today.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-3 bg-secondary text-gray-700 rounded-lg hover:bg-secondary-hover transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};