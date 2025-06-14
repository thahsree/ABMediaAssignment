import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  image?: string;
  heading?: string;
  startingFrom?: string;
  cardType: string;
}

const PlacesCard = ({ cardType, image, heading, startingFrom }: Props) => {
  return (
    <Card
      sx={{
        width: {
          sm: "100%",
          md: "40%",
          lg: "30%",
        },
        borderRadius: "20px",
        overflow: "hidden", // Ensures shadow and content respect border radius
        boxShadow: "0 0px 24px rgba(0, 0, 0, 0.2)", // Smooth rounded shadow
        backgroundColor: "whitesmoke",
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={image}
        alt={heading}
        sx={{ borderRadius: "20px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: cardType === "TopSelling" ? "column" : "",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "#10a2a8", fontWeight: 600 }}
        >
          {heading}
        </Typography>
        {cardType === "popularDestination" && (
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            Starting from <span className="price">{startingFrom}</span>
          </Typography>
        )}

        {cardType === "TopSelling" && (
          <Button
            sx={{
              borderRadius: "999px",
              backgroundColor: "#60b9b7",
              paddingX: "20px",
              paddingY: "10px",
              color: "#FFFFFF",
              width: "100%",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            View Details
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PlacesCard;
