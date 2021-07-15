import React, {useState} from 'react';
import Axios from 'axios';

function PostForm(props) {
    const url = 'http://localhost:3003/users/create';
    const [data, setData] = useState({
        name: " ",
        imgURL: " ",
        hobby: " "
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            content: data.content,
            image: data.image
        })
        .then(res=> {
            console.log(res.data)
        })

    }

    function handleChange(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
    return (
        <div>
        <form onSubmit= {(e) => submit(e)}>
        <input onChange= {(e) => handleChange(e)} id="name" value={data.name} placeholder="name" type="text"></input>
        <input onChange= {(e) => handleChange(e)} id="content" value={data.content} placeholder="content" type="text"></input>
        <input onChange= {(e) => handleChange(e)} id="image" value={data.image} placeholder="image" type="text"></input>
        <button>Add Card</button>
        </form>
        </div>
    )
}

export default PostForm;