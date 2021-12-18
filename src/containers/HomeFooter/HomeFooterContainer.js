import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import Space from "../../images/space.png";
import LinkSvg from "../../icons/link.svg";

export default function HomeFooterContainer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "28.5%",
          width: "100%",
          color: "white",
          backdropFilter: "blur(50px)",
          justifyContent: "flex-start",
          background:
            "radial-gradient(100% 2631.09% at 0% 0%, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.558) 100%);",
        }}
      >
        <Box sx={{ width: "24%", height: "100%", marginLeft: "125px" }}>
          <img src={Space} alt="Space" height="100%" width="100%" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "58%",
            padding: "0 5%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <Link
                href="#"
                underline="hover"
                color="white"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="36px"
              >
                Exploration
              </Link>
            </Box>
            <Box sx={{ width: "25%", paddingLeft: "120px" }}>
              <Link
                href="#"
                underline="hover"
                color="white"
                fontSize="24px"
                fontWeight="bold"
                lineHeight="36px"
              >
                Footprint
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "flex-start",
              marginTop: "20px",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                width: "50%",
                position: "relative",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              id potenti faucibus nec, rhoncus, vulputate
              <img
                style={{
                  position: "absolute",
                  cursor: "pointer",
                  right: "-10%",
                  bottom: "3%",
                }}
                src={LinkSvg}
                alt="link"
              />
            </span>

            <span
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                width: "25%",
                paddingLeft: "120px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur{" "}
            </span>
          </Box>
        </Box>
      </Box>
    </>
  );
}
