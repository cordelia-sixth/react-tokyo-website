const code = `
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-35FY2D61LB');
`;

export const GoogleAnalytics = () => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-35FY2D61LB"
      ></script>
      <script>{code}</script>
    </>
  );
};
