# Planning Guide

A professional landing page connecting settlement funders with fundees, helping people needing an advance on their settlement funds shop the market for the best deal possible based on their timeline.

**Experience Qualities**: 
1. **Trustworthy** - Financial services require credibility through clear messaging, professional design, and transparent information
2. **Accessible** - Simple navigation and straightforward content that makes complex financial services feel approachable
3. **Supportive** - Warm, helpful tone that positions the service as an advocate for people in need

**Complexity Level**: Content Showcase (information-focused)
This is a marketing landing page designed to explain the service, build trust, and drive conversions through form submissions or contact actions.

## Essential Features

**Hero Section with Value Proposition**
- Functionality: Display compelling headline, subheadline, and primary CTA
- Purpose: Immediately communicate the core value and drive engagement
- Trigger: Page load
- Progression: User lands on page → Reads headline "Connect with Settlement Funders" → Sees explanation → Clicks "Get Started" CTA
- Success criteria: Clear messaging visible above fold, CTA button prominently displayed

**How It Works / Process Section**
- Functionality: Visual step-by-step explanation of the funding process
- Purpose: Demystify the process and build confidence
- Trigger: User scrolls down from hero
- Progression: User scrolls → Sees 3-4 step process cards → Understands journey from application to funding
- Success criteria: Clear iconography, concise step descriptions, logical flow

**Benefits/Features Section**
- Functionality: Highlight key advantages of using the service
- Purpose: Address pain points and showcase competitive advantages
- Trigger: Continued scrolling
- Progression: User reads benefits → Understands value propositions (best rates, fast funding, multiple offers, etc.)
- Success criteria: Scannable benefit cards with icons, clear value statements

**Social Proof / Trust Signals**
- Functionality: Display testimonials, statistics, or trust badges
- Purpose: Build credibility and reduce friction
- Trigger: User scrolls through page
- Progression: User sees proof points → Trust increases → More likely to convert
- Success criteria: Authentic-feeling testimonials, relevant statistics prominently displayed

**Contact/Lead Generation Form**
- Functionality: Collect user information to connect them with funders
- Purpose: Primary conversion goal - capture leads
- Trigger: User clicks CTA or scrolls to form section
- Progression: User fills fields (name, email, settlement details) → Submits → Sees confirmation
- Success criteria: Form validates inputs, shows success state, stores submissions

**Footer with Information**
- Functionality: Legal links, contact info, additional resources
- Purpose: Provide required disclosures and secondary navigation
- Trigger: User scrolls to bottom
- Progression: User accesses privacy policy, terms, contact details
- Success criteria: All required legal links present and accessible

## Edge Case Handling

- **Form Validation Errors**: Inline error messages with clear guidance on how to fix issues
- **Empty Form Submission**: Disabled submit button until required fields are filled
- **Long Content on Mobile**: Responsive stacking with appropriate spacing and touch targets
- **No JavaScript**: Core content and messaging still accessible with graceful degradation
- **Slow Loading**: Progressive content loading with skeleton states or fade-ins

## Design Direction

The design should evoke professionalism, trust, and accessibility while maintaining a modern, clean aesthetic. It should feel like a legitimate financial services platform without being overly corporate or cold. The visual language should communicate both competence and compassion - this is a service helping people in difficult situations get fair financial solutions.

## Color Selection

A professional yet approachable palette centered on financial trust with warm accent tones to convey support.

- **Primary Color**: Deep authoritative blue (oklch(0.42 0.12 250)) - Communicates trust, stability, and financial credibility
- **Secondary Colors**: 
  - Warm teal/cyan (oklch(0.65 0.08 200)) - Supporting professional tone with slight warmth
  - Light neutral background (oklch(0.98 0.005 250)) - Clean, spacious feel
- **Accent Color**: Vibrant coral/orange (oklch(0.68 0.18 35)) - CTAs and important highlights, conveys energy and action without aggression
- **Foreground/Background Pairings**: 
  - Primary Blue on Light Background: Dark blue #0B3A5D (oklch(0.42 0.12 250)) on Off-white #FAFBFC (oklch(0.98 0.005 250)) - Ratio 10.2:1 ✓
  - Accent Coral on White: Coral #E8784A (oklch(0.68 0.18 35)) on White #FFFFFF - Ratio 4.6:1 ✓
  - White on Primary: White #FFFFFF on Deep Blue #0B3A5D (oklch(0.42 0.12 250)) - Ratio 10.2:1 ✓

## Font Selection

Typography should project modern professionalism with excellent readability across all device sizes, combining a clean sans-serif with subtle character.

- **Primary Font**: Space Grotesk - Distinctive geometric sans with technical precision yet warm character, perfect for headlines and UI elements
- **Secondary Font**: Inter - Highly readable workhorse for body text and longer content
- **Typographic Hierarchy**: 
  - H1 (Hero Headline): Space Grotesk Bold/48px/tight (-0.02em letter spacing)
  - H2 (Section Headers): Space Grotesk SemiBold/36px/tight
  - H3 (Feature Titles): Space Grotesk Medium/24px/normal
  - Body (Paragraphs): Inter Regular/16px/relaxed (1.6 line height)
  - Small (Captions): Inter Regular/14px/normal
  - CTA Buttons: Space Grotesk Medium/16px/wide (0.02em letter spacing)

## Animations

Animations should be purposeful and subtle, enhancing the user experience without distraction - reinforcing the professional yet approachable tone.

Key animation moments:
- Fade-in on scroll for section reveals (300ms ease)
- Gentle scale on button hover (150ms) for tactile feedback
- Smooth scroll to form section when CTA clicked
- Slide-up entrance for process step cards with stagger delay
- Subtle pulse on primary CTA to draw attention without being obnoxious

## Component Selection

- **Components**: 
  - Card: For process steps, benefits, testimonials - with subtle shadow and hover lift
  - Button: Primary (filled coral accent), Secondary (outlined blue) - multiple sizes for hierarchy
  - Input/Textarea: Form fields with floating labels and clear focus states
  - Badge: For trust signals like "Fast Approval" or "Best Rates"
  - Separator: Between major sections for visual breathing room
- **Customizations**: 
  - Custom hero gradient background (subtle blue-to-teal gradient)
  - Process step cards with custom number badges
  - Testimonial cards with quote styling
  - Contact form with multi-column layout on desktop
- **States**: 
  - Buttons: Distinct hover (brightness increase, slight scale), active (scale down), focus (ring), disabled (opacity 50%)
  - Inputs: Default (neutral border), Focus (primary border + ring), Error (destructive border + message), Success (green border)
  - Cards: Rest (subtle shadow), Hover (lifted shadow, slight translate up)
- **Icon Selection**: 
  - @phosphor-icons/react: 
    - Handshake for connecting funders/fundees
    - ClipboardText for application process
    - CurrencyDollar for funding
    - CheckCircle for benefits/completion
    - Users for testimonials
    - ArrowRight for CTAs and navigation
    - Phone/Envelope for contact
- **Spacing**: 
  - Section vertical padding: py-16 (mobile), py-24 (desktop)
  - Container max-width: max-w-7xl with px-4 (mobile), px-8 (desktop)
  - Card gap: gap-6 (mobile), gap-8 (desktop)
  - Element spacing: space-y-4 for vertical stacks, gap-3 for inline elements
- **Mobile**: 
  - Hero: Stack headline and CTA vertically, reduce font sizes (H1 to 36px)
  - Process steps: Single column with full-width cards
  - Benefits: 1 column mobile, 2 columns tablet, 3 columns desktop
  - Form: Single column on mobile, 2-column grid on desktop
  - Navigation: Hamburger menu if navigation added, or sticky CTA button
