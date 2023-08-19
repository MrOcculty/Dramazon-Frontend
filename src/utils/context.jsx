import { createContext, useEffect, useReducer } from 'react'
import { useLocation } from 'react-router-dom';

export const AppContext = createContext()

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD': return [...state, action.payload];
        case 'REMOVE': return state.filter(item => item.product.id !== action.payload);
        case 'DECREMENT': return state.map(item => item.product.id === action.payload ? { ...item, quantity: item.quantity > 1 ? (item.quantity - 1) : item.quantity } : item);
        case 'INCREMENT': return state.map(item => item.product.id === action.payload ? { ...item, quantity: (item.quantity + 1) } : item);
        default: return state;
    }
}

const AppContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, [])
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;