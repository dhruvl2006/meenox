import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="MoonEX" className="h-8 mb-4" />
            <p className="text-gray-400">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="nav-link">About Us</a></li>
              <li><a href="#" className="nav-link">Roadmap</a></li>
              <li><a href="#" className="nav-link">FAQs</a></li>
              <li><a href="#" className="nav-link">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <img src="/telegram.svg" alt="Telegram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <img src="/reddit.svg" alt="Reddit" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <img src="/twitter.svg" alt="Twitter" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="text-center text-gray-400">
          <p>&copy; 2024 MoonEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}