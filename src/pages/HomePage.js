import axios from "axios"
import styled from "styled-components"
import useAuthorization from "../hooks/useAuthorization"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function HomePage() {

    const { authorization, login } = useAuthorization()
    const navigate = useNavigate()
    const { dados, setDados } = useState([])

    useEffect(() => {
        if (!authorization.token) {
            return navigate("/")
        }

        const url = `${process.env.REACT_APP_API_URL}/user/me`

        const config = {
            headers: {
                "Authorization": `Bearer ${authorization.token}`
            }
        }

        const promisse = axios.get(url, config)

    }, [])

    return (
        <>
            <HomePageContainer>
                <Profile>
                    <img></img>
                    <Description>
                        <p></p>
                        <div></div>
                        <Buttons>
                            <button></button>
                            <button></button>
                        </Buttons>
                    </Description>
                </Profile>
            </HomePageContainer>
        </>
    )
}

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-size: 20px;
`

const Profile = styled.div`
    height: 180px;
    width: 850px;
    border: 1px solid black;
`

const Description = styled.div`
`

const Buttons = styled.div`
    display: flex;
    button{
        height: 20px;
        width: 180px;
    }
`