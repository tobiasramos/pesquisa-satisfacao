import './telas.css'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import styled from 'styled-components'

const Tela1 = () => {
    return (
        <div className='container'>
            <IconPresente>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.4783 15.1169L26.3028 12.6942C30.3259 9.26575 26.2875 2.86606 21.4567 5.045L20.1309 5.60878L19.9633 4.146C19.8109 2.50036 18.9575 1.32709 17.8298 0.641407C15.3306 -0.810713 11.5208 0.184286 10.9112 3.81078L6.72047 1.40327C5.25751 0.549983 3.39833 1.05282 2.56018 2.5156L1.03626 5.15166C0.609566 5.88306 0.868632 6.81253 1.60011 7.23918L13.4714 14.096L15.7573 10.1343L18.3937 11.658L16.1078 15.6197L27.9791 22.4765C28.7106 22.8575 29.6554 22.6441 30.0669 21.9128L31.5908 19.2767C32.4289 17.8139 31.9413 15.9549 30.4783 15.1169ZM15.803 6.09638C14.4772 6.47731 13.4105 5.06024 14.081 3.88696C14.4772 3.15557 15.4373 2.91177 16.1687 3.32318C17.3422 4.00886 17.1136 5.77639 15.803 6.09638ZM23.7121 10.6676C22.4016 11.0485 21.3348 9.63144 22.0053 8.45817C22.4168 7.72678 23.3616 7.48298 24.0779 7.89439C25.2513 8.58007 25.0227 10.3476 23.7121 10.6676ZM28.7563 24.1984C29.3811 24.1984 29.9754 23.985 30.4783 23.6193V28.9524C30.4783 30.6438 29.122 31.9999 27.4305 31.9999H3.04783C2.2395 31.9999 1.46427 31.6788 0.892689 31.1073C0.32111 30.5358 0 29.7606 0 28.9524V15.2388H12.4199L13.7152 16.0007V28.9524H16.7631V17.753L27.2324 23.7869C27.6895 24.0612 28.1924 24.1984 28.7563 24.1984Z" fill="#FFA100" />
                </svg>

            </IconPresente>
            <div className="titulo">
                <h2>Oba!</h2>
                <h2>Fulano, você usou um benefício?</h2>
                <p>Identificamos que você acessou o site do Parceiro
                    Tal no dia 00/00/0000. Você pode nos dizer se utilizou
                    um benefício na ocasião?
                </p>
            </div>

            <Form className="form">
                <BtnSim className='btn-form' type="submit" value="Sim. Eu utilizei um benefício" /><br />
                <IconBtnSim><RiCheckboxCircleFill /></IconBtnSim>
                <BtnNao className='btn-nao btn-form' type="submit" value="Não. Eu não utilizei um benefício" /> <br /><br />
            </Form>

            <div className='btn'>
                <input className='btn-depois' type="submit" value="Responder depois" />
                <input className='btn-salvar' type="submit" value="Salvar resposta" />
            </div>

        </div>
    )
}

const IconPresente = styled.div `
    margin: 20px auto;
    width: 32px;
    height: 32px;
`

const Form = styled.form`
    margin-top: 5px;
    margin-left: 15px;
`

const BtnSim = styled.input`
    background-color: rgba(255, 161, 0, 0.3);
    border: none;
    font-weight: 700;
`
const BtnNao = styled.input`
    background-color: #F5F5F5;
    border: 2px solid #C4C4C4;
    font-weight: 400;
`

const IconBtnSim = styled.span`
    position: absolute;
    margin-top: -36px;
    margin-left: 155px;
    width: 30px;
    height: 30px;
    color: #FFA100;
`


export { Tela1 }
