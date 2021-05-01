import React, { useState } from 'react'
import people from "./data"
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa"

const Review = () => {
    const [index, setIndex] = useState(0)
    const { id, name, job, image, text } = people[index]

    const prevReview = () => {
        setIndex(prevIndex => {
            if (prevIndex !== 0)
                return prevIndex - 1
            else
                return people.length - 1
        })
    }

    const nextReview = () => {
        setIndex(prevIndex => {
            if (prevIndex !== people.length - 1)
                return prevIndex + 1
            else
                return 0
        })
    }

    const randomReview = () => {
        const randomNumber = Math.floor(Math.random() * people.length)
        if (randomNumber === index)
            nextReview()
        else
            setIndex(randomNumber)
    }


    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon"><FaQuoteRight /> </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevReview}><FaChevronLeft /></button>
                <button className="next-btn" onClick={nextReview}><FaChevronRight /></button>
            </div>
            <button className="random-btn" onClick={randomReview}>Surprise Me</button>
        </article>
    )
}

export default Review
