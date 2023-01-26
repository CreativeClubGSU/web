import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import Head from '@docusaurus/Head'
import logo from '../../static/img/logo.png'
import Typewriter from 'typewriter-effect';

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
          Creative Club  GSU
        </h1>
        <p className={styles.leftContainer_p}> 
          <div className={styles.motto}>Creativity, A Remedy For Humanity <br/>
          <br/>
          </div>
        <div className={styles.logo}>
        <img src={logo} alt='logo' />
        </div> 
          <Typewriter
            options={{
              strings: ['in the medium of orienting the public for the betterment of our society.' ],
              autoStart: true,
              loop: true,
            }}
          /> 
        </p>
        
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
        <HomepageFeatures />
      </main>
    </Layout>
  )
}