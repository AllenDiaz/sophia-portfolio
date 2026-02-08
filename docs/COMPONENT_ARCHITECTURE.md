# Component Architecture

## Overview
Component architecture for Dr. Sophia Gonzales VA Optometry website, following atomic design principles and healthcare UX best practices.

## Design Principles

1. **Accessibility First** - WCAG 2.1 AA compliance minimum
2. **Mobile Responsive** - Mobile-first design approach
3. **Performance** - Optimized for Core Web Vitals
4. **Consistency** - Unified design system across all components
5. **Healthcare Standards** - HIPAA-aware component design

## Component Hierarchy

### Foundation Layer (Atoms)
Base building blocks that cannot be broken down further.

#### 1. **Button** (`components/ui/button.tsx`)
- **Variants**: primary, secondary, outline, ghost, link
- **Sizes**: sm, md, lg
- **States**: default, hover, active, disabled, loading
- **Props**: variant, size, disabled, loading, icon
- **Use Cases**: CTAs, form submissions, navigation

#### 2. **Input** (`components/ui/input.tsx`)
- **Types**: text, email, tel, password, number
- **States**: default, focus, error, disabled
- **Features**: label, helper text, error message, icons
- **Props**: type, label, error, disabled, placeholder
- **Use Cases**: Contact forms, search, data entry

#### 3. **Badge** (`components/ui/badge.tsx`)
- **Variants**: default, primary, secondary, success, warning, error
- **Sizes**: sm, md
- **Props**: variant, size
- **Use Cases**: Status indicators, tags, labels

#### 4. **Label** (`components/ui/label.tsx`)
- **Variants**: default, required
- **Props**: htmlFor, required
- **Use Cases**: Form labels, field identifiers

#### 5. **Icon** (via lucide-react)
- **Integration**: Lucide React library
- **Usage**: Consistent 24px default size
- **Colors**: Inherit from parent or use design tokens

### Component Layer (Molecules)
Combinations of atoms that form functional units.

#### 6. **Card** (`components/ui/card.tsx`)
- **Variants**: default, elevated, outlined
- **Sections**: header, content, footer
- **Props**: variant, className
- **Use Cases**: Service cards, feature highlights, content containers

#### 7. **FormField** (`components/ui/form-field.tsx`)
- **Composition**: Label + Input + Error Message
- **Props**: label, error, required, helper text
- **Use Cases**: All form inputs

#### 8. **ServiceCard** (`components/service-card.tsx`)
- **Composition**: Card + Icon + Title + Description
- **Props**: service, onClick
- **Use Cases**: Services page, homepage features

#### 9. **FeatureItem** (`components/feature-item.tsx`)
- **Composition**: Icon + Title + Description
- **Props**: icon, title, description
- **Use Cases**: About section, benefits list

#### 10. **Testimonial** (`components/testimonial.tsx`)
- **Composition**: Card + Avatar + Quote + Name + Role
- **Props**: testimonial data
- **Use Cases**: Social proof, client feedback

### Section Layer (Organisms)
Complex components that form major page sections.

#### 11. **Header** (`components/layout/header.tsx`)
- **Components**: Logo, Navigation, CTA Button
- **Features**: Responsive menu, sticky scroll
- **Props**: transparent mode for hero sections
- **Use Cases**: Site-wide navigation

#### 12. **Footer** (`components/layout/footer.tsx`)
- **Components**: Logo, Links, Contact Info, Social Links
- **Props**: None (uses site config)
- **Use Cases**: Site-wide footer

#### 13. **Hero** (`components/sections/hero.tsx`)
- **Components**: Heading, Subheading, CTA Buttons, Image/Graphic
- **Variants**: center-aligned, left-aligned, with-image
- **Props**: title, subtitle, primaryCTA, secondaryCTA, image
- **Use Cases**: Homepage hero, landing pages

#### 14. **ServicesGrid** (`components/sections/services-grid.tsx`)
- **Components**: Section Header + Grid of ServiceCards
- **Features**: 3-column responsive grid
- **Props**: services array
- **Use Cases**: Homepage services, Services page

#### 15. **ContactForm** (`components/sections/contact-form.tsx`)
- **Components**: Multiple FormFields + Submit Button
- **Features**: Validation, loading states, success/error feedback
- **Props**: onSubmit
- **Use Cases**: Contact page, inquiry forms

#### 16. **CTASection** (`components/sections/cta-section.tsx`)
- **Components**: Heading + Description + Button
- **Variants**: default, gradient, bordered
- **Props**: title, description, buttonText, buttonHref
- **Use Cases**: Page endings, conversion points

#### 17. **FeaturesSection** (`components/sections/features-section.tsx`)
- **Components**: Section Header + Grid of FeatureItems
- **Features**: 2x2 or 4-column grid
- **Props**: features array
- **Use Cases**: About page, value propositions

### Template Layer
Page-level templates combining organisms.

#### 18. **PageLayout** (`components/layout/page-layout.tsx`)
- **Components**: Header + Main Content + Footer
- **Props**: children, showHeader, showFooter
- **Use Cases**: Wrapper for all pages

#### 19. **SectionContainer** (`components/layout/section-container.tsx`)
- **Features**: Consistent spacing, max-width
- **Variants**: narrow, default, wide, full
- **Props**: children, variant
- **Use Cases**: Wrapping page sections

## Component Patterns

### Composition Pattern
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Variant Pattern (using class-variance-authority)
```tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        primary: "primary-classes",
        secondary: "secondary-classes"
      }
    }
  }
);
```

### Forwarding Refs Pattern
```tsx
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return <button ref={ref} className={cn(buttonVariants(), className)} {...props} />
  }
);
```

## File Structure

```
src/
├── components/
│   ├── ui/                    # Foundation components (atoms)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── label.tsx
│   │   └── form-field.tsx
│   ├── layout/                # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── page-layout.tsx
│   │   └── section-container.tsx
│   ├── sections/              # Page sections (organisms)
│   │   ├── hero.tsx
│   │   ├── services-grid.tsx
│   │   ├── contact-form.tsx
│   │   ├── cta-section.tsx
│   │   └── features-section.tsx
│   ├── service-card.tsx       # Specific components
│   ├── feature-item.tsx
│   └── testimonial.tsx
├── config/
│   ├── design-system.ts       # Design tokens
│   └── site.ts                # Site configuration
├── lib/
│   └── utils.ts               # Utility functions
└── types/
    └── index.ts               # Type definitions
```

## Styling Strategy

### Tailwind CSS with Design Tokens
- Use CSS variables for colors (supports dark mode)
- Direct Tailwind classes for layout and spacing
- `cn()` utility for conditional classes
- `cva()` for component variants

### Example
```tsx
<button 
  className={cn(
    "px-4 py-2 rounded-lg font-medium transition-colors",
    "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
    "hover:opacity-90",
    disabled && "opacity-50 cursor-not-allowed"
  )}
>
  Click me
</button>
```

## Accessibility Checklist

- [ ] Semantic HTML elements
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus visible indicators
- [ ] Color contrast ratios (4.5:1 minimum)
- [ ] Screen reader compatibility
- [ ] Form validation messages
- [ ] Loading and error states announced

## Performance Optimization

- **Code Splitting**: Dynamic imports for heavy components
- **Image Optimization**: Next.js Image component
- **Font Loading**: Font display swap strategy
- **Tree Shaking**: Import only used components
- **Bundle Size**: Monitor with `next build`

## Testing Strategy

- **Unit Tests**: Jest + React Testing Library for components
- **Accessibility Tests**: axe-core integration
- **Visual Regression**: Chromatic or Percy
- **E2E Tests**: Playwright for critical user flows

## Next Steps

1. Build foundation components (Button, Input, Card, Badge, Label)
2. Create layout components (Header, Footer, PageLayout)
3. Build section organisms (Hero, ServicesGrid, ContactForm)
4. Assemble pages using components
5. Add animations and micro-interactions
6. Conduct accessibility audit
7. Performance optimization pass
