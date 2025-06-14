import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Content from "../Components/Content";
import PlacesCard from "../Components/PlacesCard";
import useTopSelling from "../hooks/useTopSelling";

const TopSelling = () => {
  const { data, isLoading } = useTopSelling();

  console.log(data);
  if (isLoading) {
    return <p>Loading</p>;
  }
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
        {data.map((item: any) => (
          <PlacesCard
            cardType="TopSelling"
            heading={item.package}
            image={item.image}
            key={item._id}
          />
        ))}
      </Box>
    </Container>
  );
};

export default TopSelling;
