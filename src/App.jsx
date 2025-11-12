import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Actress from "./components/Actress";
import Actors from "./components/AllActors";
import AllActors from "./components/AllActors";

function App() {
  const [actress, setActress] = useState([])
  const [actors, setActors] = useState([])
  const [allActors, setAllActors] = useState([])

  function fetchAllActors() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActress(res.data))

    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data))




  }
  useEffect(fetchAllActors, [])
  /*function fetchActress() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActress(res.data))


  }
  function fetchActors() {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data))


  }
  useEffect(fetchActress, [])

  useEffect(fetchActors, [])*/
  useEffect(() => {

    setAllActors([...actress, ...actors])
    console.log(allActors)
  }, [actress, actors])
  //console.log(actress)
  //console.log(actors)

  //console.log(actress)

  return (
    <>
      <header>
        <div className="container">
          <h1>list of actress</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row  g-3">
            <AllActors allActors={allActors} />


            {//<Actors actors={actors} />
              /*actress.map((el) => (
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
              ))*/
            }


          </div>
        </div>
      </main>

    </>
  )
}

export default App
