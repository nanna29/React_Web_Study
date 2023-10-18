import React from "react"
import styled from 'styled-components';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

const MovieContainer = styled.div`
    margin:16px;
    width: 250px;
    background-color: #373b69;
    color:white;
    border-radius: 5px;
    box-shadow: 3px 3px 5ox rgba(0,0,0,0.1);
    > img {
        max-width: 100%;
    }
`;

const MovieInfo = styled.div`
    display: flex;
    padding:20px;
    justify-content: space-between;
    align-items: center;
    > h4{
    margin:0 ;
    }
    > span{
    margin-left:3px ;
    }
`;

const MovieDetail = styled.div`
display: none;
vertical-align: middle;

overflow: hidden;

width: 218px;
height: 408px;
padding: 16px;
background-color: black;
opacity: 0.7;
color: white;

position: absolute;
`;


export default function Movie(props) {
    
    return(
        <MovieContainer className="movie-container">
            <img
                src={IMG_BASE_URL + props.poster_path}
                alt="영화 포스터"
            />
            <MovieInfo>
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </MovieInfo>
            <MovieDetail className="movieDetail">
                <h4>{props.title}</h4>
                <span>{props.overview}</span>
            </MovieDetail>
        </MovieContainer>

    );

}