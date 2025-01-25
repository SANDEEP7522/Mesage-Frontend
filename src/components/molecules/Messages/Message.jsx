import { MessageImageThumbnail } from '@/components/atoms/MessageImageThumbnail/MessageImageThumbnail';
import { MessageRenderer } from '@/components/atoms/MessageRenderer/MessageRenderer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
export const Message = ({
    authorImage,
    authorName,
    createdAt,
    body,
    id,  // Assuming id is passed down for avatar fallback
    image,
}) => {
    // Avatar fallback: If `authorImage` is not provided, use a generated avatar from robohash.
    const avatar = authorImage || `https://robohash.org/${id}?set=set2`;
    return (
        <div className="flex flex-col gap-2 p-1.5 px-5 hover:bg-gray-100/60 group relative">
            <div className="flex items-center gap-2">
                <button>
                    <Avatar>
                        <AvatarImage className="rounded-md" src={avatar} />
                        <AvatarFallback className="rounded-md bg-sky-500 text-white text-sm">
                            {authorName ? authorName.charAt(0).toUpperCase() : 'U'}
                        </AvatarFallback>
                    </Avatar>
                </button>
                <div className="flex flex-col w-full overflow-hidden">
                    <div className="text-xs">
                        <button className="font-bold text-primary hover:underline">
                            {authorName || 'Unknown Author'}
                        </button>
                        <span>&nbsp;&nbsp;</span>
                        <button className="text-xs text-muted-foreground hover:underline">
                            {createdAt || 'just now'}
                        </button>
                    </div>
                    {/* Render message content */}
                    <MessageRenderer value={body || 'No message provided'} />

                    {/* any image if there are */}

                   { image && <MessageImageThumbnail url={image} />}

                </div>
            </div>
        </div>
    );
};
