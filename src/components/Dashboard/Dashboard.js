import React from 'react';
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';

export default function DashBoard() {
    return (
        <DashBoardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className='stats-con'>
                    <div className='chart-con'>
                        
                    </div>
                </div>
            </InnerLayout>
        </DashBoardStyled>
    )
}

const DashBoardStyled = styled.div`
    
`;
