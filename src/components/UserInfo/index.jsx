import Section from "./styles";

const UserInfo = ({user}) => {
    
    return (
        <Section>
            <div>
                <h1 className="title1">Olá,{user.name} </h1>
                <p className="headline">{user["course_module"]}</p>
            </div>

        </Section>
        
    )
}

export default UserInfo;