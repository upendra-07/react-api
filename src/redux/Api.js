import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

const Api = () =>{

    const data = useSelector((state) => state.data)
    const dispatch = useDispatch()

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
               console.log(json,"rr");
               dispatch({type:'Fetch_Data',data:json});
            })
    }
 console.log(data);
    return(
        <div>
            <button onClick={fetchData}>Show Data</button>

            <div className='main'>
                {data.map((arg) => (
                <div className='card-design'>
                    <h3>User {arg.id}</h3>
                    <p>Name:{arg.name}</p>
                    <p>Email:{arg.email}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Api;