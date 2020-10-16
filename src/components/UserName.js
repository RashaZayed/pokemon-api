import React, {useEffect, useState} from'react';

const GetUsersNames = props => {
    const [user, setUser]= useState([]);
    const [submitted , setSubmitted] = useState(false);

    useEffect( ()=>{
        console.log(submitted);
        if (submitted){
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setUser(response.results) )
        }

    } , [submitted]);

    const display = user.map((item,i) =>{
         return (
            <div key={i}>{item.name}</div> 
             )
    });
    const onClick = e => {
        e.preventDefault();
        setSubmitted(true);
    }





    return (
        <form >
            <button onClick={onClick}>Fetch Pokemon</button>
            {display}
        </form>

    )
}
export default GetUsersNames ;