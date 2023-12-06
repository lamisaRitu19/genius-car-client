import React from 'react';
// import img1 from '../../../assets/icons/group.svg';
// import img2 from '../../../assets/icons/group.svg';
// import img3 from '../../../assets/icons/group.svg';
// import img4 from '../../../assets/icons/group.svg';
// import img5 from '../../../assets/icons/group.svg';
// import img6 from '../../../assets/icons/group.svg';

const Feature = ({ feature }) => {
    const { id, name } = feature;
    console.log(id)
    return (
        <div className='flex flex-col items-center'>
            <img src={`img${id}`} alt="" className='w-16' />
            <p className='text-lg font-bold'>{name}</p>
        </div>
    );
};

export default Feature;