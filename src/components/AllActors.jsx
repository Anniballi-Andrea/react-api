

export default function AllActors({ allActors }) {



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
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item bgc_same"><strong>Most Important Movies</strong></li>
                            {
                                el.most_famous_movies === undefined ?
                                    el.known_for.map((e) => (
                                        <li className="list-group-item bgc_same">- {e}</li>
                                    ))


                                    : el.most_famous_movies.map((e) => (
                                        <li className="list-group-item bgc_same">- {e}</li>
                                    ))
                            }


                        </ul>
                    </div>
                </div>
            </div>
        ))
    )
}