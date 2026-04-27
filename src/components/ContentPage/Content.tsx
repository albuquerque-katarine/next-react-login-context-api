import { ReactNode } from "react";

interface ContentProps {
    title: string;
    children: ReactNode
}

const Content = ({title, children}: ContentProps) => {
    return(
        <main className="main">
            <h3>{title}</h3>
            {children}
        </main>
    )
}

export default Content;