import { ReactNode } from "react";

interface ResultDataProps {
    children: ReactNode
}

const ResultData = ({children}: ResultDataProps) =>{
    return(
        <section className="form_result">{children}</section>
    );
}

export default ResultData;