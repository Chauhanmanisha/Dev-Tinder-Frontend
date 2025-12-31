// import axios from "axios";
// import { BASE_URL } from "./utils/constants";
// import { useEffect } from "react";

// const Connections = () => {

//     const fetchConnections = async() => {
//         try{
//             const res = await axios.get(BASE_URL+ "/user/connections" , {
//                 wuthCredentails:true,
//             });
//             console.log(res?.data?.data);
//         }
//         catch(err){
//             // handle errors 
//         }
//     }

//     useEffect(()=>{
//         fetchConnections();
//     },[]);

//     return(
//         <div className="flex justify-center my-10">
//             <h1 className="text- bold text-2xl">Connections</h1>
//         </div>
//     );
// }

// export default Connections;