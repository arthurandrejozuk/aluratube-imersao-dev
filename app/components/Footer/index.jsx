import { styled } from "styled-components"
import Logo from "../Logo"

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-around;
    padding-bottom: 36px;
    background-color: ${({ theme }) => theme.backgroundBase};
    border-bottom: 1px solid ${({ theme }) => theme.backgroundBase};
    padding-top:36px;
    h2{
        color: ${({ theme }) => theme.textColorBase}
    }
    a{
        color:red;
    }
    a:hover{
        cursor: pointer;
    }
`

export default function Footer(){
    return(
        <StyledFooter>
            <Logo />
            <h2>
                Produzido por <a>@arthurandrejozuk</a>
            </h2>
        </StyledFooter>
    )
}