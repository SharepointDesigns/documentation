import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  // buttonLabel: string;
  buttonLink: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Design 1',
    imageUrl: 'https://cdn.prod.website-files.com/624fdbbf2da9f429057410bc/685cd98b18ba7446f63df947_Design%20-%201.avif',
    // buttonLabel: 'Get Started',
    buttonLink: 'http://localhost:3000/documentation/docs/design-1/overview',
  },
  {
    title: 'Design 2',
    imageUrl: 'https://cdn.prod.website-files.com/624fdbbf2da9f429057410bc/686f5ab8c3819215008d1cf1_Design%20-%202.avif',
    // buttonLabel: 'Customize',
    buttonLink: 'http://localhost:3000/documentation/docs/design-2/overview',
  },
  {
    title: 'Design 4',
    imageUrl: 'https://cdn.prod.website-files.com/624fdbbf2da9f429057410bc/685cd989e9bc30b23e26e737_Design%20-%204.avif',
    // buttonLabel: 'View Docs',
    buttonLink: 'http://localhost:3000/documentation/docs/design-4/overview',
  },
  {
    title: 'Design 5',
    imageUrl: 'https://cdn.prod.website-files.com/624fdbbf2da9f429057410bc/685cd98a82265059400a7626_Design%20-%205.avif',
    // buttonLabel: 'View Docs',
    buttonLink: 'http://localhost:3000/documentation/docs/design-5/overview',
  }
];

function Feature({ title, imageUrl, buttonLink }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureBox)}>
      <div className={ clsx("text--center", styles.contentContainer)} >
        <img src={imageUrl} alt={title} className={styles.featureImage} />
        {/* <h3>{title}</h3> */}
        <a className={clsx("button button--primary", styles.redirectButton)} href={buttonLink}>
          {title}
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div
       className="container"
      >
        <div 
        className="row"
        >
          {FeatureList.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}