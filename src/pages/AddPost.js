import axios from "axios"
import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAuthorization from "../hooks/useAuthorization"


export default function AddPost() {

    const [foto, setFoto] = useState("")
    const [descrição, setDescrição] = useState("")
    const navigate = useNavigate()
    const { authorization } = useAuthorization()

    function signIn(event) {
        event.preventDefault()

        const config = {
            headers: {
                "Authorization": `Bearer ${authorization.token}`
            }
        }

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}/addPost`, {
            image: foto,
            description: descrição
        }, config)

        promisse.then((res) => {
            alert("Criado com sucesso")
            navigate("/home")
        })
        promisse.catch((err) => {
            alert("Confira os dados")
        })

    }

    return (
        <>
            <SingInContainer>
                <Title>Novo Post</Title>
                <form onSubmit={signIn}>
                    <input placeholder="Foto" type="text" value={foto} onChange={(e) => setFoto(e.target.value)} />
                    <input placeholder="Descrição" type="text" value={descrição} onChange={(e) => setDescrição(e.target.value)} />
                    <button type="submit">CRIAR POST</button>
                </form>
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