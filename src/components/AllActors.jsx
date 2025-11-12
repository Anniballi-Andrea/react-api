

export default function AllActors({ allActors }) {



    return (
        allActors.map((el, i) => (
            <div key={i} className="col col-sm-3">
                <div className="card">
                    <img src={el.image} alt="" />
                </div>
                <div className="card-body">
                    <div><span>Name:</span> {el.name}</div>
                    <div><span>Birth year:</span> {el.birth_year}</div>
                    <div><span>Nationality:</span> {el.nationality}</div>
                    <div><span>Biography:</span> {el.biography}</div>
                    <div><span>Awards:</span> {el.awards}</div>
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item bgc_same"><span>Most Important Movies</span></li>
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