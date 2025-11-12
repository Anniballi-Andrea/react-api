import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Actress from "./components/Actress";

function App() {
  const [actress, setActress] = useState([])

  function fetchActress() {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActress(res.data))


  }
  useEffect(fetchActress, [])

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
            <Actress actress={actress} />

            {
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
