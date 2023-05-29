import axios from "axios"
import styled from "styled-components"
import useAuthorization from "../hooks/useAuthorization"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Post from "../components/Post"

export default function HomePage() {

    const { authorization} = useAuthorization()
    const navigate = useNavigate()
    const [ user, setUser ] = useState({})
    const [ posts, setPosts] = useState([])

    useEffect(() => {
        if (!authorization.token) {
            return navigate("/")
        }

        const urlUser = `${process.env.REACT_APP_API_URL}/user/me`
        const urlPosts = `${process.env.REACT_APP_API_URL}/posts/me`

        const config = {
            headers: {
                "Authorization": `Bearer ${authorization.token}`
            }
        }

        axios.get(urlUser, config)
            .then((res)=>{
                setUser(res.data)
            })
            .catch((err)=>{
                alert(err.response.message)
            })
        axios.get(urlPosts, config)
            .then((res)=>{
                setPosts(res.data)
            })

    }, [])

    return (
        <>
            <HomePageContainer>
                <Profile>
                    <Img src={user.image} alt="image"></Img>
                    <Description>
                        <p>{user.name}</p>
                        <div>{user.biography}</div>
                        <Buttons>
                            <button>Ver seguidores</button>
                            <button>Ver quem eu sigo</button>
                        </Buttons>
                    </Description>
                </Profile>
                <Posts>
                    {posts.map((post,index)=><Post key={index} likes={post.likes} img={post.image} description={post.description} date={post.createdAt}></Post>)}
                </Posts>
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
    display: flex;
    align-items: center;
    height: 180px;
    width: 850px;
    border: 1px solid black;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    height: 100px;
    justify-content: space-between;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    button{
        height: 20px;
        width: 180px;
    }
`
const Img = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-left: 40px;
    border: 2px solid black;
`

const Posts = styled.div`
`