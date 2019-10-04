import React from 'react'
import {useSelector} from 'react-redux'
import { Bar } from 'react-chartjsx'

const ChartData = () =>{ 

                const {DATA_TABLE_USER} = useSelector(state => ({...state.ChartReducer}))
                //wlanBytes : Dung Lượng
                const wlanBytes = []

                //numsta: Số Lượng
                const numsta = []

                //time: thời gian
                const time = []
            
            DATA_TABLE_USER.forEach(data => {
                wlanBytes.push(data.wlan_bytes)
                numsta.push(data.num_sta)
                time.push(new Date(data.time).toLocaleString())
            });


            const mixedChartsData = {
                labels: time,
                datasets: [{ 
                    label: "Dung Lượng",
                    type: "line", 
                    borderColor: "#212121", 
                    data: wlanBytes, 
                    fill: false 
                }, { 
                    label: "Số Lượng", 
                    type: "bar", 
                    backgroundColor: "#0288d1", 
                    data: numsta, 
                }
                ] 
            }
          
    return (
        <div style={{marginTop: 100}}>
            <Bar data={mixedChartsData}
             minWidth={700} 
             height={400} /> 
            </div>
    )
}

export default ChartData