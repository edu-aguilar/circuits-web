import Script from "next/script";

export const AdSense = ({ pid }: { pid: string }) => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${pid}`}
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  );
};
