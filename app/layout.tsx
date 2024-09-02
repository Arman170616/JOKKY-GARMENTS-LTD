import React from 'react';
import '../styles/globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Midori Sourcing',
  description: 'Description',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>

  );
}
