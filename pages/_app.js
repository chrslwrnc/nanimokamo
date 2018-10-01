import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Layout from '../src/components/Layout';
import { theme } from '../src/theme';
import { createScripts } from '../src/analytics';
import { header, meta } from '../src/data';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      data: {
        header,
        meta,
      },
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, data } = this.props;

    return (
      <Container>
        <Head>
          <html lang="en" />
          <title>{data.meta.siteName}</title>
          <meta name="description" content={data.meta.seoDescription} />
          <meta name="keywords" content={data.meta.seoKeywords.join(', ')} />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          {createScripts(data.meta.gaId)}
        </Head>

        <ThemeProvider theme={theme}>
          <Layout header={data.header}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}
