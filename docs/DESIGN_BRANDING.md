# Design & Branding Guide
**Dr. Sophia Gonzales - Virtual Optometry Assistant Services**

---

## 🎨 Brand Identity

### Brand Essence
- **Professional**: Medical-grade quality and presentation
- **Trustworthy**: HIPAA-compliant, secure, reliable
- **Specialized**: Optometry-focused expertise
- **Accessible**: Easy to work with, responsive communication
- **Modern**: Current technology, efficient processes

### Brand Personality
- Competent & Professional
- Warm & Approachable
- Detail-Oriented
- Trustworthy & Confidential
- Efficient & Organized

### Tagline
**"Your Vision, My Mission"**

---

## 🎨 Color Palette

### Primary Colors

#### Medical Blue
- **Purpose**: Trust, professionalism, primary actions
- **Main**: `#3B82F6` (HSL: 217 91% 60%)
- **Usage**: Primary buttons, links, brand elements, focus states
- **Psychology**: Trust, competence, healthcare professionalism

#### Optometry Teal
- **Purpose**: Vision, clarity, eye care specialty
- **Main**: `#06B6D4` (HSL: 187 85% 43%)
- **Usage**: Secondary elements, accent points, icons
- **Psychology**: Clarity, vision, medical precision

#### Warm Coral
- **Purpose**: Call-to-action, warmth, engagement
- **Main**: `#F97316` (HSL: 21 90% 53%)
- **Usage**: Important CTAs, highlights, attention points
- **Psychology**: Approachability, action, warmth

### Status Colors

- **Success**: `#22C55E` - Confirmations, success states
- **Warning**: `#F59E0B` - Cautions, important notices
- **Error**: `#EF4444` - Errors, alerts, required fields
- **Info**: `#06B6D4` - Information, tips, guidance

### Neutral Colors

- **Background**: `#FFFFFF` / `#0A0A0A` (dark mode)
- **Foreground**: `#171717` / `#EDEDED` (dark mode)
- **Muted**: `#F5F5F5` / `#262626` (dark mode)
- **Border**: `#E5E5E5` / `#404040` (dark mode)

### Usage Guidelines

```css
/* Primary Actions */
background: hsl(217 91% 60%);  /* Blue buttons, links */

/* Secondary Actions */
background: hsl(187 85% 43%);  /* Teal accents, icons */

/* Important CTAs */
background: hsl(21 90% 53%);   /* Coral "Get Started" buttons */

/* Text */
color: hsl(0 0% 9%);           /* Primary text */
color: hsl(0 0% 45%);          /* Secondary text */
```

---

## ✍️ Typography

### Font Families

#### Inter (Body Text)
- **Usage**: Body copy, paragraphs, form inputs, general text
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Source**: Google Fonts via @fontsource/inter
- **Why**: Excellent readability, healthcare-standard, accessible

#### Geist Sans (Headings)
- **Usage**: Headlines, section titles, navigation
- **Weights**: 600 (Semibold), 700 (Bold)
- **Source**: Next.js Google Fonts
- **Why**: Modern, professional, clear hierarchy

#### Geist Mono (Code/Technical)
- **Usage**: Technical content, timestamps, monospace needs
- **Source**: Next.js Google Fonts
- **Why**: Clean monospace for technical elements

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|---------|-------------|
| H1      | 48px          | 32px          | 700     | 1.2         |
| H2      | 36px          | 24px          | 600     | 1.2         |
| H3      | 24px          | 20px          | 600     | 1.3         |
| H4      | 20px          | 18px          | 600     | 1.4         |
| Body    | 16px          | 16px          | 400     | 1.7         |
| Small   | 14px          | 14px          | 400     | 1.6         |
| Tiny    | 12px          | 12px          | 400     | 1.5         |

### Typography Guidelines

- **Line Length**: 60-80 characters for optimal readability
- **Paragraph Spacing**: 1.5em between paragraphs
- **Letter Spacing**: -0.02em for headings, normal for body
- **Text Alignment**: Left-aligned for body text, centered for hero sections

---

## 🎯 Logo & Brand Assets

### Primary Logo
**File**: `/public/logo.svg`

```
[Eye Icon] Dr. Sophia Gonzales
          VIRTUAL OPTOMETRY ASSISTANT
```

- **Components**: Eye icon + Optometrist name + Service descriptor
- **Colors**: Blue eye outline, Teal iris, Blue accents
- **Usage**: Header, footer, marketing materials
- **Size**: Minimum 150px width for readability

### Icon/Badge
**File**: `/public/icon.svg`

- **Design**: Eye icon in circle
- **Size**: 64x64px
- **Colors**: Blue background, white/teal eye
- **Usage**: Social media, app icons, favicons

### Favicon
**File**: `/public/favicon.svg`

- **Design**: Simplified eye in rounded square
- **Size**: 32x32px
- **Usage**: Browser tabs, bookmarks

### Logo Usage Rules

✅ **Do**:
- Maintain adequate clear space (minimum 16px)
- Use on white or light backgrounds primarily
- Scale proportionally
- Use provided color versions

❌ **Don't**:
- Distort or stretch
- Change colors arbitrarily
- Add effects (shadows, glows, etc.)
- Place on busy backgrounds without backdrop

---

## 📐 Layout & Spacing

### Container Widths
- **Max Container**: 1280px
- **Content Width**: 800px (text-heavy pages)
- **Narrow Content**: 600px (forms, focused content)

### Spacing Scale (8px base unit)
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 80px (5rem)

### Section Spacing
- **Desktop**: 80px top/bottom padding
- **Tablet**: 64px top/bottom padding
- **Mobile**: 48px top/bottom padding

### Grid System
- **Columns**: 12-column grid
- **Gap**: 24px between items
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

---

## 🎪 UI Components

### Buttons

#### Primary Button
```
Background: Primary Blue
Text: White
Border Radius: 8px
Padding: 12px 24px
Font: 16px Medium
Hover: Slight opacity reduction (90%)
```

#### Secondary Button
```
Background: Transparent
Text: Primary Blue
Border: 2px Blue
Border Radius: 8px
Padding: 12px 24px
Hover: Blue background with white text
```

#### Button Sizes
- **Small**: 10px 20px, 14px text
- **Medium**: 12px 24px, 16px text (default)
- **Large**: 16px 32px, 18px text

### Cards
```
Background: White / Card color
Border: 1px Neutral-200
Border Radius: 12px
Padding: 24px
Shadow: Subtle (0 1px 3px rgba(0,0,0,0.1))
Hover: Elevated shadow
```

### Form Inputs
```
Border: 1px Neutral-300
Border Radius: 6px
Padding: 10px 16px
Font: 16px Regular
Focus: 2px Blue ring
Error: Red border + error message below
```

### Badges
```
Small pill-shaped indicators
Padding: 4px 12px
Border Radius: 9999px (fully rounded)
Font: 12px Medium
Variants: Default, Primary, Success, Warning, Error
```

---

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text (18px+)**: Minimum 3:1 contrast ratio
- **UI Components**: Minimum 3:1 contrast ratio

#### Keyboard Navigation
- All interactive elements accessible via keyboard
- Visible focus indicators (2px blue outline)
- Logical tab order
- Skip to main content link

#### Screen Readers
- Semantic HTML elements
- ARIA labels for icons and interactive elements
- Alt text for all images
- Descriptive link text (avoid "click here")

#### Forms
- Associated labels with inputs
- Clear error messages
- Inline validation feedback
- Success confirmations

---

## 📱 Responsive Design

### Mobile-First Approach
1. Design for mobile (320px+)
2. Enhance for tablet (768px+)
3. Optimize for desktop (1024px+)

### Breakpoint Strategy
```css
/* Mobile First */
.component { /* Mobile styles */ }

@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

### Touch Targets
- Minimum size: 44x44px
- Adequate spacing between targets
- Clear hover/active states on mobile

---

## 🎬 Animations & Transitions

### Transition Speeds
- **Fast**: 150ms - Hover effects, color changes
- **Base**: 200ms - Most transitions (default)
- **Slow**: 300ms - Larger movements, modals
- **Slower**: 500ms - Page transitions, complex animations

### Easing Functions
- **Default**: `ease-in-out` - Most transitions
- **Entrance**: `ease-out` - Elements entering
- **Exit**: `ease-in` - Elements leaving

### Motion Guidelines
- Respect `prefers-reduced-motion`
- Subtle, professional movements
- Purpose-driven animations only
- Performance > complexity

---

## 📊 Design System Files

### Configuration
- **Design Tokens**: `/src/config/design-system.ts`
- **Site Config**: `/src/config/site.ts`
- **Global Styles**: `/src/app/globals.css`
- **Utilities**: `/src/lib/utils.ts`

### Documentation
- **Component Architecture**: `/docs/COMPONENT_ARCHITECTURE.md`
- **Wireframes**: `/docs/WIREFRAMES.md`
- **This Guide**: `/docs/DESIGN_BRANDING.md`

### Assets
- **Logo**: `/public/logo.svg`
- **Icon**: `/public/icon.svg`
- **Favicon**: `/public/favicon.svg`

---

## 🚀 Implementation Checklist

- [x] Define color palette
- [x] Select typography system
- [x] Create logo and branding assets
- [x] Document wireframes for all pages
- [x] Define component architecture
- [x] Set up design system configuration
- [x] Implement global styles
- [x] Create utility functions
- [ ] Build foundation UI components
- [ ] Build layout components
- [ ] Build page sections
- [ ] Develop homepage
- [ ] Develop services page
- [ ] Develop about page
- [ ] Develop contact page
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] User testing
- [ ] Launch

---

## 📚 Resources

### Design References
- Healthcare design patterns
- WCAG accessibility guidelines
- Medical website best practices

### Tools Used
- **Design**: Figma (for mockups)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Geist)
- **CSS**: Tailwind CSS v4
- **Components**: Radix UI primitives

### Brand Inspiration
- Professional healthcare aesthetics
- Optometry industry standards
- Modern virtual assistant presentation
- Trust-building design patterns

---

**Last Updated**: February 8, 2026  
**Version**: 1.0  
**Status**: Design phase complete ✅
