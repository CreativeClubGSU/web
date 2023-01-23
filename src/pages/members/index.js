import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../../components/HomepageFeatures'
import Head from '@docusaurus/Head'
import HeroImg from '../../../static/img/Hero1.png'
import Typewriter from 'typewriter-effect';

const svgList = [
  {
    title: 'facebook',
    Svg: require('../../../static/img/facebook.svg').default,
    link: 'https://web.facebook.com/groups/770686350483139/?mibextid=HsNCOg',
  },
  {
    title: 'twitter',
    Svg: require('../../../static/img/twitter.svg').default,
    color: '#2979ff',
     link: 'https://web.facebook.com/groups/770686350483139/?mibextid=HsNCOg',
    },
]
const Svg = ({ Svg, color, title, link }) => {
  return (
    <a href={link} target='_blank'>
      <Svg className={styles.svg} style={{ fill: color }} />
    </a>
  )
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--secondary button--lg' to='/docs/intro'>
            Learn 
          </Link>
        </div>
      </div>
    </header>
  )
}

function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
       <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          C C Club.
        </h1>
        <p className={styles.leftContainer_p}>
          Creativity A Remedy For Humanity 
        </p>
        <Typewriter
            options={{
              strings: ['platform where creative minds can exhibit their creativity and talents', 'people discover and lend their creative voices, reawaken the souls of the imaginative minds with the sole aim of promoting artistic and humanistic values', 'in the medium of orienting the public for the betterment of our society.' ],
              autoStart: true,
              loop: true,
            }}
          /> 
        {/* <div className={styles.mottoContainer}> 
             
             

        
          <button className={styles.motto}>
            <a className={styles.hero_a}>
            <span className={styles.mottoLeftText}>
            Get Started. <br /> 
          </span>
            </a>
          </button>

          <div className={styles.typer}>
          
          </div>
        </div> */}
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt='HeroImg' />
      </div>

    </div>
  )
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title='Home'
      description='Creativity Remedy for Humanity'>
      {/* <HomepageHeader /> */}
      <Head>
      </Head>
      <main>
        <MyHero />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  )
}