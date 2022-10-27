// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const options = {
        method: 'GET',
        headers: {
            'X-CoinAPI-Key': process.env.COINAPI_API_KEY,
        },
    }
    try {
        fetch(`https://rest.coinapi.io/v1/exchangerate/BTC/USD`, options)
            .then((response) => response.json())
            .then((data) => res.status(200).json(data))
    } catch (err) {
        res.status(500).json(err)
    }
}
