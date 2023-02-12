import Li from "./style";

const TechCard = ({props: {title, status}}) => {
    return (
        <Li>
            <p>{title}</p>
            <p>{status}</p>
        </Li>
    )
}

export default TechCard;