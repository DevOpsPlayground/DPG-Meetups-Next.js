import Layout from "/components/layout/layout";
import Head from "next/head";
import "../styles/globals.css";


function App({ Component, pageProps }) {
  return (
    <Layout className="App">
      <Head>
        <title>Next.js App</title>
        <meta name='description' content='Devops Playground Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
