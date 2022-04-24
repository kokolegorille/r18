import React from "react"
import { createRoot } from "react-dom/client";

import "./css/app.scss"

const App = () => {
    return (
        <div>Hello React 18!</div>
    )
}

const app = document.getElementById("app")
const root = createRoot(app)
root.render(<App />)