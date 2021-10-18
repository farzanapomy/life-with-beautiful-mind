import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleServices = () => {
    const { id } = useParams();
    const [singleServices, setSingleServices] = useState([]);



    useEffect(() => {
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setSingleServices(data)) 
    }
    , [])
    const perService = singleServices.filter(singleService => singleService.id === id)
            console.log(perService)
   



return (
    <div>

    <h4>{perService[0]?.title}</h4>
        <h2>{id}</h2>
    </div>
);
};

export default SingleServices;