interface FooterProps {
    frase: string;
}

const Footer = ({frase}: FooterProps) => {
    return(
        <footer className="footer">{frase}</footer>
    )
}

export default Footer;