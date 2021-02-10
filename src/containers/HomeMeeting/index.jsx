import React from 'react';

const HomeMeeting = ({categories, imageUrl, title, createdAt}) => {
    return (
        <div className={'flex flex-col gap-5'}>
            <div className={'aspect-w-1 aspect-h-1 w-full relative'}>
                <img alt={''} className={'absolute object-cover w-full h-full'} src={imageUrl}/>
            </div>
            <span className={'text-primary font-sans font-medium uppercase'}>{categories.join(', ')}</span>
            <span className={'font-semibold font-serif text-gray text-4xl leading-tight'}>{title}</span>
            <span className={'text-primary font-sans font-medium uppercase'}>{createdAt}</span>
        </div>
    )
}

export default HomeMeeting;