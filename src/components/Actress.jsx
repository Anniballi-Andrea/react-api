export default function Actress({ actress }) {



    return (
        actress.map((el) => (
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
                    <div>
                        <ul><li><strong>Awards:</strong></li></ul>
                        {el.known_for} !== undefined ? {el.known_for.map((e) => (<li>{e}</li>))} :{el.known_for} == undefined ? {el.most_famous_movies.map((e) => (<li>{e}</li>))}
                    </div>


                </div>
            </div>
        ))
    )
}