import React from 'react'
import "./ApartementPageHeader.css"

function ApartementPageHeader(props) {
    const name = props.name;
    const [first, last] = name.split(" ")

    return (

        <div className="apartement-header">
            <div className='Title'>
                <h1>{props.title}</h1>
                <h2>{props.location}</h2>
                <div className="tags">
                    {props.tags.map((tag,i) => (
                        <span key={i}> {tag} </span>
                    ))}
                </div>
            </div>

            <div className="profile">

                <div className="profile-detail">
                    <div className="parentSpan">
                        <span>{first}</span>
                        <span>{last}</span>
                    </div>
                    <div className='badge-profile'>
                        <img src={props.picture} alt="" />
                    </div>
                </div>
                <div className="stars">
                    {[1, 2, 3, 4, 5,].map((star) => (
                        <span key={star} className={props.rating > star ? "on" : "stop"}>★</span>
                    )
                    )}
                </div>


            </div>

        </div>
    )
}

export default ApartementPageHeader