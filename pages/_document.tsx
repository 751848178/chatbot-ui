import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Chatbot UI"></meta>
        {/* <script charSet="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
        <script dangerouslySetInnerHTML={{__html: `LA.init({id:"K4ErbxGT8UXakPaV",ck:"K4ErbxGT8UXakPaV",autoTrack:true,hashMode:true})` }}/> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `
          !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"K4ErbxGT8UXakPaV",ck:"K4ErbxGT8UXakPaV",autoTrack:true,hashMode:true});
        ` }}/> */}
        <script
          charSet="UTF-8"
          id="LA_COLLECT"
          src="//sdk.51.la/js-sdk-pro.min.js?id=K4ErbxGT8UXakPaV&ck=K4ErbxGT8UXakPaV&autoTrack=true&hashMode=true"
          async
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
