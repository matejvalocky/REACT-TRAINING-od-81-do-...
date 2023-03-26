//React 83 - Projekt překlikávání filmů - filtrování filmů

import { useState } from "react"
import allMovies from "./data"
import categories from "./categories"

const App = () => {

  const [typeOfMovie, setTypeOfMovie] = useState("romantický")

  const vysledneFilmy = allMovies.filter((oneMovie) => {
      return oneMovie["category"] === typeOfMovie
  })

  console.log(vysledneFilmy)

  return <div>

  </div>
}

export default App