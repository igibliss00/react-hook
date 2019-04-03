import { useState, useEffect } from 'react';
import axios from 'axios';

// reusable function with one input(resource) and one output(resources)
// not a React component, therefore importing react not required 
const useResources = resource => {
    const [resources, setResource] = useState([]);
    const fetchResource = async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResource(response.data);
    }
    
    // useEffect cannot directly call promise/async. Has to be defined in the second function. 
    useEffect(() => {
        fetchResource(resource) 
    }, [resource]);


    return resources;
}

export default useResources;