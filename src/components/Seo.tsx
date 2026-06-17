const SITE_URL = 'https://www.hikmahglobaladvisory.com';
const SITE_NAME = 'Hikmah Global Advisory LLP';
const OG_IMAGE = `${SITE_URL}/logo.png`;

interface SeoProps {
  /** Page title without the brand suffix, e.g. "Our Services" */
  title: string;
  description: string;
  /** Route path including leading slash, e.g. "/services". Use "/" for home. */
  path: string;
}

/**
 * Renders per-page SEO metadata. React 19 automatically hoists <title> and
 * <meta> tags rendered anywhere in the tree up into <head>, so dropping this
 * component at the top of a page gives that page a unique title/description.
 */
export default function Seo({ title, description, path }: SeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path === '/' ? '/' : path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}
