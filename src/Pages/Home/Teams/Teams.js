import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => setTeams(data));
    }, [])

    return (
        <div className='text-center'>
            <div className='text-center'>
                <p className='text-orange text-xl font-bold mb-5'>Team</p>
                <h1 className="text-dark1 text-5xl font-bold mb-5">
                    Meet Our Team
                </h1>
                <p className="capitalize mb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32'>
                {
                    teams.map(team => <TeamCard
                        key={team._id}
                        team={team}
                    ></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Teams;