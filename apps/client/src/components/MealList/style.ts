import styled from '@emotion/styled';

export const MealContainer = styled.div `
    display: flex;
    align-items: flex-start;
    padding: 1.5rem;
    gap: 0.5rem;
    border-radius: 1.25rem;
    background: #fff;
    box-shadow: 0px 4px 40px 0px rgba(175, 198, 209, 0.20);
    width: fit-content;
`

export const MealInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const MealBox = styled.div`
    width: 17rem;
    padding: 2.0625rem 4.125rem;
    justify-content: center;
    align-items: center;
    background: var(--gray030, #F5F5F5);
`

export const MealContent = styled.div `
    display: flex;
    width: 8.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const MealText = styled.h4 `
    color: var(--gray090, #212121);
    text-align: center;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.8125rem;
`

export const DateContent = styled.h4`
    color: var(--gray070, #616161);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.8125rem;
`

export const DateBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    align-items: center;
`

export const CalenderIconBox = styled.div`
    height: 1.5rem;
    width: 1.5rem;
`  