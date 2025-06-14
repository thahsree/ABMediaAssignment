import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
const PopularDestinations = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          marginTop: "60px",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "50px", fontWeight: "bold", color: "#10a2a8 " }}
        >
          {" "}
          Explore Most Popular Destinations{" "}
        </Typography>

        <Box sx={{ width: "500px", textAlign: "center" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
            Plan your perfect trip with our most loved and best-selling tour
            packages.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PopularDestinations;
