import Li from "./style";

const TechCard = ({props: {title, status}}) => {
    return (
        <Li>
            <h3 className="title3">{title}</h3>
            <p className="headline">{status}</p>
        </Li>
    )
}

export default TechCard;