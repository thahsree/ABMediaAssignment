import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import Content from "../Components/Content";
import PlacesCard from "../Components/PlacesCard";
import useDestination from "../hooks/useDestination";
const PopularDestination = () => {
  const { data, isLoading } = useDestination();

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
      <Content page="Destination" />
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
            cardType="popularDestination"
            heading={item.destination}
            image={item.image}
            startingFrom={item.startingFrom}
            key={item._id}
          />
        ))}
      </Box>
      <Box
        sx={{
          marginTop: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box>
          <Button
            disableRipple
            sx={{
              borderRadius: "50%",
              width: 64,
              height: 64,
              minWidth: 0,
              padding: 0,
              overflow: "hidden",
            }}
          >
            <HiArrowCircleLeft
              size={64}
              style={{ color: "lightgray", width: "100%", height: "100%" }}
            />
          </Button>
          <Button
            disableRipple
            sx={{
              borderRadius: "50%",
              width: 64,
              height: 64,
              minWidth: 0,
              padding: 0,
              overflow: "hidden",
            }}
          >
            <HiArrowCircleRight size={64} style={{ color: "#efcc00" }} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default PopularDestination;
