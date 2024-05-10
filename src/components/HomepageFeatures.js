import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const HeroFeatureList = []

const FeatureList = [
  {
    title: 'What is AgentFi?',
    link: 'docs/overview/what-is-agentfi',
    description: (
      <>
        What is AgentFi and its role in decentralized finance ecosystems?
      </>
    ),
  },
  {
    title: 'Protocol Architecture',
    link: 'docs/dev-docs/architecture/overview',
    description: (
      <>
        Read about the protocol's design, components, and other features.
      </>
    ),
  },
  {
    title: 'User Guides',
    link: 'docs/user-guides/intro',
    description: (
      <>
        Dive deeper into the ways of using AgentFi.
      </>
    ),
  },
  {
    title: 'Developer Docs',
    link: 'docs/dev-docs/intro',
    description: (
      <>
        Documentation about the codebase and smart contracts.
      </>
    ),
  },
];

function HeroFeature({title, link, description}) {
  return (
      <Link to={link} style={{ textDecoration: 'none' }}>
      <div className={styles.hero__feature}>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.hero__feature__title}>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      </Link>
  );
}

function Feature({title, link, description}) {
  return (
      <Link to={link} style={{ textDecoration: 'none' }}>
      <div className={styles.feature}>
        <div className="text--center padding-horiz--md">
          <h4 className={styles.feature__title}>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/*
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {HeroFeatureList.map((props, idx) => (
              <div className={clsx('col col--6')}>
                <HeroFeature key={idx} {...props} />
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <span style={{width:"100%",textAlign:"center"}}>These docs are intended for developers and can get highly technical.</span>
            <span style={{width:"100%",textAlign:"center"}}>We suggest first time users to check some of our other resources for an intro to AgentFi before continuing here.</span>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <div className={clsx('col col--3')}>
                <Feature key={idx} {...props} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
