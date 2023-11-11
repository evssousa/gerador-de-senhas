import styles from './styles.module.css'
import { useState } from 'react'

export default function Gerador() {

    const [senha, setSenha] = useState('( será gerado uma senha de 12 caracteres )')
    const [copiar, setCopiar] = useState('Copiar')

    function gerarSenha() {
        const caracteres = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
        const tamanho = 12
        let novaSenha = ''
        for (let i = 0; i < tamanho; i++) {
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

            <button onClick={gerarSenha}>Gerar</button>
            <button onClick={copiarSenha}>{copiar}</button>

            <p>{senha}</p>
        </div>
    )
}