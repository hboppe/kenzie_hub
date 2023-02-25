import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import TechCard from "../TechCard";
import Section from "./styles";

const Technologies = ({user}) => { 

    const {navigate} = useContext(UserContext)
    
    if(!user){
        return navigate(-1)
    }

    return (
        
        <Section>
            <div className="sectionContainer">
                <div className="techContainer">
                    <h2>Technologias</h2>
                    <button>+</button>
                </div>
                <ul>
                    {user && user.techs && user.techs.length !== 0 ? user.techs.map(item => <TechCard  key={item.id} tech={item}/>)
                
                    : <p>No momento, você nao possui tecnologias cadastradas.</p> }
                                    
                </ul>
            </div>

        </Section>
    )
}

export default Technologies;