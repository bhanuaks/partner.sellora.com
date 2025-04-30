// import Footer from "./frontComponets/Footer";
// import HeaderFirst from "./frontComponets/HeaderFirst";
// import HeaderSecond from "./frontComponets/HeaderSecond";
import '../../../public/front/assets/css/style.css'
// import '../../../public/front/assets/css/bootstrap.min.css'
import '../../../public/front/assets/css/charts.min.css'
import '../../../public/front/assets/css/plugins.css'
import { baseUrl } from "@/Http/helper";
import Script from "next/script";
import LoginHeader from './dashboard/DashboardComponents/LoginHeader';
import LoginFooter from './dashboard/DashboardComponents/LoginFooter';
import CommonHeader from './CommonHeader';
import { UserAppProvider } from '../contaxtData/userContaxtData';
// import '../../Style/css/bootstrap.min.css'
// import '../../Style/css/intlTelInput.css'
// import '../../Style/css/my_order.css'
// import '../../Style/css/rating.css'
// import '../../Style/css/charts.min.css'
import '../../../public/front/loader.css'

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
        <LoginHeader />
        <CommonHeader />
        <div className="loaderouter"><div className="loader"></div></div>
            {children}
        
        <LoginFooter />
        </UserAppProvider>
      </body>
    </html>
  );
}
