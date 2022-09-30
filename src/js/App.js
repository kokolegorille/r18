// import React from "react"
// import LoginForm from "./components/LoginForm"

// const App = () => {
//     return (
//         <div>
//             <h1>Hello React 18!</h1>
//             <LoginForm />
//         </div>
//     )
// }

import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

import Home from "./views/Home"
import About from "./views/About"
import Games from "./views/Games"
import NotFound from "./views/NotFound"

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/about">About</Link> | {" "}
                <Link to="/games">Games</Link>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/games/*" element={<Games />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App