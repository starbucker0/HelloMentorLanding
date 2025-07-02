
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Waves } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/copy-generator', label: 'AI Tool' },
];

// Replace this with your actual Google Form URL
const GOOGLE_FORM_URL = "https://forms.gle/wjXgHh9WWozQHtJG7";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/images/logo.png" 
              alt="HelloMentor Logo" 
              width={32} 
              height={32} 
              className="h-8 w-8"
            />
            <span className="hidden font-bold sm:inline-block font-headline">HelloMentor</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  (pathname?.startsWith(link.href) && link.href !== '/#features' && link.href !== '/#testimonials') || (pathname ==='/' && (link.href === '/#features' || link.href === '/#testimonials'))
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile Nav */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <Image 
                    src="/images/logo.png" 
                    alt="HelloMentor Logo" 
                    width={24} 
                    height={24} 
                    className="h-6 w-6"
                  />
                  <span className="font-bold font-headline">HelloMentor</span>
                </Link>
                <div className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4">
                    <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Get Early Access
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center space-x-2 md:hidden">
              <Image 
                src="/images/logo.png" 
                alt="HelloMentor Logo" 
                width={24} 
                height={24} 
                className="h-6 w-6"
              />
              <span className="font-bold font-headline">HelloMentor</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center">
            <Button asChild>
              <Link href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Get Early Access
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
