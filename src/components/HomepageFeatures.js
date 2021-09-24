import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Leadership',
    Svg: require('../../static/img/undraw_professor_8lrt.svg').default,
    description: (
      <>
        Hiring -- Managing -- Sprint planning -- Style guides -- Content review
      </>
    ),
  },
  {
    title: 'Technical writing',
    Svg: require('../../static/img/undraw_Designer_by46.svg').default,
    description: (
      <>
        Content planning/strategy -- DITA -- Copyediting -- Markup syntaxes -- Docs-as-code
      </>
    ),
  },
  {
    title: 'Devops',
    Svg: require('../../static/img/undraw_programming_2svr.svg').default,
    description: (
      <>
        Git, CI (travis) -- Javascript, Node.js, Nginx -- Kubernetes
      </>
    ),
  },
  {
    title: 'Web development',
    Svg: require('../../static/img/undraw_static_website_0107.svg').default,
    description: (
      <>
        Static site generators -- Documentation automation -- React
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
