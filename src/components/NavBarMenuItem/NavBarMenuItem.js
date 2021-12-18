import Box from "@mui/material/Box";

export default function NavBarMenuItem(props) {
  return (
    <Box
      sx={{
        paddingBottom: "10px",
        //margin: "10px 0 0 40px",
        marginRight: "40px",
        borderBottom: props.item === "Home" ? "3px solid white" : "",
        fontSize: "20px",
        lineHeight: "30px",
        cursor: "pointer",
      }}
      key={props.key}
    >
      {props.item}
    </Box>
  );
}
