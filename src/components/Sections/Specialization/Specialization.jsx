import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import IconCard from "../../Hero/IconCard";
import icon1 from "../../../assets/Drugstore.png";
import icon2 from "../../../assets/primary-care.png";
import icon3 from "../../../assets/cardiology.png";
import icon4 from "../../../assets/mri.png";
import icon5 from "../../../assets/blood-test.png";
import icon6 from "../../../assets/piscologist.png";
import icon7 from "../../../assets/X-Ray.png";

export default function Specialization() {
  const data = [
    { icon: icon1, title: "Dentistry" },
    { icon: icon2, title: "Primary Care" },
    { icon: icon3, title: "Cardiology" },
    { icon: icon4, title: "MRI Resonance" },
    { icon: icon5, title: "Blood Test" },
    { icon: icon6, title: "Piscologist" },
    { icon: icon1, title: "Laboratory" },
    { icon: icon7, title: "X-Ray" },
  ];

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4}>
          Find by Specialisation
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          mb={5}
        >
          {data.map((item, index) => (
            <Grid key={index} size={{ xs: 2, sm: 4, md: 3 }}>
              <IconCard
                img={item.icon}
                title={item.title}
                bgColor={"#FFFFFF"}
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
}
