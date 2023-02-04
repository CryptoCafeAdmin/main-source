import Container from 'app/components/Container'
import Head from 'next/head'

export default function Dashboard() {
  return (
    <Container id="dashboard-page" className="py-4 mx-auto md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Dashboard | Crypto Cafe</title>
        <meta name="description" content="Crypto Cafe" />
        <meta key="twitter:description" name="twitter:description" content="Crypto Cafe" />
        <meta key="og:description" property="og:description" content="Crypto Cafe" />
      </Head>
    </Container>
  )
}
