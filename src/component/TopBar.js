import React from 'react';



class TopNav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          //defauilt value of the date time
          curtime: '',

          
        };
        
      }
      
      componentDidMount() {
        const hours = new Date().getHours(); //Current Hours
        const min = new Date().getMinutes(); //Current Minutes
        let monthNumber = (new Date().getMonth());
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let monthName = monthNames[monthNumber];
        const date = new Date()
        
        
        setInterval(() => {
            this.setState({
                date : new Date(),
                curHour: new Date().getHours().toLocaleString(),
                curMim:  (date.getMinutes()<10?'0':'') + date.getMinutes(),
                currSec : new Date().getSeconds().toLocaleString(),
                currDay : monthName
            })
          }, 1000)
        
      }

      

      
    render(){
        return (
            <div id="topnavbar">
            <div id="leftNav">
            {this.state.curHour}:{this.state.curMim}
            </div>
            <div id="currDay">
            {this.state.currDay}
                
            </div>
            <div id="rightNav">
                <img  id="batteryicon" src={require("../../src/battery.png")}></img>
                <img  id="batteryicon" src={require("../../src/earphone.png")}></img>
            </div>
        </div>

        )
    }
}

export default TopNav;
   