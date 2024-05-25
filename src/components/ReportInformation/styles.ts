import styled from 'styled-components/native';

export const InformationContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const InformationColumn = styled.View`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    gap:16px;
`

export const InformationLine = styled.View`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-family: 'VolvoNovum3-Bold';
    font-size: 16px;
    color: #000;
`

export const Text = styled.Text`
    font-family: 'VolvoNovum3-Light';
    font-size: 16px;
    color: #000;

`