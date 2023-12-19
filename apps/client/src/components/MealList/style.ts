import styled from '@emotion/styled';

export const MealContainer = styled.div `
    padding: 1.5rem;
    gap: 0.5rem;
    border-radius: 1.25rem;
    background: #fff;
    box-shadow: 0rem 0.25rem 2.5rem 0px rgba(175, 198, 209, 0.20);
    width: fit-content;
`

export const MealInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const MealBox = styled.div`
    display: flex;
    width: 17rem;
    padding: 2.0625rem 0;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.color.gray['030']};
`

export const MealContent = styled.div `
    display: flex;
    width: 8.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const MealText = styled.h4 `
    ${({ theme }) => theme.typo.h4};
    color: ${({ theme }) => theme.color.gray['090']};
    text-align: center;
    font-weight: 400;
`

export const DateContent = styled.h4`
    ${({ theme }) => theme.typo.h4};
    color: ${({ theme }) => theme.color.gray['070']};
    font-weight: 400;
`

export const DateBox = styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;
`

export const CalenderIconBox = styled.div`
    height: 1.5rem;
    width: 1.5rem;
`  