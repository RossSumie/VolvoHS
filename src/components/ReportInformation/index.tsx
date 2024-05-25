import React, { useState } from 'react';
import * as S from './styles';


const ReportInformation = () => {
    return(
        <S.InformationContainer>
            <S.InformationColumn>
                <S.InformationLine>
                    <S.Title>Machine Type:</S.Title>
                    <S.Text>EC210D</S.Text>
                </S.InformationLine>
                <S.InformationLine>
                    <S.Title>Operator:</S.Title>
                    <S.Text>Booth Visitor</S.Text>
                </S.InformationLine>
            </S.InformationColumn>
            <S.InformationColumn>
                <S.InformationLine>
                    <S.Title>Machine Number:</S.Title>
                    <S.Text>11341186</S.Text>
                </S.InformationLine>
                <S.InformationLine>
                    <S.Title>Date:</S.Title>
                    <S.Text>05/06/24</S.Text>
                </S.InformationLine>
            </S.InformationColumn>
        </S.InformationContainer>

    );

};

export default ReportInformation;