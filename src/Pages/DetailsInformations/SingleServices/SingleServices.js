import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import './SingleServices.css'

const SingleServices = () => {
    const { id } = useParams();
    const [singleServices, setSingleServices] = useState([]);



    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setSingleServices(data))
    }
        , []);



    const findService = singleServices?.filter((singleService) => (singleService.id) == (id));
    // const perService = findService[0]
    // console.log(typeof(id))
    console.log(findService)





    return (
        <div >
            <Card className='container my-5'>
                <Card.Img variant="top" src={findService[0]?.img} />
                <Card.Text>
                    <h1 className='title'>{findService[0]?.title}</h1>
                </Card.Text>
                <Card.Body className='text-start mt-3 mb-5 p-5'>

                    <Card.Text>
                        {findService[0]?.help}
                    </Card.Text>
                    <Card.Text>
                        <h4> {findService[0]?.helpTitle}
                        </h4>
                    </Card.Text>
                    <Card.Text>
                        <p> {findService[0]?.description}
                        </p>
                    </Card.Text>
                    <Card.Text>
                        <h4>Package Charge :  $ {findService[0]?.charge}
                        </h4>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SingleServices;