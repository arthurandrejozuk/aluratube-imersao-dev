import styled from 'styled-components';
import Logo from "../Logo";
import DarkModeSwitch from '../DarkModeSwitch';

const Background = styled.div`

    background-color: ${({ theme }) => theme.backgroundBase};
    display: flex;
    justify-content: space-around;
    position: fixed;
    padding: 12px;
    width: 100%;
    align-items: center;
    .menu__pesquisa{
        display: flex;
        flex-direction: row;
        border: 1px solid ${({ theme }) => theme.backgroundLevel2};
        max-width: 300px;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
        input{
            width: 80%;
            padding: 4px 6px;
            background-color: ${({ theme }) => theme.backgroundBase};
            border: none;
            outline: none;
        }
    }
    .menu__pesquisa__button{
        flex: 1;
        cursor: pointer;
        border: none;
        width: 40px;
        background-color: ${({ theme }) => theme.backgroundLevel2};
        height: 40px;
    }

`


function Menu ({valorDaPesquisa, setValorDaPesquisa}) {

    const ValorDaBusca = valorDaPesquisa;
    const setValorDaBusca = setValorDaPesquisa;

    return(
        <Background className={"menu"} >
            <Logo className={"menu__logo"}/>
            <div className={"menu__pesquisa"}>
                <input placeholder="Procure aqui" type="text" onChange={(event) => {
                   setValorDaBusca(event.target.value);
                }} value={ValorDaBusca} />
                <button className={"menu__pesquisa__button"}>🔎</button>
            </div>     
            <DarkModeSwitch/>
        </Background>
    )
}

export default Menu;