import React from 'react';
import ResponseDateTime from './ResponseDateTime';
import CategoryDistribution from './CategoryDistribution';
import UserSatisfaction from './UserSatisfaction';
import InsightSummary from './InsightSummary';


function App(){

  return(
    <>
  <div class="grid-container">
  <div class="grid-item"><CategoryDistribution/></div>
  <div class="grid-item"><ResponseDateTime/></div>
  <div class="grid-item"> <UserSatisfaction /></div>  
  <div class="grid-item"><InsightSummary/></div>
</div>
    </>
  )
}
export default App;

