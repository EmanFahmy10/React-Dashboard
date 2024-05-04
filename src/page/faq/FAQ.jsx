import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />

      <Stack direction={"column"} gap={2}>
        <Accordion defaultExpanded onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              General settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              I am an accordion
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              voluptate sint at assumenda, illum aut non? Atque nulla nam
              expedita, praesentium voluptatem impedit ea fugiat tenetur rerum
              et aliquid pariatur?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          // @ts-ignore
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, aliquid sit eveniet et explicabo hic architecto
              dignissimos, dolores alias doloremque laboriosam inventore. Velit
              aliquid nulla debitis saepe beatae aperiam aspernatur?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Advanced settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              veritatis nihil velit aut porro culpa earum deserunt, minus quo.
              Non numquam modi qui consequatur a nulla molestiae voluptatum
              ipsum rem.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Personal data
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At optio
              reprehenderit dolorum quaerat quasi illum natus, sequi fuga
              repudiandae necessitatibus esse unde nulla ipsa voluptas,
              voluptates, eius suscipit quo quibusdam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          // @ts-ignore
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              General settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              I am an accordion
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              qui suscipit? Facilis eaque dolore quos rerum voluptatum libero,
              consequatur laudantium doloremque distinctio consequuntur placeat,
              aliquid ad? Perferendis quia dolorum aut?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          // @ts-ignore
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              fugiat quae quaerat amet dolorum dolore repudiandae ipsam. Quam
              perspiciatis quaerat magnam? Vel, nisi. Voluptates consequuntur
              vero corrupti rerum magni. Accusantium!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Advanced settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              accusamus adipisci consequuntur consectetur excepturi neque et
              nesciunt recusandae quia quos? Consectetur sint natus sunt magni
              perspiciatis in esse? Quis, voluptas!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
};

export default FAQ;
