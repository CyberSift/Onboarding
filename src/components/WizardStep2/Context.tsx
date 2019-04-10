import { createContext } from "react";

interface wizard2Context {
    changeViewHandler? : Function
}

const c : wizard2Context = {}

const Wizard2Context = createContext(c)

export default Wizard2Context