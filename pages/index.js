import Head from 'next/head'

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/current-price')
    const data = await res.json()
    const btcPriceRounded = Math.round(data.rate)

    return {
        props: { btcPrice: btcPriceRounded },
    }
}

export default function Home({ btcPrice }) {
    return (
        <div>
            <Head>
                <title>Becoiner</title>
                <meta name="description" content="Track Bitcoin Price" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-gradient-to-br from-orange-500 to-yellow-300">
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-900">
                        {/* {btcPrice ? `$${btcPrice}` : '...'} */}
                        {btcPrice}
                    </h1>
                </div>
            </main>
        </div>
    )
}
