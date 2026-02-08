"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
          >
            <path
              d="M30 20C22 20 15 26 12 30C15 34 22 40 30 40C38 40 45 34 48 30C45 26 38 20 30 20Z"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="30" cy="30" r="6" fill="hsl(var(--secondary))" opacity="0.3" />
            <circle
              cx="30"
              cy="30"
              r="6"
              stroke="hsl(var(--secondary))"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="30" cy="30" r="3" fill="hsl(var(--primary))" />
            <circle cx="32" cy="28" r="1.5" fill="white" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-none text-[hsl(var(--foreground))]">
              {siteConfig.name}
            </span>
            <span className="text-[10px] leading-none text-[hsl(var(--muted-foreground))]">
              Virtual Optometry Assistant
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {siteConfig.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[hsl(var(--primary))]",
                pathname === item.href
                  ? "text-[hsl(var(--foreground))]"
                  : "text-[hsl(var(--muted-foreground))]"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href={siteConfig.navigation.cta.href}>
            <Button>
              {siteConfig.navigation.cta.name}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-[hsl(var(--border))] md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-[hsl(var(--primary))]",
                  pathname === item.href
                    ? "text-[hsl(var(--foreground))]"
                    : "text-[hsl(var(--muted-foreground))]"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href={siteConfig.navigation.cta.href} onClick={() => setIsMenuOpen(false)} className="w-full">
              <Button className="w-full">
                {siteConfig.navigation.cta.name}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
