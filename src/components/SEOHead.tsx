import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "BOXSAM Technologies - Dream Create Inspire | Digital Marketing Delhi NCR",
  description = "BOXSAM Technologies Private Limited - Turning clicks into clients since 2017. Expert digital marketing and technology solutions for Delhi NCR businesses. SEO, PPC, Social Media, Web Development.",
  keywords = "digital marketing Delhi NCR, SEO services Delhi, PPC management, social media marketing, web development, BOXSAM Technologies, digital marketing agency, Delhi digital marketing, Noida digital marketing, Gurgaon digital marketing",
  canonicalUrl = "https://boxsam-technologies.com",
  ogImage = "/image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('author', 'BOXSAM Technologies Private Limited');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'BOXSAM Technologies', true);
    updateMetaTag('og:locale', 'en_IN', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Business-specific meta tags
    updateMetaTag('geo.region', 'IN-DL');
    updateMetaTag('geo.placename', 'Delhi NCR');
    updateMetaTag('geo.position', '28.6139;77.2090');
    updateMetaTag('ICBM', '28.6139, 77.2090');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, structuredData]);

  return null;
};

export default SEOHead;