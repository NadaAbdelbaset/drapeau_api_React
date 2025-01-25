import { useEffect, useState } from "react";
import axios from "axios";

import Article from "../components/Article";
import Navigation from "../components/Navigation";

//rsc
const News = () => {
    const[ newData, setNewData ] = useState();
    const [author, setAuthor ] = useState("");
    const [content, setContent ] = useState("");

    const getData = () => {
        axios
        .get("http://localhost:3001/articles")
        .then( (res) => setNewData(res.data) )
    }

    //console.log(newData);

    useEffect(() => {
        getData();
    }, [] )

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/articles", {
            author,
            content,
            date: new Date()
        } )
        .then( () => {
            setAuthor,
            setContent,
            getData()
        } )
    }

    return (
        <div className="news-container">
            <Navigation />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nom" value={author} onChange={ (e) => setAuthor(e.target.value) } />
                <textarea placeholder="Message" value={content} onChange={ (e) => setContent(e.target.value) } />
                <input type="submit" value="Send" />
            </form>

            <ul>
                {newData && newData.map((article) => (
                    <Article key = {article.id} article ={article} />
                ))}
            </ul>

        </div>
    );
};

export default News;
