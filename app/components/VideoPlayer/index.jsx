import { styled } from "styled-components"
import { useRouter }from 'next/router';

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    
    div{
        margin-top: 200px ;
        margin-bottom: 200px;
       
    }
`
   
export default function VideoPlayer() {

    const router = useRouter();
    const { videoId } = router.query

    return(
        <StyledSection>
            {!videoId ? (
                <p>Erro: ID do vídeo não encontrado.</p>
            ) : (
            <div>
                <h1></h1>
                <iframe
                    width="700"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
      )}
        </StyledSection>
    )
}