import { ContextLogin, useContextLogin } from "@/context/Context";
import Field from "../Field/Field";
import ResultData from "../ResultData/ResultData";

const FormContent = () => {

    const { nome, setNome, email, setEmail, senha, setSenha, mensagem, getLogin, data } = useContextLogin();

    return (
        <form className="form">
            <ContextLogin>
                <Field label="Nome" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                <Field label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <Field label="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                <button type="button" onClick={getLogin}>Entrar</button>
                <p className="form_mensagem">{ mensagem != "" ? mensagem : ""}</p>
                <ResultData>
                    <p>Olá<strong>{data != "" ? ` ${data}` : ""}</strong>, seja bem vindo(a)!</p>                    
                </ResultData>
            </ContextLogin>
        </form>
    )
}

export default FormContent;