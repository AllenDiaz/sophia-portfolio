import * as React from "react";
import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              </svg>
              <span className="text-sm font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[hsl(var(--foreground))]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[hsl(var(--foreground))]">
              Services
            </h3>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[hsl(var(--foreground))]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-[hsl(var(--primary))]" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[hsl(var(--primary))]" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-[hsl(var(--primary))]" />
                <span className="text-sm text-[hsl(var(--muted-foreground))]">
                  {siteConfig.contact.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[hsl(var(--border))] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[hsl(var(--muted-foreground))] sm:flex-row">
            <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition-colors hover:text-[hsl(var(--primary))]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-[hsl(var(--primary))]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
