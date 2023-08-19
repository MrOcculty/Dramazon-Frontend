import { useReducer, createContext } from "react"

export const OCcontext = createContext()

const ocReducer = (ocState, action) => {
    switch (action) {
        case 'OPENSEARCH': return { search: true, cart: false, profile: false };
        case 'OPENCART': return { search: false, cart: true, profile: false };
        case 'OPENPROFILE': return { search: false, cart: false, profile: true };
        case 'CLOSEALL': return { search: false, cart: false, profile: false };
        default: return ocState;
    }
}

function OCprovider({ children }) {

    const [ocState, ocDispatch] = useReducer(ocReducer, { search: false, cart: false, profile: false })

    return (
        <OCcontext.Provider value={{ ocState, ocDispatch }}>
            {children}
        </OCcontext.Provider>
    );
}

export default OCprovider;