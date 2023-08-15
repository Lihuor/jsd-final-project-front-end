import React, {useState} from 'react'
import { styled } from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from '../../context/globalcontext'
import Button from '../Button/Button'
import { plus } from '../../utils/icons/icons'

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
        <div className='submit-btn'>
            <Button 
            name={"Add Income"}
            icon={plus}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent)'}
            color={'#fff'}
            />
        </div>
    </Formstyled>
  )
}

const Formstyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: .5rem;
        border: 2px solid #fff;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
        color: rgba(34, 34, 96, .9);
        &::placeholder {
            color: rgba(34, 34, 96, .4);
        }
    }
    .input-control {
        input {
            width: 100%;
        }
    }
    .select-input-control {
        display: flex;
        justify-content: flex-end;
        select {
            color: rgba(34, 34, 96, .4);
            &:focus, &:active {
                color: rgba(34, 34, 96, 1);
            }
        }
    }
    .submit-btn {
        button {
            box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

