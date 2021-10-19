import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleServices = () => {
    const { id } = useParams();
    const [singleServices, setSingleServices] = useState([]);



    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setSingleServices(data))
    }
        , []);

    useEffect(() => {
        const findService = singleServices?.filter((singleService) => singleService?.id === id);
        const perService = findService[0]
        console.log(perService)
    }, [id])




    return (
        <div>
            {/* <h3>{perService.title}</h3> */}
            <h2>{id}</h2>
        </div>
    );
};

export default SingleServices;