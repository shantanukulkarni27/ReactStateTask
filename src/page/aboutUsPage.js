import { Header } from "../module"
import { HeaderWrapper, ImgHolder, HeadTexts } from '../components/styled';
import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

const AboutUsPage = (props) => {
    const themes = useContext(ThemeContext)
    return (
        <div className="wrapper" style={themes.theme}>
            <Header />
            <HeaderWrapper>
                <ImgHolder>
                    <img src="/Images/person.png" alt="image" />
                    <p>person</p>
                </ImgHolder>
                <HeadTexts >
                    <h1>John Dyle</h1>
                    <h5>Senior Lawyer</h5>
                    <h6 >Legal advicer </h6>
                    <h6>admitted at  High Court </h6>
                </HeadTexts>
            </HeaderWrapper>
        </div>
    )
}

export default AboutUsPage;