import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/70">
            © {currentYear} Sakshi Ankleshwariya. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};
