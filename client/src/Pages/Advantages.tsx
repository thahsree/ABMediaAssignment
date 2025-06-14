import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import IconContainer from "../Components/IconContainer";

const Advantages = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        px: "7rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "3rem",
        backgroundColor: "#7dd4d2",
        color: "#FFFFFF",
        py: "70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontSize: "50px", fontWeight: "bold" }}>
          Our Advantages
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
          You can rely on our experience and the quality of services we provide.{" "}
          <br />
          Here are other reasons to book tours at Treat Holidays
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconContainer
          heading="Save Time"
          desc="No more switching for 
packages or plans."
        />
        <IconContainer
          heading="Save Money"
          desc=" Compare, negotiate, 
and choose the best.."
        />
        <IconContainer
          heading="Trusted Network"
          desc="A Trusted Network of 
7000+ Travel Agents"
        />
        <IconContainer
          heading="Multiple Options"
          desc="No more switching for 
packages or plans."
        />
      </Box>
    </Container>
  );
};

export default Advantages;
