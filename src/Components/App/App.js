import React,{useState,useEffect} from 'react'
import axios from 'axios'

import {useDispatch} from 'react-redux'

import styles from './styles'
import {showLoading} from './../../Loading/loading'
import TableUser from './../TableUser/TableUser'
import ChartData from './../ChartData/ChartData'

import {withStyles} from '@material-ui/core'


const App = (props) => {
   //dispatch redux
  const dispatch = useDispatch()

  //check fetch data
  const [loading,setLoading] = useState(true)
   
    
   useEffect(() => {
       const fetchData = async () => {
           try {
            const getDataTableUser = await axios.get("https://dev.cong.appwifi.com/stat/client")
            if(getDataTableUser.data.error_code === 0){
              dispatch({type: "GET_DATA_TABLE_USER",playload: getDataTableUser.data.data })
              setLoading(false)
            }
            else {
              console.log(getDataTableUser.data.message)
            }
           
           } catch (error) {
               console.log(error)
           }
         
       }
       fetchData()
   },[dispatch])

    const {classes} = props


    const showData = () => (
      <div className={classes.font}>
      <div className={classes.shape}>Thống Kê Người Dùng</div>
      <TableUser />
      <ChartData />
      </div>
    )
  return(
       <>
        {loading ? showLoading(true) : showData()}
       </>
  )
}
export default withStyles(styles)(App)