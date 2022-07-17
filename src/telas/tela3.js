import './telas.css'
import { MdMilitaryTech } from 'react-icons/md'
import styled from 'styled-components'

const Tela3 = () => {
    return (
        <div className='container'>
            <div className='titulo'>
                <MdMilitaryTech className='iconMedalha' />
                <h2>Sucesso!</h2>
                <p>Sua resposta foi resgistrada com sucesso.</p>
                <p>Agradecemos muito por você ter dedicado esse
                    tempo para nos ajudar a tornar nosso clube
                    cada vez melhor.
                </p>

            </div>
            <BtnFechar className='btn-fechar' type="submit" value="Fechar" />
        </div>
    )
}

const BtnFechar = styled.input `
    margin-top: 55px;
    margin-left: 150px;
    Width: 250px;
    Height: 48px;
    font-weight: 400;
    font-size: 21px;
    color: #FCFCFC;
    background: #0073FF;
    border-radius: 8px;
    border: none;
`

export { Tela3 }