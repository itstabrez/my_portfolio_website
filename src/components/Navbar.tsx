import React from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './theme/ThemeToggle';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDownload = () => {
    const fileUrl = "https://drive.google.com/file/d/1NZDNosrnkplPOTSLXT8BADg0HkTdWad0/view?usp=sharing";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf";
    link.target = '_blank';
    link.click();
  };

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Portfolio</span>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#home" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">About</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">Experience</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">Projects</a>
            <a href="#achievements" className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium">Achievements</a>
            <ThemeToggle />
            <Button className="flex items-center gap-2" onClick={handleDownload}>
              <Download size={16} /> Resume
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-background/80 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">About</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">Experience</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">Projects</a>
            <a href="#achievements" className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium">Achievements</a>
            <Button className="w-full mt-4 flex items-center justify-center gap-2">
              <Download size={16} /> Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;