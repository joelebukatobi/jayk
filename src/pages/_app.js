import Head from 'next/head';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JayK Academy</title>
        <meta
          name="description"
          content="Jayk Academy is a private research Consultancy firm that specializes in academic research writing and has other subsidiaries which help promote vocational and skill acquisition training."
        />
        <meta property="og:title" content="Jayk Academy" />
        <meta
          property="og:description"
          content="Jayk Academy is a private research Consultancy firm that specializes in academic research writing and has other subsidiaries which help promote vocational and skill acquisition training."
        />
        <meta property="og:url" content="https://jaykacademy.com" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="research, thesis, paper, dissertation, writing, publication, editing, proof reading, academic research, academic research training, academic research consultation, hire a writer, project writing, thesis research analysis, dissertation research analysis, professional research, research analysis, skills acquisition, research requirements, research paper, research topic, graduate topic, graduate paper, graduate dissertation, graduate thesis, phd topics, phd thesis, phd coursework, phd dissertation, phd research, phd paper, phd course work, seminar project, seminar paper, project paper, project coursework"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
