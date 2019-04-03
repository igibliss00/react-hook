import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = _ => {
    const [resource, setResource] = useState('posts');
    return (
        <div className="ui container">
            <div>
                <button className='ui inverted primary button' onClick={() => setResource('posts')}>Post</button>
                <button className='ui inverted secondary button' onClick={() => setResource('todos')}>Todos</button>
                <button className='ui inverted orange button' onClick={() => setResource('photos')}>Photos</button>
                <button className='ui inverted yellow button' onClick={() => setResource('albums')}>Albums</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    )
    
};

export default App;