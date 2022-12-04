import styled from "styled-components";

// * Estilização div Home
export const HomeBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80vh;
`

// * Estilização form de criar usuário
export const FormCreateUser = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding: 20px;
`

// * Estilização h3 do form 
export const FormH3 = styled.h3`
    color: #1976d2;
`

// * Estilização select do formulário
export const FormSelect = styled.select`
    border: 1px solid #c4c4c4;
    color: #6d6d6d;
    border-radius: 3px;
    background-color: transparent;
    padding: 10px;
`

// * Estilização date do formulário
export const FormDate = styled.input`
    border: 1px solid #c4c4c4;
    color: #6d6d6d;
    border-radius: 3px;
    background-color: transparent;
    padding: 10px;
`