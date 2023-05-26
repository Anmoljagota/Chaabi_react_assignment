import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Styles from "../AllCss/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SendIcon from "@mui/icons-material/Send";
const GameHome = () => {
  const images = [
    {
      img: "https://www.typingtest.com/trainer/assets/images/TTrainer_slide_2.png",
    },
    {
      img: "https://www.typingtest.com/trainer/assets/images/TTrainer_slide_3.png",
    },
    {
      img: "https://www.typingtest.com/trainer/assets/images/TTrainer_slide_4.png",
    },
    {
      img: "https://www.typingtest.com/trainer/assets/images/TTrainer_slide_1.png",
    },
    {
      img: "https://www.typingtest.com/trainer/assets/images/TTrainer_slide_2.png",
    },
  ];

  return (
    <div style={{ width: "48%", margin: "auto" }}>
      <Stack direction="row" spacing={1}>
        <img
          src="https://www.typingtest.com/trainer/assets/images/logo_head.png"
          alt="some error"
          height="40px"
        />
        <h5 className={Styles.logo}>Upskills Your Typing Speed - Free</h5>
      </Stack>
      <div className={Styles.gameimages}>
        <Carousel
          autoPlay
          infiniteLoop
          stopOnHover
          showIndicators={true}
          style={{ width: "100%", height: "auto" }}
          showThumbs={false}
        >
          {images.map((ele, i) => (
            <Box key={i}>
              <img src={ele.img} alt="some error"/>
            </Box>
          ))}
        </Carousel>
      </div>
      <Box width="60%" margin="auto">
        <Button
          endIcon={<SendIcon />}
          className={Styles.btn}
          style={{
            background: "#ff9c00",
            padding: "8px 0px",
            color: "#ffffff",
            width: "156px",
            fontSize: "18px",
            borderRadius: "10px",
            fontStyle: "italic",
            border: "4px solid #ffffff",
          }}
        >
          Start
        </Button>
      </Box>
    </div>
  );
};

export default GameHome;
