interface NotificationService {
    sendNotification(message: string): void
}
class EmailNotification implements NotificationService{
    sendNotification(message: string): void {
        console.log(`[Email SENT]:${message}`);
}
    }
class SMSNotification implements NotificationService {
    sendNotification(message: string): void {
        console.log(`[SMS Sent]:${message}`);
    }
}
function broadcast(NotificationService:NotificationService, msg:string){
    NotificationService.sendNotification(msg);
}
broadcast(new EmailNotification(), "Email1:xxx send to Email2:xxx");
broadcast(new SMSNotification(), "Email1:xxx send to Email2:xxx");
