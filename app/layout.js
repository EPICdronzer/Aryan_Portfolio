import "./globals.css";

export const metadata = {
  title: "Aryan Chopra — Video Editor & AI Content Creator",
  description: "Premium video editing, AI-enhanced visuals & content strategy by Aryan Chopra.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
