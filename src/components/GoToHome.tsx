import { Link } from 'react-router-dom'

const GoToHome = () => {
    return (
        <div className="container">
            <div className="block">
                <Link to="/">
                    <button className="button is-primary">Go To Home</button>
                </Link>
            </div>
        </div>
    )
}

export default GoToHome
