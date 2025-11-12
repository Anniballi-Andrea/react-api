import { useState } from "react"

export default function AllActors({ allActors }) {
    function mostFamus() {
        if (el.most_famous_movies !== undefined) {
            return console.log(el.most_famous_movies)
        } else if (known_for !== undefined) {
            return console.log(el.known_for)
        }

    }


    return (
        allActors.map((el, i) => (
            <div key={i} className="col col-sm-3">
                <div className="card">
                    <img src={el.image} alt="" />
                </div>
                <div className="card-body">
                    <div><strong>Name:</strong> {el.name}</div>
                    <div><strong>Birth year:</strong> {el.birth_year}</div>
                    <div><strong>Nationality:</strong> {el.nationality}</div>
                    <div><strong>Biography:</strong> {el.biography}</div>
                    <div><strong>Awards:</strong> {el.awards}</div>
                </div>
            </div>
        ))
    )
}