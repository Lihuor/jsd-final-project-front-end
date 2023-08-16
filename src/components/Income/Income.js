import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalcontext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
// import { deleteIncome } from '../../../../server/controllers/income';

export default function Income() {
    const { addIncome, income, getIncome, deleteIncome, totalIncome } = useGlobalContext()

    useEffect(() => {
        getIncome()
    }, [])
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Income</h1>
                <h2 className='total-income'>Total Income: <span>${totalIncome()}</span></h2>
                <div className='income-content'>
                    <div className='form-container'>
                        <Form />
                    </div>
                    <div className='income'>
                        {income.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                description={description}
                                indicatorColor={'var(--color-green)'}
                                deleteItem={deleteIncome}
                            />
                            })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        income{
            flex: 1
        }
    }
`;
