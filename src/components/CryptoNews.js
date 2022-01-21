// crypto news

const CryptoNews = (props) => {
    return(
        <div className="wrapper">
            {props.cryptNews.map((cryptNewsDisplay) => {
                console.log(cryptNewsDisplay)
                return (
                    <div className="h3-img" key={cryptNewsDisplay.dateLong}>
                        <h3>{cryptNewsDisplay.summary}</h3>
                        <img src={cryptNewsDisplay.image} alt={cryptNewsDisplay.title} />
                    </div>
                )
            })

            }
        </div>
    )
}
export default CryptoNews