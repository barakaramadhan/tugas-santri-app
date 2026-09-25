import { Outlet, Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-background">
 
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
     
          <a
            href="#hero"
            className="text-xl font-bold tracking-tight"
          >
            MyBrand
          </a>

         
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#hero"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </a>

            <a
              href="#testimony"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimony
            </a>

            <a
              href="#faq"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </a>
          </nav>

       
          <Link to="/sign-in">
            <Button className="rounded-full px-5">
              Sign In
            </Button>
          </Link>
        </div>
      </header>

    
      <main>
        <Outlet />
      </main>
    </div>
  );
}