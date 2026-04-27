import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomePage from "./home_page/HomePage";

export default function Home() {
  return (
    <div id="page">
        <Header title="React Context API"/>
        <HomePage/>
        <Footer frase="React Portfólio@2016"/>
    </div>
  );
}
