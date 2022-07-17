import './telas.css'
import styled from 'styled-components'

const Tela2 = () => {
    return (
        <Container>
            <Icon>
                <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36 16.6667C36 14.4667 37.8 12.6667 40 12.6667V4.66666C40 2.46666 38.2 0.666656 36 0.666656H4C1.8 0.666656 0.02 2.46666 0.02 4.66666V12.6667C2.22 12.6667 4 14.4667 4 16.6667C4 18.8667 2.22 20.6667 0 20.6667V28.6667C0 30.8667 1.8 32.6667 4 32.6667H36C38.2 32.6667 40 30.8667 40 28.6667V20.6667C37.8 20.6667 36 18.8667 36 16.6667ZM27.16 26.2667L20 21.6667L12.84 26.2667L15 18.0267L8.42 12.6467L16.9 12.1467L20 4.26666L23.08 12.1667L31.56 12.6667L24.98 18.0467L27.16 26.2667Z" fill="#FFA100" />
                </svg>
            </Icon>
            <Titulo>
                <h2>Que bom que você
                    aproveitou este benefício!
                </h2>
            </Titulo>
            <SubTitulo>
                <p>Esse benefício foi relevante
                    para que você permanecesse como cliente?
                </p>
            </SubTitulo>

            <form className='form'>
                <input type="submit" value="Irrelevante" className='marcado' />
                <input type="submit" value="Pouco relevante" className='marcado' />
                <input type="submit" value="Indiferente" className='marcado' />
                <input type="submit" value="Relevante" className='nao-marcado'/>
                <input type="submit" value="Muito relevante" className='nao-marcado' />

                <CampTextarea>
                    <p>Gostaria de deixar algum comentário? (opcional)</p>
                    <Textarea type="textarea"  placeholder="Digite aqui" />
                </CampTextarea>
            </form>

            <div className='btn'>
                <input className='btn-depois' type="submit" value="Responder depois" />
                <input className='btn-salvar' type="submit" value="Salvar resposta" />
            </div>
        </Container>
    )
}

const Container = styled.div`
    margin: 20px auto;
    width: 580px;
    height: 490px;
    background-color: #F5F5F5;
    border-radius: 10px;
    box-shadow: 5px 5px;
`

const Icon = styled.div`
   margin: 10px auto;
    Width: 40px;
    Height: 32px;
`

const Titulo = styled.div`
    margin: 5px auto;
    text-align: center;
    padding: 5px;
    width: 290px;
    height: 90px;
    font-family: 'Roboto', sans-serif;
`

const SubTitulo = styled.div`
    margin: 10px auto;
    width: 490px;
    font-weight: 400px;
    font-size: 20px;
    height: 22px;
`

const CampTextarea = styled.div `
    margin-top: 20px;
    margin-bottom: 30px;
`

const Textarea = styled.input`
    width: 520px;
    height: 96px;
    background: #EAE9E9;
    border: none;
    border-radius: 10px;
`

export { Tela2 }