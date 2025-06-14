import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Content from "../Components/Content";
import PlacesCard from "../Components/PlacesCard";

const TopSelling = () => {
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
      }}
    >
      <Content page="Topselling" />

      <Box
        sx={{
          marginTop: "5rem",
          marginBottom: "3rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          justifyContent: "center",

          width: "100%",
        }}
      >
        <PlacesCard cardType="TopSelling" />
      </Box>
    </Container>
  );
};

export default TopSelling;
