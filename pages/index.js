import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [btcPrice, setBtcPrice] = useState(0)

    useEffect(() => {
        getBitcoinPrice()
    }, [])

    const getBitcoinPrice = async () => {
        const res = await fetch('/api/current-price')
        const data = await res.json()
        const btcPriceRounded = Math.round(data.rate)

        setBtcPrice(btcPriceRounded)
        setLoading(false)
    }

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
                        {!loading ? `$${btcPrice}` : '...'}
                    </h1>
                </div>
            </main>
        </div>
    )
}
