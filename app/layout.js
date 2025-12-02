import "./css/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export const metadata = {
  title: "Newegg in persian",
  description: "designed by Ngnfsd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
