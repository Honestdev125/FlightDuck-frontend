import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Speech1 from './speech1';
import Speech2 from './speech2';
import Speech3 from './speech3'
import Speech4 from './speech4'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import CustomDatePicker from './CustomDatePicker';

class Page_header1 extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
		let duckUrl =  this.props.duckUrl
		let calendar = this.props.calendar
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle
		const valueMap = {
			1: 3,
			2: 10,
			3: 20,
			// ...
		  };
		
		  
        return (
             <div className="changeheader breadcrumb-area jarallax">
				  <div className="container">
					<div className='row'>
						<Navbar homepage={false} />
					</div>
				        <div className="row header1 breadcrumb-inner">
							<div className='col-lg-3 banner-duck'>
								{console.log('dsfsdf ' + publicUrl + duckUrl)}
									<img src={publicUrl + duckUrl} alt="img" />
									
							</div>
							<div className='speech'>
								{/* <img src={publicUrl+'assets/img/Ducks/speech.png'} /> */}
								{ HeaderTitle==1 && <Speech1/> } 
								{ HeaderTitle==2 && <Speech2/> }
								{ HeaderTitle==3 && <Speech3/> }
								{ HeaderTitle==4 && <Speech4/> }  
							</div>
							
							{calendar && <div className='calandar col-lg-3'><CustomDatePicker/></div>}
												 
							<div className='ellipse col-lg-3'/>
				        </div>
				      </div>
				    </div>
				 


        )
    }
}


export default Page_header1