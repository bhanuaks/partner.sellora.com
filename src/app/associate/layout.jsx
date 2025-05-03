 
import '../../../public/front/assets/css/plugins.css'
import '../../../public/front/assets/css/style.css'
import '../../../public/front/assets/css/charts.min.css'
import { baseUrl } from "@/Http/helper";
import Script from "next/script";
import AssociateHeader from './associateComponents/AssociateHeader';
import AssociateFooter from './associateComponents/AssociateFooter';
import { UserAppProvider } from '../contaxtData/userContaxtData';
 
 


export const generateMetadata = () => {
  return {
    title: 'Sellora.com',
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
          url: `${baseUrl}front/image/affiliate_logo.jpg`,
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
      images: [`${baseUrl}front/image/affiliate_logo.jpg`],
    },
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="index-five">
        <UserAppProvider> 
        <AssociateHeader />
          {children} 
          <AssociateFooter />
          </UserAppProvider>
      </body>
    </html>
  );
}
