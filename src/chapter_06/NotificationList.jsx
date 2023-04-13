import React from "react";
import Notification from "./Notifition";

const reservedNotifications =[
    {
        message:"안녕하세요 오늘의 일정을 알려드리겠습니다.",
    },
    {
        message:"점심식사 시간입니다",
    },
    {
        message:"이제 곧 미팅이 시작됩니다.",
    }
];

var timer;
class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            Notification: [],
        };
    }

    componentDidMount(){
        const { Notifications } = this.state;
        timer = setInterval(() => {
           if(Notifications.length<reservedNotifications.length){
            const index = Notifications.length;
            Notifications.push(reservedNotificationsp[index]);
            this.setState({
                Notifications: Notifications,
            })
           } else{
            this.setState({
                Notifications:[],
            });
            clearInterval(timer);
           }
        }, 1000);
    }

    componentWillUnmount(){
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.Notifications.map((notification) => {
                    return <Notification
                    key={notification.id}
                    id={notification.id}
                    message={notification.message} />;

                })}
            </div>
        );
            
    }
}
export default Notification;