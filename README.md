# MediRendez — Réservez votre consultation médicale

A modern healthcare and appointment booking application built with **Next.js 15**, **React 19**, and **Tailwind CSS**.

## 🚀 Features

- **Dynamic Appointment Booking System** - Interactive calendar and availability selection based on local storage.
- **Premium Doctor Profile UI** - Full-page responsive profile with experience, pricing, bio, reviews, and a sticky booking bar.
- **Multi-language Support** - Embedded language localization (Arabic, French, English) via a custom `LanguageProvider`.
- **Offline / Local Data Pipeline** - Uses scalable local JSON datasets (`doctorsData.ts`) eliminating external API billing requirements.
- **Modern UI & Aesthetics** - Fluid animations, glassmorphism elements, Tailwind CSS for rapid styling, and the gorgeous `Plus_Jakarta_Sans` font.
- **FontAwesome & Lucide Icons** - Rich visual iconography replacing old SVGs/emojis.
- **WhatsApp Integration** - Seamless contact capabilities and automated booking confirmation redirection.
- **SEO Ready** - Next.js metadata and dynamic routing out of the box with French language setup to prevent hydration mismatches.

## 🛠️ Project Structure

```
medirendez/
├── public/                 # Static assets
├── src/
│   ├── app/                # App router components
│   │   ├── components/     # App-specific blocks (HeroSection, BookingWidget, DoctorProfiles, WeeklyCalendar, etc.)
│   │   ├── doctor/[id]/    # Premium Doctor Profile dynamic page route
│   │   ├── layout.tsx      # Root layout component (FontAwesome CDN, suppressHydrationWarning)
│   │   └── page.tsx        # Main landing page
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Core UI components (AppImage, AppIcon, AppLogo)
│   │   ├── Header.tsx      # Main application header
│   │   └── Footer.tsx      # Main application footer
├── package.json            # Project dependencies and scripts
└── tailwind.config.js      # Tailwind CSS configuration
```

## 📦 Dependencies

Additional core modules installed:

- `lucide-react`, `@heroicons/react` - robust scalable modern iconography
- `recharts` - for metrics and administrative dashboards
- `@tailwindcss/typography`, `@tailwindcss/forms` - improved typographic and form base styles
- Font Awesome CDN (included via HTML `<head>` link in `layout.tsx`)

## ⚙️ Environment Variables

For full functionality, ensure the following environment variable is set (e.g. inside a `.env` or `.env.local` file):

- `NEXT_PUBLIC_SITE_URL` - Base URL for metadata and SEO canonicals (e.g., `http://localhost:4028`).

## 📥 Installation

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:4028](http://localhost:4028) in your browser.

## 💻 Available Scripts

- `npm run dev` - Start development server (Port `4028`)
- `npm run build` - Build the application for production
- `npm run start` - Start the Next.js production server
- `npm run serve` - Alias to start the server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code using Prettier
- `npm run type-check` - Run TypeScript checks without emitting output

## 📱 Deployment

Build the application for production:

```bash
npm run build
```

Then deploy the `.next` output to your preferred platform (Vercel, Netlify, Custom server). Netlify plugin (`@netlify/plugin-nextjs`) is already added as a devDependency.

## 📈 Changelog

- **Doctor Profile Modals**: Introduced `doctor/[id]/page.tsx` displaying interactive, premium doctor profiles with robust availability selection.
- **Language Localization**: Added `LanguageProvider` with built-in translations targeting French, Arabic, and English.
- **FontAwesome Transition**: Replaced native or emoji icons throughout pages with FontAwesome scaling graphics via CDN.
- **Hydration Fixes**: Root layout uses `suppressHydrationWarning=true` directly mapping with Next.js 15 safe hydration techniques alongside the French locale baseline.
- **Booking Persistence**: Integrated robust dynamic booking widgets enabling simple interactive timeline selections.

## 🙏 Acknowledgments

- Built with ❤️ on [Rocket.new](https://rocket.new)
- Powered by Next.js 15 and React 19
- Styled with Tailwind CSS
