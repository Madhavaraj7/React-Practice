import profilepic from './assets/bro.jpg'

function Card() {
    return(
        <div className="card">
            <img className = "card-img" src={profilepic} alt="profile"></img>
            <h2 className='card-title'>Brototype</h2>
            <p>Self learning</p>
        </div>
    )
}


export default Card;