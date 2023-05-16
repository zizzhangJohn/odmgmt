import { Outlet } from "react-router-dom";
import NavBar from "./nav/NavBar";
import { Container } from "@mui/system";

export default function Layout() {
    return (
        <>
            <NavBar />
            <Container sx={{ p: '2rem' }}>
                <Outlet />
            </Container>
        </>
    )
}
