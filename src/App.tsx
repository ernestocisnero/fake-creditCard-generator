import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom"
import { FAQs, Generator, NavBar } from "./components";



export const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
    </>
  )
}

export default App;