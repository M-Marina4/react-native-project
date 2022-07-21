import React, { useState, useEffect } from 'react';
import './Post.css';
import './Helper.js';
import json from '../../Helpers/Helper.js';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Post(num) {
    const [isLoading, SetIsLoading] = useState(true);
    const [animeName, setAnimeName] = useState();
    const [animeImage, setAnimeImage] = useState();
    const [animeDescription, setAnimeDescription] = useState();
    const [animeRating, setAnimeRating] = useState();
    // const [animeImage, setAnimeImage] = useState();
    useEffect(() => {
        try{
        const getData = async () => {
            let postHREF = await json.get('/anime');
            
            let postResult = postHREF.data.data[num.num].attributes;
            console.log(postResult);
            setAnimeImage(postResult.posterImage.large);
            setAnimeName(postResult.canonicalTitle);
            setAnimeDescription(postResult.description);
            setAnimeRating(postResult.ageRatingGuide);
        //     setPostTitle(postResult);
        //     setPostAuthor(postResult[num.num].title);
        //     setPostBody(postResult[num.num].body);
        }
        getData();
        }
        catch(error){
            return <h1>{error}</h1>;
        }
        finally{
            SetIsLoading(false);
        }
    }, []);
    if(isLoading){
        return(
            <Stack spacing={1} className="Post">
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </Stack>
        );
    }
    else{
    return (  
    <div className="Post">
        <h1>{animeName}</h1>
        <img src={animeImage}/>
        <h2>{animeRating}</h2>
        <p>{animeDescription}</p>
    </div>
    );
    }
    
}

export default Post;