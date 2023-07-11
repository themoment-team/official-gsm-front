interface SEOHelmetProps {
  title: string;
  description: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({ title, description }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    title: title,
    name: title,
    description,
  };
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SEOHelmet;
