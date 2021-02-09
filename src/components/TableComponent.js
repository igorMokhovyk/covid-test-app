import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";



function TableComponent(props) {

  const [data, setData] = useState()


  useEffect(() => {
    if (!props.country) {
      return null;
    } else {
      setData(props.country)
    }
  }, [props.country])



  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Total Confirmed</TableCell>
            <TableCell align="right">Total Recovered</TableCell>
            <TableCell align="right">Total Deaths</TableCell>
            <TableCell align="right">New Confirmed</TableCell>
            <TableCell align="right">New Recovered</TableCell>
            <TableCell align="right">New Deaths</TableCell>
          </TableRow>
        </TableHead>


        {!data ? null
          :
        <TableBody>
        {data.map((row) => (
          <TableRow key={row.ID}>
          <TableCell component="th" scope="row">
        {row.Country}
          </TableCell>
          <TableCell align="right">{row.TotalConfirmed}</TableCell>
          <TableCell align="right">{row.TotalRecovered}</TableCell>
          <TableCell align="right">{row.TotalDeaths}</TableCell>
          <TableCell align="right">{row.NewConfirmed}</TableCell>
          <TableCell align="right">{row.NewRecovered}</TableCell>
          <TableCell align="right">{row.NewDeaths}</TableCell>
          </TableRow>
          ))}
          </TableBody>
        }
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = (state) => ({
  country: state.country,
  global: state.global
})


const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
