import React, { createContext, ReactNode, useContext, useState } from "react"

interface ContextType {
    nome:string;
    setNome: React.Dispatch<React.SetStateAction<string>>;
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    senha: string;
    setSenha: React.Dispatch<React.SetStateAction<string>>;
    data: string,
    mensagem: string;
    getLogin: () => void;
}

const Context = createContext<ContextType | undefined>(undefined);

interface ContextProps {
    children: ReactNode
}

export function ContextLogin({ children }: ContextProps) {

    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");

    const limpaCampos = () => {
        setNome("");
        setEmail("");
        setSenha("");
        setMensagem("");
    }
    
    const getLogin = () : void => {
        setMensagem("");
        if(nome!=""||email!=""||senha!="") {
            setData(nome);
            limpaCampos();
        }
        else {
            setMensagem("Informe nome, email e senha para continuar!");
        }
        //console.log(data);
    }

    return (
        <Context.Provider value={{ nome, setNome, email, setEmail, senha, setSenha, mensagem, getLogin, data }}>
            {children}
        </Context.Provider>
    )
}

export function useContextLogin(): ContextType {
    const context = useContext(Context);
    if (!context) {
        throw new Error('Use useContextLogin dentro de ContextLogin.');
    }
    return context;
}