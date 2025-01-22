import { Editor } from "@/components/atoms/Editor/Editor";
import { useAuth } from "@/hooks/context/useAuth";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { useSocket } from "@/hooks/context/useSockit";

export const ChatInput = () => {
    const { socket, currentChannel } = useSocket();
    
    const { auth } = useAuth();
   
    const { currentWorkspace } = useCurrentWorkspace();

    async function handleSubmilt( {body} ) {
        console.log('bogy', body);

        socket?.emit('NewMessage', {
            channelId: currentChannel,
            body,
            senderId: auth?.user?._id,
            workspaceId: currentWorkspace?._id
        }, (data) => {
            console.log('Message sent', data);
        });
        
    }

    return (
        <div
            className="px-5 w-full"
        >
            <Editor 
                placeholder="Type a message..."
                onSubmit={handleSubmilt}
                onCancel={() => {}}
                disabled={false}
                defaultValue=""
                
            />
        </div>
    );
};