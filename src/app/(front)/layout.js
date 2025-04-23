import Footer from "./frontComponets/Footer";
import HeaderFirst from "./frontComponets/HeaderFirst";
import HeaderSecond from "./frontComponets/HeaderSecond";
// import '../../../public/front/assets/css/bootstrap.min.css'
// import '../../../public/front/assets/css/charts.min.css'
import '../../../public/front/assets/css/plugins.css'
import '../../../public/front/assets/css/style.css'
import { baseUrl } from "@/Http/helper";
import Script from "next/script";
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
      title: 'Sellora.com',
      description: 'Sellora.com',
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
      <head>
      {/* <link rel='stylesheet' href={`${baseUrl}front/assets/css/plugins.css`} />
      <link rel='stylesheet' href={`${baseUrl}front/assets/css/style.css`} /> */}
      </head>
      <body  className="index-five">
        
        <HeaderFirst />
        <HeaderSecond />
        <div className="loaderouter"><div className="loader"></div></div>
            {children}
        <Footer />
        {/* <Script src={`${baseUrl}front/assets/js/jquery.min.js`} />
        <Script src={`${baseUrl}front/assets/js/main.js`} />
        <Script src={`${baseUrl}front/assets/js/plugins.js`} /> */}
      </body>
    </html>
  );
}
