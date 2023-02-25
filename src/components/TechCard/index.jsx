import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import EditTechModal from "../EditTechModal";
import Li from "./style";

const TechCard = ({tech}) => {
    
    const {setEditTech, editTech, setShowModal} = useContext(TechContext);

    const editTechnology =  () => {
        setEditTech(tech);
        setShowModal(true);
    }
    
    return (
        <>
            <Li onClick={editTechnology}>
                <h3 className="title3">{tech.title}</h3>
                <p className="headline">{tech.status}</p>
            </Li>

            {editTech && <EditTechModal tech={editTech}/>}
            
        </>
    )
}

export default TechCard;