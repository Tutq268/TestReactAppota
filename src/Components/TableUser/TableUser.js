import React from 'react'

//REDUX
import {useSelector} from 'react-redux'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core'
import styles from './style'

const TableUser = (props) => {
    const {classes} = props
    
    const {DATA_TABLE_USER} = useSelector(state => ({...state.ChartReducer}))

   return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell align="right">STT</TableCell>
          <TableCell align="right">Địa Điểm</TableCell>
          <TableCell align="right">Số Lượng</TableCell>
          <TableCell align="right">Dung Lượng</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {DATA_TABLE_USER.map((value,key) => (
                <TableRow key={key}>
                <TableCell align="right">{key} </TableCell>
                <TableCell align="right">{value.site}</TableCell>
                <TableCell align="right">{value.num_sta}</TableCell>
                <TableCell align="right">{value.wlan_bytes}</TableCell>
                </TableRow>
          ))}
         
      </TableBody>
    </Table>
  </Paper>
);
}
export default withStyles(styles)(TableUser)