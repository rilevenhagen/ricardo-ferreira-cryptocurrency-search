// crypto news DISPLAY

const CryptoNews = (props) => {
    return (
        <div className="wrapper">
            <div className="title wrapper">
                <h3>⬇️ cryptocurrency news.⬇️</h3>
            </div>
            {props.cryptNews.map((cryptNewsDisplay) => {
                return (
                    <div>
                        <div className="h3-img" key={cryptNewsDisplay.dateLong}>
                            <h3>{cryptNewsDisplay.summary}</h3>
                            <img className="img-news" src={cryptNewsDisplay.image} alt={cryptNewsDisplay.title} />
                        </div>

                    </div>

                )
            })

            }
        </div>
    )
}
export default CryptoNews