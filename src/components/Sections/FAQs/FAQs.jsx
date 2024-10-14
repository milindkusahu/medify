import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import faqBanner from "../../../assets/faqs-banner.jpg";
import Accordion from "../../Accordion/Accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography color="primary.main" fontWeight={600} textAlign="center">
          Get Your Answer
        </Typography>
        <Typography textAlign="center" variant="h2" mb={2}>
          Frequently Asked Questions
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 10 }}
          alignItems="center"
        >
          <Grid size={{ xs: 2, sm: 4, md: 5 }}>
            <Box src={faqBanner} component="img" width={1} height="auto" />
          </Grid>

          <Grid size={{ xs: 2, sm: 4, md: 5 }}>
            <Box maxWidth={450}>
              <Accordion data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
