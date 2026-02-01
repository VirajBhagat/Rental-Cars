import React, { createContext, useState } from "react";
export const dataContext = createContext();

function UserContext({ children }) {
    let [category, setCategory] = useState([]);
    let [input, setInput] = useState("");
    let [showCart, setShowCart] = useState(false);

    let data = {input, setInput, category, setCategory, showCart, setShowCart};

    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    );
}

export default UserContext;
