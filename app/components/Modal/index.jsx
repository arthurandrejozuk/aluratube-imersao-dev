import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styled from 'styled-components';


const StyledRegisterVideo = styled.div`
    
    .add-video {
        width: 50px;
        height: 50px;
        font-size: 24px;
        color: inherit;
        position: fixed;
        bottom: 16px;
        right: 16px;
        border: 0;
        background-color: red;
        border-radius: 50%;
        z-index: 99;
        cursor: pointer;
        font-weight: 700;
        
    }
    .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.textColorBase};
  }
  button[type="submit"] {
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
    font-weight: 600;
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    & > div {
      flex: 1;
      border-radius: 8px;
      max-width: 320px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
    }
  }
  input {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
`


function useForm(propsDoForm) {

    
    const [formularios, setFormularios] = useState(propsDoForm.initialValues);
    
    return{
        formularios,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;

        setFormularios({
                ...formularios,
                [name]: value,
            });
        },
        clearForm() {
            setFormularios({})
        }
    };
}


const PROJETO_URL = "https://scpsabciznwgbkctdfyp.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcHNhYmNpem53Z2JrY3RkZnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4ODQ2NDIsImV4cCI6MjAwNjQ2MDY0Mn0.lY6l2EYF-rrH9PnDHwwhpHu9SFRZ1ec4ZiSJ2YOPXUU"
const supabase = createClient(PROJETO_URL, PUBLIC_KEY)
     
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split('v=')[1]}/hqdefault.jpg`;
}

export default function RegistraVideo(){

    const formCadastro = useForm({
        initialValues: { titulo: "" , url: ""}
    });
    
    const [visivel, setVisivel] = useState(false)
    
     return(
        <StyledRegisterVideo>
              {visivel ?   
                    <form onSubmit={(evento) => {
                            evento.preventDefault();
                            console.log(formCadastro.formularios);

                            supabase.from("video").insert({
                                title: formCadastro.formularios.titulo,
                                url: formCadastro.formularios.url,
                                thumb: getThumbnail(formCadastro.formularios.url),
                                playlist: "jogos",
                            })
                            .then((res)=>{
                                console.log(res);
                            }).catch(err => {
                                console.log(err);
                            })
                                
                            setVisivel(false);
                            formCadastro.clearForm();
                        }}> 
                        <div>
                            <button type='button' onClick={() => setVisivel(false)} className='close-modal'>
                                X
                            </button>
                            <input 
                                value={formCadastro.formularios.titulo} 
                                onChange={formCadastro.handleChange} 
                                type="text" 
                                name='titulo'
                                placeholder='Video title' 
                            />
                            <input 
                                value={formCadastro.formularios.url} 
                                onChange={formCadastro.handleChange}
                                type="text" 
                                name='url'
                                placeholder='URL' 
                            />
                            <button type='submit'>Registrar</button>
                        </div>
                    </form> 
                : false}
            <button onClick={() => setVisivel(true)} className='add-video'>
                +
            </button>
        </StyledRegisterVideo>
    )
}