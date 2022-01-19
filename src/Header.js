
const Header = (props) => {

    
    
    return (
        <header className="header-container">
            <div className='wrapper' >
                <h1>Cryptocurrency Search </h1>
                <form onSubmit={props.handleSubmit}>
                    <label htmlFor="search" className='sr-only'> Search for bit:  </label>
                    <input type="text" id="search" onChange={props.handleInput} value={props.userInput} />
                    <button> Search </button>
                </form>
            </div>
        </header>
    )
}

export default Header