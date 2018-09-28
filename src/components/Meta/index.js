import React from 'react';
import Head from 'next/head';
import { withConfig } from '../ConfigProvider';

export default withConfig(({ title, config }) => (
  <Head>
    {title && (
      <title>
        {title} – {config.meta.siteName}
      </title>
    )}
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
  </Head>
));
