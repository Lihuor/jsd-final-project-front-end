import { useState, useContext } from 'react';
import React from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5005/api/v1/"

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

    const [income, setIncome] = useState([]);
    const [expense, setExpense] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}AddIncome`, income);
            // Handle the successful response if needed

        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred while processing your request.");
            }
        }
    };
    
    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}getIncome`)
        setIncome(response.data);
        console.log(response.data);
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            income
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
