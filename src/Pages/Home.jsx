import React from "react";
import Box from "@mui/material/Box";
import Styles from "../AllCss/Home.module.css";
import GameHome from "../components/GameHome";
const Home = () => {
    
  return (
    <div>
      <Box className={Styles.mainbox}>
        <Box  height="130px">
          <img
            className={Styles.bird1}
            src="https://i.gifer.com/ZHug.gif"
            alt=""
          />
        </Box>
 <GameHome />
      </Box>
    </div>
  );
};

export default Home;
