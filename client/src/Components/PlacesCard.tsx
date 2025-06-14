import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const PlacesCard = () => {
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
      <CardActionArea
        sx={{
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
          backgroundColor: "whitesmoke",
          borderRadius: "20px",
        }}
      >
        <CardMedia
          component="img"
          height="280"
          image="/Kashmir.jpeg"
          alt="Kashmir"
          sx={{ borderRadius: "20px" }}
        />
        <CardContent
          sx={{
            display: "flex",
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
            Kashmir
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            Starting from <span className="price">4999</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlacesCard;
