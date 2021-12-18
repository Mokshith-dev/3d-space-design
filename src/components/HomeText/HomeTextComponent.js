import { Box } from "@mui/system";

export default function HomeTextComponent() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          width: "40%",
          justifyContent: "center",
          paddingBottom: "80px",
        }}
      >
        <span
          style={{
            fontSize: "72px",
            lineHeight: "79px",
            fontWeight: 700,
            marginBottom: "34px",
          }}
        >
          Adventure Together
        </span>
        <span
          style={{ fontSize: "18px", lineHeight: "27px", fontWeight: "500" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
          potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum ut cras
          nullam porta id dolor arcu, quis.
        </span>
      </Box>
    </>
  );
}
