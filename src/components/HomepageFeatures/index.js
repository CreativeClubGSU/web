import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: ' Humility and Dedication',
    Svg: require('@site/static/img/collaborators.svg').default,
    description: (
      <>
        The Creative Club Gombe State University (CC GSU) where creativity, humility and dedication come together to reawaken the souls of imaginative minds and better society. Connect, collaborate and grow with like-minded individuals
      </>
    ),
  },
  {
    title: 'Sacrifice and Accountability',
    Svg: require('@site/static/img/making_art.svg').default,
    description: (
      <>
         CC GSU encourages sacrifice and accountability as a core values, the Club's mission to promote artistic and humanistic values within the community, members are encouraged to be willing to make sacrifices and take responsibility for their actions.
      </>
    ),
  },
  {
    title: 'Integrity, Inclusivity and Innovation',
    Svg: require('@site/static/img/team_collaboration.svg').default,
    description: (
      <>
       The CC GSU emphasizes integrity, inclusivity and innovation, promoting an inclusive environment and encouraging innovation. to come up with new ideas and approach to create a better society. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
        <div className={styles.values}> Core values </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
