import { Box } from "@mui/system";
import HomePictureComponent from "../../components/HomePictureComponent/HomePictureContainer";
import HomeTextComponent from "../../components/HomeText/HomeTextComponent";

export default function HomeBodyContainer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: "0 0 0 125px",
          height: "57%",
          borderLeft: "1px solid white",
          position: "relative",
        }}
      >
        <HomeTextComponent />
        <HomePictureComponent />
      </Box>
    </>
  );
}
