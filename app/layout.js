import './globals.css';

export const metadata = {
  title: 'My Project Homepage',
  description: 'Modern home page with warranty form',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
