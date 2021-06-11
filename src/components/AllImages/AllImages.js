import React, { useEffect, useState } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import ImageSearch from '../ImageSearch/ImageSearch';
import './AllImages.css';

const AllImages = () => {
    const [images,setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [term,setTerm] = useState('');

    useEffect(() => {
        setIsLoading(true);
        setImages([]);
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits);
            setIsLoading(false);
        })
        .catch(err => console.log(err));
    },[term]);

    return (
        <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text) } />

            {
                !isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
            }

            {
                isLoading && (
                    <div>
                        <div className="opacity-75 flex flex-col items-center justify-center">
                            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 m-4"></div>
                            <h2 className="text-center text-gray-800 text-xl font-semibold">Loading...</h2>
                        </div>
                    </div>
                )
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    images.map( imgData => <ImageCard key={imgData.id} imageData={imgData} />)
                }
            </div>
        </div>
    );
};

export default AllImages;