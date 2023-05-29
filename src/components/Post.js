import styled from "styled-components";
import dayjs from "dayjs";

export default function Post({ img, description, likes, date }) {

    const day = dayjs(date).format('DD/MM/YYYY')
    const hour = dayjs(date).format('HH:mm')

    return (
        <PostContainer>
            <img src={img} alt="post"></img>
            <Infos>
                <div>{likes} pessoas curtiram sua foto</div>
                <div>{day} às {hour}</div>
            </Infos>
            <Description>{description}</Description>
        </PostContainer>
    )
}

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 850px;
    height: 550px;
    border: 1px solid black;
    img{
        padding-top: 25px;
        width: 800px;
        height: 350px;
        object-fit: contain;
    }
`
const Description = styled.div`
    margin-top:30px;
    margin-left: 35px;
`

const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 35px;
    margin-right: 35px;
    margin-top: 20px;
`