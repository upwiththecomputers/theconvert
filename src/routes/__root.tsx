import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      name: "Augustine of Hippo",
      alternateName: ["Saint Augustine", "Aurelius Augustinus"],
      description:
        "Bishop of Hippo, Doctor of the Church, author of the Confessions and the City of God.",
      birthDate: "0354-11-13",
      deathDate: "0430-08-28",
      birthPlace: "Thagaste",
    },
  ],
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#F4EFE6" },
      { name: "author", content: SITE.author },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cinzel:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to text
        </a>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-cream px-6 text-center text-ink">
      <p className="kicker">404</p>
      <h1 className="mt-4 font-display text-4xl tracking-[0.12em]">
        The page is not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Seek, and you shall find. The library of Augustine remains open.
      </p>
      <a
        href="/"
        className="mt-8 font-display text-xs uppercase tracking-[0.24em] text-gold-ink underline decoration-gold/50 underline-offset-8"
      >
        Return home
      </a>
    </main>
  );
}
