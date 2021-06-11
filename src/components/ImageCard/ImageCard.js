import React from 'react';

const ImageCard = ({imageData}) => {
    const {webformatURL, user, downloads, likes, views, tags, id} = imageData;
    const allTags = tags.split(',');
    return (
        <>
        <div className="m-auto max-w-sm m-5 rounded overflow-hidden shadow-lg">
            <img src={webformatURL} alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by {user} 
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {likes}
                    </li>  
                </ul>
            </div>
            <div className="px-6 py-4">
                {
                    allTags.map((tag, index) => (
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag.trim()}</span>
                    ))
                }
            </div>
        </div> 
        </>
    );
};

export default ImageCard;