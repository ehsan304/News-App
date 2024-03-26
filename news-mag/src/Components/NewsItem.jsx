import React from 'react'
import image from "../assets/reactjs.png"

function NewsItem({ title, description, src, url }) {
    return (

        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-3 py-2" style={{ maxWidth: "400px" }}>
            <img src={src?src:image} style={{height:"200px", width:"360px "}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description?description.slice(0,90):"Researchers unveil breakthrough in renewable energy technology, promising a sustainable future for global energy needs."}</p>
                <a href={url} className="btn btn-primary">Read More </a>
            </div>
        </div>

    )
}

export default NewsItem