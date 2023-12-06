import React from 'react';

const TeamCard = ({ team }) => {
    const { img, title, sub } = team;
    return (
        <div className="card w-96 border border-1 border-dark5 p-6">
            <figure>
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-center p-5">
                <h2 className="text-dark2 text-2xl font-bold">{title}</h2>
                <p className='text-xl font-semibold inline'>{sub}</p>
            </div>
        </div>
    );
};

export default TeamCard;