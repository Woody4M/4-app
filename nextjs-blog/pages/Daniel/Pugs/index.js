import Head from 'next/head';
import Navbar from '../comps/Navbar'
import Footer from'../comps/Footer'
import styles from '../style/Home.module.css'

export default function Home() {
  return (
    <>
      <head>
      <title>Pugs List </title>
        <meta name="Keywords" content="pugs"/>
      </head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}> This is my homepage and I would like to let you know this website is about how to get to know me.My life has been nothing but test on ewveryday how to be good man for the world and for myself.I wake up with good attitude and always go to work for my stuff.</p>
      <link href="/pugs">
      <a className={styles.btn}> See Pugs Listing</a>
      </link>
    </div>
    )
}
