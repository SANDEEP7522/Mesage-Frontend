import { ChannelHeader } from "@/components/molecules/ChannelHeader/ChannelHeader";
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput";
import { Message } from "@/components/molecules/Messages/Message";
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById";
import { useGetChannelMessages } from "@/hooks/apis/channels/useGetChannelMessages";
import { useChannelMessages } from "@/hooks/context/useChannelMessage";
import { useSocket } from "@/hooks/context/useSockit";
import { useQueryClient } from "@tanstack/react-query";

import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

export const Channel = () => {
  const { channelId } = useParams();

  const queryClient = useQueryClient();

  const { channelDetails, isFetching, isError } = useGetChannelById(channelId);

  const { joinChannel } = useSocket();

  const { messages, isSuccess } = useGetChannelMessages(channelId);

  const { setMessageList, messageList } = useChannelMessages();

  useEffect(() => {
    console.log("ChannelId", channelId);
    queryClient.invalidateQueries("getPaginatedMessages");
  }, [channelId]);

  useEffect(() => {
    if (!isFetching && !isError) {
      joinChannel(channelId);
    }
  }, [isFetching, isError, channelId, joinChannel]);

  useEffect(() => {
    if (isSuccess) {
      console.log("Channel Messages fetched");
      setMessageList(messages);
    }
  }, [isSuccess, messages, setMessageList, channelId]);

  if (isFetching) {
    return (
      <div className="h-full flex-1 flex items-center justify-center">
        <Loader2Icon className="size-10 animate-spin text-muted-foreground" />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-full flex-1 flex flex-col gap-y-2 items-center justify-center">
        <TriangleAlertIcon className="size-6 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Channel Not found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <ChannelHeader name={channelDetails?.name} />

      {messageList?.map((message) => {
        return (
          <Message
            key={message._id}
            body={message.body}
            authorImage={message.senderId?.avatar}
            authorName={message.senderId?.username}
            createdAt={message.createdAt}
          />
        );
      })}

      <div className="flex-1" />

      <ChatInput />
    </div>
  );
};

