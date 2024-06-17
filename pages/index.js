import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import countries from '../lib/countries'

export const getServerSideProps = ({ query }) => ({
  props: query,
})

export default function Home({ country }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guy</title>
        <meta
          name="description"
          content="Hello Guy"
        />
      </Head>
      <h1>Hello Guy</h1>
    </div>
  )
}

