import axios from "axios"
import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import User from "../components/User"

export default function SearchUser() {

    const [users, setUsers] = useState([])
    const [nome, setNome] = useState("")

    useEffect(() => {

        const url = `${process.env.REACT_APP_API_URL}/users`

        axios.get(url)
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                alert(err.response.message)
            })

    }, [])

    function buscarUsuário(event) {
        event.preventDefault()
        const url = `${process.env.REACT_APP_API_URL}/search/users`

        const body = {
            name: nome
        }

        axios.post(url, body)
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                alert(err.response.message)
            })

    }

    return (
        <>
            <SearchPageContainer>
                <SearchBar>
                    <form onSubmit={buscarUsuário}>
                        <input placeholder="Buscar" type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                        <button type="submit"></button>
                    </form>
                </SearchBar>
                {users.map((user, index) => <User key={index} img={user.image} name={user.name} biography={user.biography}></User>)}
            </SearchPageContainer>
            <Link to="/home" >
                <AddPost>+</AddPost>
            </Link>
        </>
    )
}

const SearchPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    font-size: 20px;
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    input{
        width: 800px;
        height: 50px;
        font-size: 20px;
    }
    button{
        width: 50px;
        height: 50px;
    }
`

const AddPost = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    position: fixed;
    bottom: 50px;
    left: 1550px;
    border: 2px solid black;
    font-size: 50px;
`