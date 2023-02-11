import Section from "./styles";

const Technologies = ({user}) => {

    console.log(user)

    return (
        <Section>
            <div className="techContainer">
                <h2>Technologias</h2>
                <button>+</button>
            </div>
            <ul>
                {/* {user.tech.length === 0 
                    ? (<p>Você não tem technologias novas no momento</p>)
                    : console.log())
                } */}
            </ul>

        </Section>
    )
}

export default Technologies;