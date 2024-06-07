import { MessageProps, MessageRole } from "../ChatCard";

const ChatMessage = ({ text, updatedAt, role}: Omit<MessageProps, "id">) => {


    const formatTime = (date: Date): string => {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
    
        return `${hours}:${minutes}`;
    };
    
    const formattedTime = formatTime(updatedAt);

    return (
        <div className={`max-w-[50%] flex flex-col gap-0 w-fit ${role === MessageRole.client ? "self-start" : "self-end"}`}>
            <p className="px-4 py-2 bg-[#909090] text-[#FFFFFF] text-left rounded-2xl">{text}</p>
            <span className="self-end text-xs text-[#909090FF] px-1">{formattedTime}</span>
        </div>
    );
}
 
export default ChatMessage;