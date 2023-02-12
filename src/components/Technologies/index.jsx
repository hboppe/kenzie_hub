import TechCard from "../TechCard";
import Section from "./styles";

const Technologies = ({user, loading}) => {   


    return (
        <Section>
            <div className="techContainer">
                <h2>Technologias</h2>
                <button>+</button>
            </div>
            <ul>
                {user && user.techs && user.techs.length !== 0 ? user.techs.map(item => <TechCard  key={item.id}props={item}/>)
                 
                : <p>No momento, você nao possui tecnologias cadastradas.</p> }
                {/* {user?.techs && user.techs.map(item => <TechCard  key={item.id}props={item}/>)} */}
            
            </ul>

        </Section>
    )
}

export default Technologies;