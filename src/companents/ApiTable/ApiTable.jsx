import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import "./ApiTable.scss";

export default function ApiTable() {
  const arr = [
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    }, {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },

    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },
    {
      mca_address: "A rem debitis quasi cum vitae ",
      created_at: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A rem debitis quasi cum vitae architecto veniam iste accusamus voluptas neque",
      updated_at: "awdwwqd1d 12 13123123 sa wda ds d12e11",
    },

  ]

  return (
    <>
      <TableContainer className="apitable" component={Paper}>
        <Table className='apitable__inner' aria-label="simple table">
          <TableHead className='apitable__head'>
            <TableRow>
              <TableCell className='apitable__mac-address'>Mac Address</TableCell>
              <TableCell className='apitable__created-at'>Created AT</TableCell>
              <TableCell className='apitable__updated-at'>Updated AT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((itme) => (
              <TableRow
                key={itme.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{itme.mca_address}</TableCell>
                <TableCell>{itme.created_at}</TableCell>
                <TableCell>{itme.updated_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
