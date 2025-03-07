import type { ReactNode } from 'react';

import '../styles.css';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

const code = `
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-35FY2D61LB');
`;

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="overflow-hidden font-['Nunito'] has-[#sp-menu[data-expanded='true']]:overflow-hidden">
      <script>{code}</script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-35FY2D61LB"
      ></script>
      <Header />
      <main className="m-6 flex justify-center *:min-h-64 *:min-w-64 lg:my-0 lg:min-h-svh lg:pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
