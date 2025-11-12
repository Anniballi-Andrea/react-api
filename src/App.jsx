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

    </>
  )
}

export default App
