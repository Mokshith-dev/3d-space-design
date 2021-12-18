import Box from "@mui/material/Box";
import Logo from "../../components/Logo/Logo";
import NavBar from "../../components/NavBar/NavBar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import HomeBodyContainer from "../HomeBody/HomeBodyContainer";
import HomeFooterContainer from "../HomeFooter/HomeFooterContainer";

export default function HomeContainer() {
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "10%",
          }}
        >
          <Logo />
          <SocialMedia />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            height: "100%",
          }}
        >
          <NavBar />
          <HomeBodyContainer />
          <HomeFooterContainer />
        </Box>
      </Box>
    </>
  );
}
