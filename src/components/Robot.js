import React from 'react';

const Robot = ({id,nameRobot, mailRobot}) => {
    return (
        <div className='card-robot'>
            <img src={"https://robohash.org/"+(id+1)+''+id} alt="robot"/>
            <span>{nameRobot}</span>
            <span>{mailRobot}</span>
        </div>
    );
}

export default Robot;
