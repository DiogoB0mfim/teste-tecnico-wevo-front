import * as S from "../styles/HomeStyled";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import createUser from "../services/createUser";

const Home = () => {
  const [form, onChange] = useForm({ name: "", cpf: "", email: "", phone: "", birth: ""});
  const [genderOpt, setGenderOpt] = useState("")

  const handleGenderOpt = (event) => {
    setGenderOpt(event.target.value)
  }
  
  return (
    <>
      <Header />
      <S.HomeBody>
        <S.FormCreateUser>
          <S.FormH3>Criar usuário</S.FormH3>
          <TextField 
            label="Nome" 
            placeholder="Digite seu nome" 
            name="name"
            value={form.name}
            onChange={onChange}
            />
          <TextField 
            label="CPF" 
            placeholder="Digite seu cpf"
            name="cpf"
            value={form.cpf}
            onChange={onChange} 
            />
          <TextField 
            label="E-mail" 
            placeholder="Digite seu e-mail"
            name="email"
            value={form.email}
            onChange={onChange}  
           />
          <TextField 
            label="Telefone" 
            placeholder="Digite seu telefone"
            name="phone"
            value={form.phone}
            onChange={onChange}  
            />
          <S.FormSelect value={genderOpt} onChange={handleGenderOpt}>
            <option value="MASCULINO">Masculino</option>
            <option value="FEMININO">Feminino</option>
            <option value="PREFIRO NÃO INFORMAR">Prefiro não informar</option>
          </S.FormSelect>
          <S.FormDate 
            placeholder="data de nascimento" 
            type="date"
            name="birth"
            value={form.birth}
            onChange={onChange} 
            />
          <Button onClick={() => createUser(form, genderOpt)} variant="contained">Criar</Button>
        </S.FormCreateUser>
      </S.HomeBody>
    </>
  );
};

export default Home;
