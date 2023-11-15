import styles from './styles.module.css'
import { useState } from 'react'

export default function Gerador() {

    const [senha, setSenha] = useState('. . .')
    const [copiar, setCopiar] = useState('Copiar')
    const [customSenha, setcustomSenha] = useState(6)
    const [mostrarInput, setMostrarInput] = useState(false)

    const tamanhoSenha = mostrarInput ? customSenha : 5

    function gerarSenha() {
        const caracteres = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
        let novaSenha = ''
        for (let i = 0; i < tamanhoSenha; i++) {
            const posicao = Math.floor(Math.random() * caracteres.length)
            novaSenha += caracteres[posicao]
        }
        setSenha(novaSenha)
        setCopiar('Copiar')
    }

    function copiarSenha() {
        window.navigator.clipboard.writeText(senha)
        setCopiar('Copiado!')
    }

    return (
        <div className={styles.container}>
            <h1>Gerador de senhas</h1>

            <div>
                <label htmlFor="mostrarInput">Customizar tamanho:</label>
                <input 
                    type="checkbox" 
                    name="mostrarInput" 
                    id="mostrarInput" 
                    value={mostrarInput} 
                    onChange={() => setMostrarInput(stateAtual => !stateAtual)} 
                />
            </div>

            {mostrarInput ? (
                <div>
                    <label htmlFor="tamanhoSenha">Tamanho:</label>
                    <input 
                        type="number" 
                        name="tamanhoSenha" 
                        id="tamanhoSenha" 
                        min={1} 
                        value={customSenha} 
                        onChange={(ev) => setcustomSenha(+ev.target.value)}
                    />
                </div>
            ) : null}

            <button onClick={gerarSenha}>Gerar senha de {tamanhoSenha} caracteres</button>
            <button onClick={copiarSenha}>{copiar}</button>

            <p>{senha}</p>
        </div>
    )
}