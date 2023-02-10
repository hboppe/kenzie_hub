import { Outlet } from "react-router-dom";
import StyledHome from "./styles"

const Home = () => {
    return (
        <StyledHome>
            <Outlet/>
        </StyledHome>
    )
}

export default Home;