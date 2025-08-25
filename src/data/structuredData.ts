export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BOXSAM Technologies Private Limited",
  "alternateName": "BOXSAM Technologies",
  "description": "Digital marketing and technology solutions company specializing in SEO, PPC, social media marketing, and web development for Delhi NCR businesses.",
  "url": "https://www.boxsam.in",
  "logo": "https://www.boxsam.in/image.png",
  "foundingDate": "2017-12-15",
  "founders": [
    {
      "@type": "Person",
      "name": "Shubham Verma",
      "jobTitle": "Chief Executive Officer & Founder"
    }
  ],
  "employees": [
    {
      "@type": "Person",
      "name": "Ashish Lal",
      "jobTitle": "Chief Operational Officer"
    },
    {
      "@type": "Person",
      "name": "Priya Srivastava",
      "jobTitle": "Digital Marketing Manager"
    },
    {
      "@type": "Person",
      "name": "Vinayak Shukla",
      "jobTitle": "Software Developer"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "E-31A, First Floor, Jawahar Park",
    "addressLocality": "Laxmi Nagar",
    "addressRegion": "New Delhi",
    "postalCode": "110092",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9616683869",
    "contactType": "customer service",
    "email": "info@boxsam.com",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.instagram.com/boxsam_india",
    "https://www.linkedin.com/company/boxsam-technologies"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 28.6139,
      "longitude": 77.2090
    },
    "geoRadius": "50000"
  },
  "areaServed": [
    "Delhi",
    "Noida",
    "Gurgaon",
    "Ghaziabad",
    "Delhi NCR"
  ],
  "knowsAbout": [
    "Digital Marketing",
    "Search Engine Optimization",
    "Pay Per Click Advertising",
    "Social Media Marketing",
    "Web Development",
    "Mobile App Development",
    "E-commerce Development"
  ]
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BOXSAM Technologies Private Limited",
  "image": "https://www.boxsam.in/image.png",
  "description": "Leading digital marketing agency in Delhi NCR providing SEO, PPC, social media marketing, and web development services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "E-31A, First Floor, Jawahar Park",
    "addressLocality": "Laxmi Nagar",
    "addressRegion": "New Delhi",
    "postalCode": "110092",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6139,
    "longitude": 77.2090
  },
  "telephone": "+91-9616683869",
  "email": "info@boxsam.com",
  "url": "https://www.boxsam.in",
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "INR"
};

export const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Marketing Services",
  "description": "Comprehensive digital marketing solutions including SEO, PPC, social media marketing, content marketing, and web development.",
  "provider": {
    "@type": "Organization",
    "name": "BOXSAM Technologies Private Limited"
  },
  "areaServed": "Delhi NCR",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Search Engine Optimization (SEO)",
          "description": "Improve your website's visibility in search engines with our proven SEO strategies."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pay-Per-Click (PPC) Management",
          "description": "Drive targeted traffic with expertly managed PPC campaigns across Google Ads and social platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "description": "Build your brand presence and engage your audience across all major social media platforms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom website development with responsive design and optimal user experience."
        }
      }
    ]
  }
};