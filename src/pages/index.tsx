import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Actions() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="main-page">
      <div className="container main-page-cnt">
        <div className="action-btn">
          <Link
            to="/docs/whitepaper/intro"
          >
            <div className="title">
              Whitepaper
            </div>
            <div className="description">
              Learn more about the project
            </div>

            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.53033 5.53033C1.23744 5.82322 0.762563 5.82322 0.46967 5.53033C0.176777 5.23744 0.176777 4.76256 0.46967 4.46967L4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.53033 4.46967C9.82322 4.76256 9.82322 5.23744 9.53033 5.53033C9.23744 5.82322 8.76256 5.82322 8.46967 5.53033L5.75 2.81066L5.75 12.5C5.75 12.9142 5.41421 13.25 5 13.25C4.58579 13.25 4.25 12.9142 4.25 12.5L4.25 2.81066L1.53033 5.53033Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
        <div className="action-btn">
          <Link
            to="/docs/tutorials/intro"
          >
            <div className="title">
              Tutorials
            </div>
            <div className="description">
              Learn more about the project
            </div>

            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.53033 5.53033C1.23744 5.82322 0.762563 5.82322 0.46967 5.53033C0.176777 5.23744 0.176777 4.76256 0.46967 4.46967L4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.53033 4.46967C9.82322 4.76256 9.82322 5.23744 9.53033 5.53033C9.23744 5.82322 8.76256 5.82322 8.46967 5.53033L5.75 2.81066L5.75 12.5C5.75 12.9142 5.41421 13.25 5 13.25C4.58579 13.25 4.25 12.9142 4.25 12.5L4.25 2.81066L1.53033 5.53033Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
        <div className="action-btn">
          <Link
            to="/docs/api/intro"
          >
            <div className="title">
              API
            </div>
            <div className="description">
              Learn more about the project
            </div>

            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.53033 5.53033C1.23744 5.82322 0.762563 5.82322 0.46967 5.53033C0.176777 5.23744 0.176777 4.76256 0.46967 4.46967L4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.53033 4.46967C9.82322 4.76256 9.82322 5.23744 9.53033 5.53033C9.23744 5.82322 8.76256 5.82322 8.46967 5.53033L5.75 2.81066L5.75 12.5C5.75 12.9142 5.41421 13.25 5 13.25C4.58579 13.25 4.25 12.9142 4.25 12.5L4.25 2.81066L1.53033 5.53033Z" fill="currentColor"/>
            </svg>


          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Forget about blockchain complexity">
      <Actions />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
