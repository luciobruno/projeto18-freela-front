import styled from "styled-components"

export default function User({img,name,biography}) {
    return (
        <Profile>
            <Img src={img} alt="image"></Img>
            <Description>
                <p>{name}</p>
                <div>{biography}</div>
            </Description>
        </Profile>
    )
}

const Profile = styled.div`
    display: flex;
    align-items: center;
    height: 180px;
    width: 850px;
    border: 1px solid black;
    margin-bottom: 40px;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    height: 100px;
    justify-content: space-between;
`

const Img = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-left: 40px;
    border: 2px solid black;
`