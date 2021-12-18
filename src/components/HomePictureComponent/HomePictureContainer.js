import SpaceSVG from "../../images/3d-space.png";
import "./HomePictureComponentStyle.css";

export default function HomePictureComponent() {
  return (
    <>
      <div
        className="home-picture"
        style={{
          backgroundImage: `url(${SpaceSVG})`,
          //width: "60%",
          //height: "100%",
          //minWidth: "60%",
          //   maxWidth: "1090px",
          //maxWidth: "863px",
          //maxWidth: "1090px",
          //   width: "800px",
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   position: "absolute",
          //   top: "16%",
          //   left: "28%",
        }}
      ></div>
      {/* <img src={SpaceSVG} alt="3d-space" width={500} height={500} /> */}
    </>
  );
}
