import * as S from "../styles/HomeStyled";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import createUser from "../services/createUser";
import getAllUsers from "../services/getAllUsers";
import updatePhone from "../services/updatePhone";
import updateIcon from "../assets/update.png"
import deleteUser from "../services/deleteUser";


const Home = () => {
  const [form, onChange] = useForm({name: "", cpf: "", email: "", phone: "", birth: "", user: ""});
  const [genderOpt, setGenderOpt] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {getAllUsers(setUsers)}, [users]);

  const handleGenderOpt = (event) => {
    setGenderOpt(event.target.value);
  };

  const updateWindow = (param) => {
    const phone = window.prompt("Digite o novo número: ")
    updatePhone(param, phone)
  }

  const renderUser = users && users.map((user) => {
      if (form.user.toUpperCase() === user.name.toUpperCase())
        return (
          <S.FormRender key={user.id}>
            <S.ManagementP><b>Nome:</b> {user.name}</S.ManagementP>
            <S.ManagementP><b>CPF:</b> {user.cpf}</S.ManagementP>
            <S.ManagementP><b>E-mail:</b>  {user.email}</S.ManagementP>
            <S.DivPhone>
              <S.ManagementP><b>Contato:</b>  {user.phone}</S.ManagementP>
              <S.ManagementImg onClick={() => updateWindow(user.id)} src={updateIcon} alt="icone de deletar"/>
            </S.DivPhone>
            <S.ManagementP><b>Nascimento:</b>  {user.birth_date}</S.ManagementP>
            <Button variant="contained" color="error" onClick={() => deleteUser(user.id)}>Deletar usuário</Button>
          </S.FormRender>
        );

        else {
          return null;
        }
    });

  return (
    <>
      <Header/>
      <S.HomeBody>
        <S.FormUser>
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
            <option>Selecione o seu sexo</option>
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
        </S.FormUser>

        <S.FormUser>
          <S.FormH3>Gerenciar usuário</S.FormH3>
          <TextField
            placeholder="Digite o nome do usuário"
            label="Usuário"
            name="user"
            value={form.user}
            onChange={onChange}
            InputProps={{endAdornment: (<InputAdornment position="end"><SearchIcon /></InputAdornment>)}}
          />
          <S.FormManagement>
            {renderUser}
          </S.FormManagement>
        </S.FormUser>
        
      </S.HomeBody>
    </>
  );
};

export default Home;
