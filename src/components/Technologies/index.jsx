import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import AddTechModal from "../AddTechModal";
import TechCard from "../TechCard";
import Section from "./styles";

const Technologies = ({user}) => { 

    const {navigate} = useContext(UserContext)
    const {openAddNewTechModal, showAddNewTechModal} = useContext(TechContext)
    
    if(!user){
        return navigate(-1)
    }

    return (
        
        <Section>
            <div className="sectionContainer">
                <div className="techContainer">
                    <h2>Tecnologias</h2>
                    <button onClick={() => openAddNewTechModal()}>+</button>
                </div>
                <ul>
                    {user && user.techs && user.techs.length !== 0 ? user.techs.map(item => <TechCard  key={item.id} tech={item}/>)
                
                    : <p>No momento, você nao possui tecnologias cadastradas.</p> }
                                    
                </ul>
            </div>
            {showAddNewTechModal && <AddTechModal/>}
        </Section>
    )
}

export default Technologies;