import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "חני כוכב לב | ייעוץ לכלכלת המשפחה",
  description:
    "תוכנית פעולה מעשית ומותאמת אישית שתוציא אתכם מהמינוס לביטחון כלכלי. ייעוץ ראשון ללא עלות.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
