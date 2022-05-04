// bit coin display

const Bitcoin = (pronps) => {
    return (
        <div>
            {pronps.bitcoin.map((bit) => {
                return (
                    <div className='bit-display' key={bit.id}>
                        <h2>Name of the Coin: {bit.name}</h2>
                        <h2>Current Price: ${bit.current_price}</h2>
                        <h2>Market Cap: {bit.market_cap}</h2>
                        <h2>Symbol: {bit.symbol}</h2>
                        <img src={bit.image} alt={bit.name} />
                    </div>
                )
            })}
        </div>
    )
}

export default Bitcoin