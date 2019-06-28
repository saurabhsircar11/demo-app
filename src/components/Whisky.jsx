import React from 'react';

const Whisky = ({ whisky }) => (
    <div>
        <img src={whisky.imageUrl} alt="whisky" style={{ width: '300px', height: '300px' }} />
        <h3>{whisky.title}</h3>
    </div>
)

export default Whisky;