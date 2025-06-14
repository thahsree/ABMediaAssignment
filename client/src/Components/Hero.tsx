import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/system";

const Hero = () => {
  return (
    <ParentComponent>
      <Box
        sx={{
          textAlign: "start",
          width: "50%",
          height: "auto",
          color: "#FFFFFF",
          position: "absolute",
          top: "20%",
        }}
      >
        <Typography sx={{ fontSize: "5rem", fontWeight: "bold" }}>
          Discover Your Next Adventure
        </Typography>
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          Choose from our curated experiences, customized for every kind of
          traveler.
        </Typography>
        <Box
          sx={{
            marginTop: "3rem",
          }}
        >
          <Button
            sx={{
              borderRadius: "999px",
              backgroundColor: "#efcc00",
              paddingX: "20px",
              paddingY: "10px",
              color: "#000000",
              width: "250px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "1px",
          left: "0px",
          padding: "25px",
          width: "40%",
          backgroundColor: "#00000080",
          color: "white",
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          alignItems: "center",
          height: "auto",
        }}
      >
        <Box
          sx={{
            padding: "10px 15px",
            whiteSpace: "nowrap",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            Easy Booking
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "10px 15px",
            whiteSpace: "nowrap",
            borderLeft: "1px solid #ffffff",
            borderRight: "1px solid #ffffff",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            Curated Destinations
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "10px 15px",
            whiteSpace: "nowrap",
          }}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
            Trusted Support
          </Typography>
        </Box>
      </Box>
    </ParentComponent>
  );
};

const ParentComponent = styled("div")({
  position: "relative",
  width: "100vw",
  height: "120vh",
  backgroundImage: `url("/beach2.jpeg")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  paddingLeft: "10rem",
  paddingRight: "10px",
  overflow: "hidden",

  // Dark overlay using ::before
  "&::before": {
    content: `""`,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay
    zIndex: 1,
  },

  // Ensure content appears above the overlay
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
});

export default Hero;
