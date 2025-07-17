import "./globals.css"

export const metadata = {
  title: "Selecta Boooking",
  description: "This is Selecta Booking, Select and Book, now and eat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
