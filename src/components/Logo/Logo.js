import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Logo() {
  return (
    <Typography component="div">
      <Box
        sx={{
          fontFamily: "default",
          fontSize: "48px",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          paddingTop: "20px",
          cursor: "pointer",
        }}
      >
        Xae
      </Box>
    </Typography>
  );
}
