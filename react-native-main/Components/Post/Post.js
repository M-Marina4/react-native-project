import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import './Post.css';
import './Helper.js';
import json from '../../Helpers/Helper.js';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function Post(num) {
    const [isLoading, SetIsLoading] = useState(true);
    const [animeName, setAnimeName] = useState();
    const [animeImage, setAnimeImage] = useState();
    const [animeCount, setAnimeCount] = useState();
    const [animeRating, setAnimeRating] = useState();
    const [animeJapTitle, setAnimeJapTitle] = useState();
    // const [animeImage, setAnimeImage] = useState();
    useEffect(() => {
        try{
        const getData = async () => {
            let postHREF = await json.get('/anime');
            let postResult = postHREF.data.data[num.num].attributes;
            console.log(postResult);
            setAnimeImage(postResult.posterImage.large);
            setAnimeName(postResult.canonicalTitle);
            setAnimeCount(postResult.episodeCount);
            setAnimeRating(postResult.ageRatingGuide);
            setAnimeJapTitle(postResult.titles.ja_jp);
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
        var divStyle = {
            backgroundImage: 'url(' + animeImage + ')',
          };
    return (  
    <div className="Post">
        <div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={animeImage}/>
      <h1>{animeName}</h1>
      <h4>{animeJapTitle}</h4>
    </div>
    <div>
        <span className="minutes">Episode Count: {animeCount}</span>
    </div>
    <div>
        <p className="type">{animeRating}</p>
    </div>
  </div>
  <div className="blur_back bright_back" style={divStyle}>

  </div>
</div>
    </div>
    );
    }
    
}


const styles = StyleSheet.create({
    container: {
        "width": "50%",
        "borderTopLeftRadius": 8,
        "borderTopRightRadius": 8,
        "borderBottomRightRadius": 8,
        "borderBottomLeftRadius": 8
    }
    
});

export default Post;