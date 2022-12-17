import DateCountdown from 'react-date-countdown-timer';
 
 export default function CountDown() {
   return <DateCountdown dateTo='January 01, 2023 00:00:00 GMT+03:00' callback={()=>alert('Hello')} />
   
 }
 