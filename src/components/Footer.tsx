export const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};