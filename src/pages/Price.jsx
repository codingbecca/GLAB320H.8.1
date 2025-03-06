import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Price() {
    const apiKey = import.meta.env.VITE_COIN_API_KEY;

    const params = useParams();
    const symbol = params.symbol;

    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    const [coin, setCoin] = useState(null);

    const getCoin = async () => {
        try {
           const res = await fetch(url);
           const data = await res.json();
           setCoin(data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getCoin();
    }, [])

    const loaded = () => {
        return(
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        )

    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return coin && coin.rate ? loaded(): loading()
}