import type { AppProps } from "next/app";
import { PageLayout } from "../components/layout/PageLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Page Layout surrounding the app, to have the header and footer in all the pages
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
export default MyApp;
