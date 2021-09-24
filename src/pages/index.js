import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HideEmail from '../components/HideEmail';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <Avatar /> */}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/resume">
            View my resume
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/sample-works">
            See sample works
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="https://www.linkedin.com/in/nwilson512">
            Find me on LinkedIn
          </Link>
          <HideEmail />
        </div>
      </div>
    </header>
  );
}

function Avatar() {
  return(
    <div class="avatar avatar--vertical">
    <img
      class="avatar__photo avatar__photo--xl margin-bottom--lg"
      src="/img/headshot.jpeg"
    />
    {/* <div class="avatar__intro">
      <div class="avatar__name">Jordan Walke</div>
      <small class="avatar__subtitle">
        Maker of things: ReactJS. Working on:
        <a href="https://twitter.com/reasonml">@reasonml</a>. At: Facebook
        Engineering.
      </small>
    </div> */}
  </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Techwriting.io`}
      description="Personal site for Nathaniel Wilson, an experienced software technical writer and team lead.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
