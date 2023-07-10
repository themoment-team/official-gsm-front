import Head from 'next/head';

interface SEOHelmetProps {
  title: string;
  description: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
  </Head>
);

export default SEOHelmet;
