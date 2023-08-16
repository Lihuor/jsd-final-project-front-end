import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { dollar } from '../../utils/icons/icons';
import { useGlobalContext } from '../../context/globalcontext';
import History from '../History/History';

export default function DashBoard() {
    const {totalExpense, income, expense, totalIncome, getIncome, getExpense} = useGlobalContext()

    useEffect(()=>{
        getIncome()
        getExpense()
    },[])
    return (
        <DashBoardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className='stats-con'>
                    <div className='chart-con'>
                        <Chart />
                        <div className='amount-con'>
                            <div className='income'>
                                <h2>Total Income</h2>
                                <p>{dollar} {totalIncome()} </p>
                            </div>
                            <div className='expense'>
                                <h2>Total Expense</h2>
                                <p>{dollar} {totalExpense()} </p>
                            </div>
                            <div className='balance'>
                                <h2>Total Balance</h2>
                                <p>{dollar} {totalIncome() - totalExpense()} </p>
                            </div>
                        </div>
                    </div>
                    <div className='history-con'>
                        <History />
                        <h2 className='salary-title'>Min <span>Income</span> Max </h2>
                        <div className='salary-item'>
                            <p>
                                {Math.min(...income.map((income) => income.amount))}
                            </p>
                            <p>
                                {Math.max(...income.map((income) => income.amount))}
                            </p>
                        </div>
                        <h2 className='salary-title'>Min <span>Expense</span> Max </h2>
                        <div className='salary-item'>
                            <p>
                                {Math.min(...expense.map((expense) => expense.amount))}
                            </p>
                            <p>
                                {Math.max(...expense.map((expense) => expense.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashBoardStyled>
    )
}

const DashBoardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con {
            grid-column: 1/4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0,0,0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700
                    }
                }
                .balance{
                    grid-column: 2/4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }
        .history-con{
            grid-column: 4/-1;
            h2{
                margin: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0,0,0, 0.06);
                border-radius: 20px;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-size: 1.8rem
                    font-weight: 600
                }
            }
        }
    }
`;
