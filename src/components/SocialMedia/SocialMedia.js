import Box from "@mui/material/Box";

import Facebook from "../../icons/facebook.svg";
import Twitter from "../../icons/twitter.svg";
import Instagram from "../../icons/instagram.svg";

export default function SocialMedia() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ padding: "20px", cursor: "pointer" }}
        src={Facebook}
        alt="facebook"
        width={13}
        height={25}
      />
      <img
        style={{ padding: "20px", cursor: "pointer" }}
        src={Instagram}
        alt="instagram"
        width={27}
        height={27}
      />
      <img
        style={{ padding: "20px", cursor: "pointer" }}
        src={Twitter}
        alt="twitter"
        width={27}
        height={22}
      />
    </Box>
  );
}
