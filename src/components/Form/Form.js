import React, {useState} from 'react'
import { styled } from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from '../../context/globalcontext'

export default function Form() {
    const {addIncome} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const {title, amount, date, category, description} = inputState
    const handleInput = (name) => (e) => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submit button clicked");
        addIncome(inputState)
    }

  return (
    <Formstyled onSubmit={handleSubmit} >
        <div className='input-control'>
            <input 
                type='text' 
                value={title}
                name={'title'}
                placeholder='Salary Title'
                onChange={handleInput('title')}
                />
        </div>
        <div className='input-control'>
            <input 
                value={amount} 
                name={'amount'} 
                placeholder='Amount' 
                onChange={handleInput('amount')} />
        </div>
        <div className='input-control'>
            <DatePicker 
                id="date"
                placeholderText="Enter a date"
                selected={date}
                dateformat="dd/MM/yyyy"
                onChange={(date) => setInputState({...inputState, date: date})}
            />
        </div>
        <div className='select-input-control'>
            <select required value={category} name='category' id='category' onChange={handleInput('category')}>
                <option value="" disabled>Select option</option>
                <option value="salary">Salary</option>
                <option value="freelancing">Freelancing</option>
                <option value="investment">Investment</option>
                <option value="stocks">Stocks</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="bank">Bank</option>
                <option value="youtube">Youtube</option>
                <option value="other">Other</option>

            </select>
        </div>
        <div className='input-control'>
            <textarea name='description' value={description} id='description' cols="30" rows="4" onChange={handleInput('description')} placeholder='Description'></textarea>
        </div>
        <div className='sumbit-btn'>
            <button>Add Income</button>
        </div>
    </Formstyled>
  )
}

const Formstyled = styled.form`

`;

