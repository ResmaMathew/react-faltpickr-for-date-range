import 'flatpickr/dist/themes/material_green.css'
import Flatpickr from 'react-flatpickr'
import React,{ Component } from 'react'




 
class FlatpickrDateTime extends Component {
  constructor() {
    super();
 
    this.state = {
      date: new Date()
    };
  }



 
  render() {
    const { date } = this.state;
    return (<div >
      
      <Flatpickr data-enable-time 
        value={date}
        onReady={(dates, dateString, addstyles) => { addstyles.element.style.width = "250px";addstyles.element.style.height="27px";}}
        onChange={date => { this.setState({date}) }}
        options={{mode:"range",altInputClass:"flatpickrclass", showMonths:2}}
       // onChange={(_, str, element) => {console.info(str); element.element.style.width = "250px";  console.log(element)}}
        />
      </div>
    )  
  }
}
export default FlatpickrDateTime;
