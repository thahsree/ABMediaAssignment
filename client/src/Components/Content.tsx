import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

interface Props {
  page: string;
}
const Content = ({ page }: Props) => {
  const heading =
    page === "Destination"
      ? "Explore Most Popular Destinations"
      : "Top Selling Tour Packages of India";

  const desc =
    page === "Destination"
      ? "Plan your perfect trip with our most loved and best-selling tour packages."
      : "Stay updated with our latest news and happenings through Informe";
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
          {heading}
        </Typography>

        <Box sx={{ width: "500px", textAlign: "center" }}>
          <Typography sx={{ fontSize: "20px", fontWeight: 400 }}>
            {desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
