'use client';

import { CalenderIcon } from 'client/assets';

import * as S from './style';

interface MealArray {
    SchoolMeal: string;
}

const GetDefaultMealArray = (): MealArray[] => [
        {
            SchoolMeal: '친환경 백미밥',
        },
        {
            SchoolMeal: '미트볼 케찹볶음'
        },
        {
            SchoolMeal: '북어달걀국'
        },
        {
            SchoolMeal: '돈육해물자장볶음'
        },
        {
            SchoolMeal: '북어달걀국'
        },
        {
            SchoolMeal: '매콤어묵무국'
        },
        {
            SchoolMeal: '매콤어묵무국'
        },
    ];

const MealList = () => {
    const SchoolMealArray: MealArray[] = GetDefaultMealArray();

    return (
    <S.MealContainer>
        <S.MealInfo>
            <S.DateBox>
                <S.DateContent>
                    2023.11.11(월) 
                </S.DateContent>
                <S.CalenderIconBox>
                    <CalenderIcon/>
                </S.CalenderIconBox>
            </S.DateBox>
            <S.MealBox>
                <S.MealContent>
                    {SchoolMealArray.map((meal, index) => (
                    <S.MealText key={index}>
                        {meal.SchoolMeal}
                    </S.MealText>
                    ))}
                </S.MealContent>
            </S.MealBox>
        </S.MealInfo>
    </S.MealContainer>
    );
};

export default MealList;