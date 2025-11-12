export default function AllActors({ allActors }) {



    return (
        allActors.map((el) => (
            <div className="col col-sm-3">
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