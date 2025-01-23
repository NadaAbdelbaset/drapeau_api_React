import "../styles/components/_card.scss"


const Card = (props) => {
    const {country} = props;
    return (
        <ul>
            <li className="card">
                <img src={country.flag} alt="flag" />
                <div className="data_container">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.capital}</li>
                        <li> pop : {country.population}</li>
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export default Card;