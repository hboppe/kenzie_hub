import Section from "./styles";

const UserInfo = ({user}) => {
    // console.log(user)
    return (
        <Section>
            <h1 className="title1">Olá,{user.name} </h1>
            <p className="headline">{user["course_module"]}</p>

        </Section>
        
    )
}

export default UserInfo;