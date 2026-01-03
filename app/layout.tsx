import type { ReactNode } from "react";

export const metadata = {
  title: "Ratnadip Shinde | DevOps Engineer",
  description: "DevOps Engineer | Cloud & CI/CD Specialist",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
