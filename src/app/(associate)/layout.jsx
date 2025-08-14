 
import '../../../public/front/assets/css/style.css'
// import '../../../public/front/assets/css/bootstrap.min.css'
import '../../../public/front/assets/css/charts.min.css'
import '../../../public/front/assets/css/plugins.css'
import { baseUrl } from "@/Http/helper";
import Script from "next/script";
import Header from './Header';
import Footer from './Footer';
 
 


export const generateMetadata = () => {
  return {
    title: 'Partner | Sellora.com',
    description:
      'Description',
    // viewport: 'width=device-width, initial-scale=1',
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: 'Dashboard',
      description: 'Partner Dashboard',
      url: 'sellora.com',
      siteName: 'sellora.com',
      images: [
        {
          url: `${baseUrl}front/image/affiliate_logo.png`,
          width: 1200,
          height: 630,
          alt: 'sellora',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'sellora.com',
      description: 'Description',
      images: [`${baseUrl}front/image/affiliate_logo.png`],
    },
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="index-five"> 
        <Header />
            {children} 

            <Footer />
      </body>
    </html>
  );
}
