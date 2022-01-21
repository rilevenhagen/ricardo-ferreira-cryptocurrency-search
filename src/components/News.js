// News display

const News = (props) => {
console.log(props)
    return (
        <div>
            <div>
                {props.news.map((displayNew, index) => {
                    return (
                        <div key={index} className='wrapper txr-b'>
                            <h3><span>NEWS:</span> {displayNew.title}</h3>
                            <a className="newa-a" href={displayNew.url} target="_blank" rel="noreferrer" > Read More </a>
                        </div>
                    )
                })
                }
            </div>
            <div>
                {props.news2.map((displayNew, index) => {
                    return (
                        <div key={index} className='wrapper txr-b'>
                            <h3><span>NEWS:</span>{displayNew.title}</h3>
                            <a className="newa-a" href={displayNew.url} target="_blank" rel="noreferrer" > Read More </a>
                        </div>
                    )
                })
                }
            </div>
            <div>
                {props.news3.map((displayNew, index) => {
                    return (
                        <div key={index} className='wrapper txr-b'>
                            <h3><span>NEWS:</span>{displayNew.title}</h3>
                            <a className="newa-a" href={displayNew.url} target="_blank" rel="noreferrer" > Read More </a>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default News