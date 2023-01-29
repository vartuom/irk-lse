import React, { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IAppAccordion {
    title: string;
    children: ReactNode;
    lastRow?: boolean;
    noBorders?: boolean;
}

export default function AppAccordion({
    title,
    children,
    lastRow = false,
    noBorders = false,
}: IAppAccordion) {
    return (
        <div>
            <Accordion
                square
                disableGutters
                sx={{
                    border: `${noBorders ? "none" : "1px solid #D9D9DE"}`,
                    borderWidth: `${lastRow ? "1px 0" : "1px 0 0 0"}`,
                    boxShadow: 0,
                }}
            >
                <AccordionSummary
                    sx={{ padding: "0" }}
                    expandIcon={<ExpandMoreIcon sx={{ color: "#0061D9" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: 18, color: "#0061D9" }}>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "0" }}>
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
