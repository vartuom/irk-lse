import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { pricePerHour, researchServicesData } from '../../constants/prices';

function createData(title: string, hours: number[], tip: string) {
  return {
    title,
    cat1: hours[0] * pricePerHour,
    cat2: hours[1] * pricePerHour,
    cat3: hours[2] * pricePerHour,
    tip,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: '0' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">{row.cat1}</TableCell>
        <TableCell align="right">{row.cat2}</TableCell>
        <TableCell align="right">{row.cat3}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>АБОБА</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = researchServicesData.map((item) =>
  createData(item.title, item.hours, item.tip)
);

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Роды (виды) судебных экспертиз</TableCell>
            <TableCell align="right">1&nbsp;категория</TableCell>
            <TableCell align="right">2&nbsp;категория</TableCell>
            <TableCell align="right">3&nbsp;категория</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
