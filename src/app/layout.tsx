import type { Metadata } from "next";
import "./globals.css";
import NavigationButtons from "./components/buttons/navigation_buttons/navigaiton_buttons";
import SocialMediaButtons from "./components/buttons/social_media_buttons/social_media_buttons";
import SmootScrolling from "./components/smooth_scrolling";

export const metadata: Metadata = {
  title: "Dijital Mimarlık Akademisi",
  description: "Generated by create next app",
  icons: {
    icon: "image/about/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationButtons />
        <SocialMediaButtons />
        <SmootScrolling>{children}</SmootScrolling>
      </body>
    </html>
  );
}
