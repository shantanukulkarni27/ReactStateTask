import {Header} from "../module/index"
import { HeaderWrapper,ImgHolder,HeadTexts,BioSection,BioList,MyArticle,ArticleHead } from '../components/styled';
import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";
import ThemeButton from "../components/themeButton";

const AboutUsPage =(props)=>{
    const themes= useContext(ThemeContext)
return(
    <div className="wrapper" style={themes.theme}>
        <Header/>
         <HeaderWrapper>
           <ImgHolder>
           <img src="/Images/person.png" alt="image"/>
           <p>person</p>
           </ImgHolder>
           <HeadTexts >
               <h1>John Dyle</h1>
               <h5>Senior Lawyer</h5>
               <h6 >Legal advicer </h6>
               <h6>admitted at  High Court </h6>
           </HeadTexts>
           </HeaderWrapper>
           {/* <ThemeButton/> */}
           {/* <BioSection>
           <ul>
               <BioList>Short Biography</BioList>
               <BioList>Academic Curriculum</BioList>
               <BioList>Other Activities</BioList>
               <BioList>Memberships</BioList>
           </ul>
           <MyArticle>
               <ArticleHead>SHORT BIOGRAPHY</ArticleHead>
               <p>Fotis A. Karayannopoulos is a Senior Associate at KLC Law Firm. He is a practicing lawyer with 24 years field experience in Greece and many EU and non-EU States on all sorts of international law matters and business transactions.
                    He teaches International and EU Business Law in France and non-EU countries. Fotis is the Special Counsel for the Greek National Broadcaster (ERT) and a member of the Legal Committee of European Broadcasting Union. He also consults foreign governments (Balkans, Asia, Africa) on international law and foreign investment matters. 
                  <br/><br/> His extensive experience covers all matters on Corporate and Business Law, European Union Law, International transactions, Intellectual Property (IP) Law, Media Law, Human Rights and Justice Reform, foreign investments and public procurement.</p>
           </MyArticle>
       </BioSection> */}
       
    </div>
)
}

export default AboutUsPage;