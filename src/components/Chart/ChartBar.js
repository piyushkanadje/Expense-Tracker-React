import React from "react";


const ChartBar = props => {
 
   let barFillHeight = " 0%";
  if(props.max > 0){
    barFillHeight = MAth.round((props.value /props.maxValue * 100) + "%");
  }
    return(
    
        <div className="chart-bar"> 
          <div className='chart-bar__inner' > 
            <div className='chart-bar__fill' style={{height : barFillHeight, backGroundColor : 'red'}}>

            </div>
          </div>
          <div className="chart-bar__label"> </div>
        </div>

    );                                     

};

export  default ChartBar;