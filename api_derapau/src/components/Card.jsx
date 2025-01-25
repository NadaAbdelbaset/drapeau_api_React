import "../styles/components/_card.scss"


const Card = (props) => {
    const {country} = props;
    const numberFormat =(x) =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " " )
    }
    return (
        <ul>
            <li className="card">
                <img src={country.flag} alt="flag" />
                <div className="data_container">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.capital}</li>
                        <li> pop : {numberFormat(country.population)}</li>
                    </ul>
                </div>
            </li>
        </ul>
    );
};

export default Card;