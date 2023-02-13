const { createContext, useState } = require("react");

const UserContext = createContext({});

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false);

    return (
        <UserContext.Provider value={{
            user, 
            setUser,
            loading, 
            setLoading
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}