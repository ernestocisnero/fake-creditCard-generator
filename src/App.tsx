import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom"
import { FAQs, Generator, NavBar, ValidateCard } from "./components";



export const App = () => {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/validate-card" element={<ValidateCard />} />
      </Routes>
    </>
  )
}

export default App;