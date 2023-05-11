import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter_05/CommentList';
import Notification from './chapter_06/Notifition';
import Accommodate from './chapter_07/Accommodate';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';



const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>
)

// const root = ReactDOM.createRoot(document.getElementById(`root`));
// root.render(
//   <React.StrictMode>
//     <SignUp/>
//   </React.StrictMode>
// )


// const root = ReactDOM.createRoot(document.getElementById(`root`));
// root.render(
//   <React.StrictMode>
//     <AttendanceBook/>
//   </React.StrictMode>
// )


// const root = ReactDOM.createRoot(document.getElementById(`root`));
// root.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>
// )

// const root = ReactDOM.createRoot(document.getElementById(`root`));
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// )

//const root = ReactDOM.createRoot(document.getElementById(`root`));
//root.render(
//  <React.StrictMode>
//    <CommentList />
//  </React.StrictMode>
//)



// import Clock from './chapter_04/clock';
// setInterval(()=>{
//   const root = ReactDOM.createRoot(document.getElementById(`root`));
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//   );
// },1000);


// import Library from './chapter_03/Library';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
