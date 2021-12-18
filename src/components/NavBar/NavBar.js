import Box from "@mui/material/Box";
import NavBarMenuItem from "../NavBarMenuItem/NavBarMenuItem";
import SunSvg from "../../icons/sun.svg";

export default function NavBar() {
  let menuList = ["Home", "About", "Gallery", "Contact"];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          color: "white",
          padding: "20px",
          height: "10%",
          borderLeft: "1px solid white",
        }}
      >
        {menuList.map((item, idx) => (
          <NavBarMenuItem item={item} key={idx} />
        ))}
        <img
          style={{
            marginLeft: "40px",
            marginRight: "20px",
            cursor: "pointer",
          }}
          src={SunSvg}
          width={35}
          height={35}
          alt="sun"
        />
      </Box>
    </>
  );
}
