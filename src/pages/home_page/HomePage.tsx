import { ContextLogin } from "@/context/Context";
import Content from "../../components/ContentPage/Content";
import FormContent from "../../components/FormContent/FormContent";

const HomePage = () => {
    return (
        <Content title="Login Next React">
            <ContextLogin>
                <FormContent/>
            </ContextLogin>
        </Content>
    )
}

export default HomePage;