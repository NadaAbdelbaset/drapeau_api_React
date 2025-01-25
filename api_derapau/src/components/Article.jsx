//import axios from "axios";

import { useState } from "react";
import axios from "axios";

const Article = ({article}) => {
    const [isEditing , setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");


    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date
        }

        axios
        .put("http://localhost:3001/articles" + article.id, data)
        .then(() => setIsEditing(false) )
    }


    return (
        <div className="article">
            <div className="card_header">

                <p>{article.author}</p>
                <em>Posté le : {article.date} </em>
            </div>

            { isEditing ? (
                <textarea
                    autoFocus
                    defaultValue={editContent ? editContent : article.content}
                    onChange={ (e) => setEditContent(e.target.value) }>
                </textarea>
                )
                : <p> {editContent ? editContent : article.content} </p>
            }

            <div className="btn-container">
                {isEditing ? (
                    <button onClick={handleEdit}> Valider </button>
                ) : <button onClick={ () => setIsEditing(true) }> Edit </button>

                }
            </div>

        </div>
    );
};

export default Article ;