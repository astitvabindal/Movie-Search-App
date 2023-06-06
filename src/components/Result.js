/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Result.css'

export default function Result(props) {
    const boxes = props.movies.map(
        (item, index) => {
            return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average} overview={item.overview} />
        }
    )
    return (
        <div className='w-full grid md:grid-cols-3 gap-5'>
            {boxes}
        </div>
    )
}
const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div>
            <div class="card">
                <div class="card-img">
                    <img src={IMGPATH+props.image} />
                </div>
                <div class="desc">
                    <h6 class="primary-text">{props.title}</h6>
                    <h6 class="secondary-text ">{props.overview}</h6>
                </div>
                {/* <button id='but' class="primary-text">View Profile</button> */}
                <div class="details">
                    <div class="rating">
                        <h6 class="primary-text"> {props.rating}/10 </h6>
                        <h6 class="secondary-text"> Movie Rating </h6>
                    </div>
                </div>
            </div>
            </div>
    )
}