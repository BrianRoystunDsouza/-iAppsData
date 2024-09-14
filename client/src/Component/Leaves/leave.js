import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios"

export default function Leave() {

    const [rows, setRows] = useState([])
    useEffect(() => {
        fetchLeaveData();
    }, []);

    const fetchLeaveData = async () => {
        try {
            const { data } = await axios.post('/leaves');

            setRows(prev => (data !== prev ? data : prev));

        } catch (error) {
            console.error('Error fetching dashboard data:', error);
        }
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="left">Leave Balance</TableCell>
                            <TableCell align="left">Leave Type</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.employee?.firstName}
                                </TableCell>
                                <TableCell align="left">{row.employee?.leaveBalance}</TableCell>
                                <TableCell align="left">{row.leaveType}</TableCell>
                                <TableCell align="left">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
