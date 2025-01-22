import { Editor } from "@/components/atoms/Editor/Editor";

export const ChatInput = () => {


    async function handleSubmilt( {body} ) {
        console.log('bogy', body);
        
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