import { useEffect, useState } from 'react';
import { apiGifs } from '../helpers/api'



export const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);

    const getImages = async () => {
        setimages(await apiGifs(category));
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading : true
    }
}
