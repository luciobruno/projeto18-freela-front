import styled from "styled-components"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [biography, setBiography] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const navigate = useNavigate()

    function signUp(event) {
        event.preventDefault()

        if (password !== confirmedPassword) {
            return alert("Senhas não correspodentes")
        }

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}/signUp`, {
            name: name,
            email: email,
            password: password,
            image: image,
            biography: biography
        })

        promisse.then((res) => { navigate("/") })
        promisse.catch((err) => {
            alert("Todos os campos são obrigatórios")
        })

    }

    return (
        <>
            <SingUpContainer>
                <Title>Cadastro</Title>
                <form onSubmit={signUp}>
                    <input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Foto de Perfil" type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
                    <input placeholder="Biografia (até 200 caracteres)" type="text" value={biography} onChange={(e) => setBiography(e.target.value)}></input>
                    <input placeholder="Senha" type="password" autocomplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input placeholder="Confirme a senha" type="password" autocomplete="new-password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                    <button type="submit">CADASTRAR</button>
                </form>

                <Link to="/">
                    Já tem uma conta? Entre agora!
                </Link>
            </SingUpContainer>
        </>
    )
}
const SingUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-size: 20px;
    
    input{
        height: 35px;
        width: 800px;
        margin-top: 40px;
        font-size: 20px;
    }
    button{
        height: 70px;
        width: 400px;
        margin-bottom: 40px;
        margin-top: 40px;
        font-size: 20px;
    }
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 900px;
        height: auto;
        border: 1px solid black;
        margin-bottom: 15px;
    }
`

const Title = styled.div`
    font-size: 30px;
    margin-bottom: 30px;
`