import React from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalcontext';
import Form from '../Form/Form';

export default function Income() {
    const { addIncome, income, getIncome } = useGlobalContext()
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Income</h1>
                <div className='income-container'>
                    <div className='form-container'>
                        <Form />
                    </div>
                    <div className='income'>

                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    
`;
