import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { CiClock2, CiWallet } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";

interface Props {
  heading: string;
  desc: string;
}

const IconContainer = ({ heading, desc }: Props) => {
  //adding icons according to the heading input
  const Icon =
    heading === "Save Time"
      ? CiClock2
      : heading === "Save Money"
        ? CiWallet
        : heading === "Trusted Network"
          ? GiNetworkBars
          : MdMenuBook;
  return (
    <IconComponentParent>
      <Box
        sx={{
          width: "170px",
          height: "170px",
          borderRadius: "100%",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon size={84} style={{ color: "#10697d" }} />
      </Box>
      <Box sx={{ px: "20px" }}>
        <Typography
          sx={{ textAlign: "center", fontSize: "20px", fontWeight: 600 }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            textWrap: "wrap",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 300,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </IconComponentParent>
  );
};
const IconComponentParent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
  padding: "10px",
  width: "100%", // default width
  [theme.breakpoints.up("md")]: {
    width: "20%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "20%",
  },
}));
export default IconContainer;
