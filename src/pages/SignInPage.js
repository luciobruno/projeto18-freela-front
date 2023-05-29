import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import useAuthorization from "../hooks/useAuthorization"


export default function SignInPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { login } = useAuthorization()

    function signIn(event) {
        event.preventDefault()

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}/signIn`, {
            email: email,
            password: password
        })

        promisse.then((res) => {
            login(res.data)
            navigate("/home")
        })
        promisse.catch((err) => {
            alert("Todos os campos são obrigatórios")
        })

    }

    return (
        <>
            <SingInContainer>
                <Title>Login</Title>
                <form onSubmit={signIn}>
                    <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Senha" type="password" autocomplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Entrar</button>
                </form>

                <Link to="/cadastro">
                    Primeira vez? Cadastre-se!
                </Link>
            </SingInContainer>
        </>
    )
}

const SingInContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-size: 20px;
    
    input{
        height: 35px;
        width: 800px;
        margin-top: 80px;
        font-size: 20px;
    }
    button{
        height: 70px;
        width: 400px;
        margin-bottom: 40px;
        margin-top: 80px;
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