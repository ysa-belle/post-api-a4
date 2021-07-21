import React, {useState} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router";
import { Link, withRouter } from "react-router-dom";

function PostForm(props) {
    const url = 'http://localhost:3003/users/create';
    const [data, setData] = useState({
        name: " ",
        content: " ",
        image: " "
    })

    const history = useHistory();

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            content: data.content,
            image: data.image
        })
        .then(res=> {
            console.log(res.data)
            history.push({
                pathname: '/cards',
                state: {
                    res: messageFromServer
                }
            })
        })

    }

    function handleChange(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }


    return (
        (<div>
        <form onSubmit= {(e) => submit(e)}>
        <input onChange= {(e) => handleChange(e)} id="name" value={data.name} placeholder="name" type="text"></input>
        <input onChange= {(e) => handleChange(e)} id="content" value={data.content} placeholder="content" type="text"></input>
        <input onChange= {(e) => handleChange(e)} id="image" value={data.image} placeholder="image" type="text"></input>
        
        <button>Add Card</button>
        </form>
        <Link to = "/cards"> Click to Add Card </Link>
        </div>
    ))
}

export default PostForm;