import "./../styles/globals.css";

export const metadata = {
  title: "NameNation | Learn the background of your name!",
  description: "Generated by create next app",
  keywords: ["name", "nationality", "nation", "facts", "age"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
