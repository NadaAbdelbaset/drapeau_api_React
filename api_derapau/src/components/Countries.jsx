import Card from "./card";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/components/_countries.scss"

const Countries = (props) => {

    // useState permet de modifier l'état d'unedonnée
    const [data , setData] = useState([]); // On récupere les donnée dans un tableau
    const [sortData, setSortData] = useState([]); // Permet de trie des données


    // Permet de stopper la requette (une seule fois)
    useEffect( () => {
        // Permet de faire une requette en get vers l'API
        console.log(axios.get(
            "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
        )
        .then((res) => setData(res.data))
    );


    }, [])
    console.log(data);
    

    return (
        <div className="countries_liste">
            { data.map( (country) => <Card country={country} key={country.name} /> )}
        </div>
    );
};

export default Countries;