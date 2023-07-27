import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FC, ReactElement } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IAccordionMenuItemProps {
  sumary: string | ReactElement;
  children: ReactElement;
  expanded?: boolean;
  onClick?(): void;
}

const AccordionMenuItem: FC<IAccordionMenuItemProps> = ({
  sumary,
  children,
  expanded,
  onClick,
}) => {
  return (
    <Accordion
      onChange={onClick}
      expanded={expanded}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: 0,
        "&::before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        sx={{ p: 0 }}
        expandIcon={<ExpandMoreIcon sx={{ color: "text.primary" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{sumary}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionMenuItem;
