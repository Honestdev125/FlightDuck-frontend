import React , {useEffect} from 'react';

import PageHeader1 from '../components/global-components/page-header1';
import HotelFlightPackageList from '../components/section-components/hotel-flight-package-list';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const FlightHotelPackage = () => {
    useEffect(()=>{
        console.log("testfilight")
        const fetchData = async () => {
            const response = await fetch('cachePackageResponse.json');
            const data = await response.json();
            // Update state or do something with the data
          }
       
          fetchData();
        // fetch('cachePackageResponse.json'
        // ,{
        //   headers : {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //    }
        // }
        //   )
        //     .then(function(response){
        //       console.log("testcalender data",response.list)
        //       // return response.json();
        //     })
        //     .catch((err) => { return err });
            
      },[])
      
    return <div>
        
        <PageHeader1 headertitle={1}  
                    duckUrl='assets/img/Ducks/duck_for_calender.png'
                    calendar={true}  />
        <HotelFlightPackageList />
        {/* <Subscribe /> */}
        <Footer />
    </div>
}

export default FlightHotelPackage

