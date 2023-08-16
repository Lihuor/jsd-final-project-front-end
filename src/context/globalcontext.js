import { useState, useContext } from 'react';
import React from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5005/api/v1/"

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

    const [income, setIncome] = useState([]);
    const [expense, setExpense] = useState([]);
    const [error, setError] = useState(null);

    // Calculate income
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
        getIncome()
    };
    
    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}getIncome`)
        setIncome(response.data);
        console.log(response.data);
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}deleteIncome/${id}`)
        getIncome()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        income.forEach((income) => {
            totalIncome = totalIncome += income.amount
        })
        return totalIncome;
    }

    totalIncome();
    console.log(totalIncome());

    // Calculate Expense
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}AddExpense`, expense);
            // Handle the successful response if needed

        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred while processing your request.");
            }
        }
        getExpense()
    };
    
    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}getExpense`)
        setExpense(response.data);
        console.log(response.data);
    }

    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}deleteExpense/${id}`)
        getExpense()
    }

    const totalExpense = () => {
        let totalIncome = 0;
        expense.forEach((income) => {
            totalIncome = totalIncome += income.amount
        })
        return totalIncome;
    }

    totalExpense();

    // Making History Section
    const transactionHistory = () => {
        const history = [...income, ...expense]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt) //Sorted by the timestamp of database created
        })

        return history.slice(0, 3)
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            income,
            deleteIncome,
            totalIncome,
            expense,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
