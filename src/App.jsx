import { useState } from "react"
import NewsBoard from "./Components/NewsBoard"
import Navbar from "./Components/Navbar"

const App = () => {
  const [category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App