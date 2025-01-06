
import NavBar from '@/components/NavBar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/styles/main.scss'
import Footer from '@/components/Footer';


export const metadata = {
  title: "Awetism Insights",
  description: "Awetism Insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
