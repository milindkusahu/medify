import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SmsForm from "./SmsForm";

export default function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 10 }}
          alignItems="center"
        >
          <Grid size={{ xs: 2, sm: 4, md: 5 }}>
            <Box src={mobile} component="img" width={1} height="auto" />
          </Grid>

          <Grid size={{ xs: 2, sm: 4, md: 5 }}>
            <Box
              position="relative"
              pl={{ xs: "36px", md: "50px" }}
              mb={{ xs: 4, md: 0 }}
            >
              <Typography variant="h2" mb={2}>
                Download the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                src={arrow}
                component="img"
                width={{ xs: 24, md: 40 }}
                position="absolute"
                left={0}
                top={50}
              />

              <SmsForm />

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size={"large"}
                  startIcon={<img src={playstore} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                  }}
                  size="large"
                  startIcon={<img src={apple} height={24} />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
