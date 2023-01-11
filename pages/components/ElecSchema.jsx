export function ElecSchema() {
  const areaServedData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Climatisation Hauts de France',
    description:
      'Nous sommes basé à Wambrechies, nous nous deplaçons dans un rayon de 30km pour venir vous assister',
    openingHours: 'Mo-Sa',
    telephone: '+666735801',
    email: 'contact@gk-bat.com',
    image: 'https://seonorth.ca/wp-content/uploads/2020/11/seo-north-logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9, rue Lamartine',
      addressLocality: 'Wambrechies',
      postalCode: '59118',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 50.687949,
        longitude: 3.040141,
      },
      geoRadius: 30000,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      bestRating: 100,
      worstRating: 0,
      ratingValue: 88,
      reviewCount: 122,
    },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(areaServedData)}</script>
  );
}
