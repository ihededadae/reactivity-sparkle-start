import { Code, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Modern Development",
    description: "Built with the latest web technologies and best practices.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Responsive Design",
    description: "Looks great on all devices, from mobile to desktop.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized for performance and speed out of the box.",
  },
];

export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-secondary hover:bg-secondary-hover transition-colors"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};