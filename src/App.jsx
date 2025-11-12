import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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


            {
              actress.map((el) => (
                <div className="col col-sm-4">
                  <div className="card">
                    <img src={el.image} alt="" />
                  </div>

                </div>
              ))
            }


          </div>
        </div>
      </main>

    </>
  )
}

export default App
