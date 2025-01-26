import { ChannelHeader } from "@/components/molecules/ChannelHeader/ChannelHeader";
import { ChatInput } from "@/components/molecules/ChatInput/ChatInput";
import { Message } from "@/components/molecules/Messages/Message";
import { useGetChannelById } from "@/hooks/apis/channels/useGetChannelById";
import { useGetChannelMessages } from "@/hooks/apis/channels/useGetChannelMessages";
import { useChannelMessages } from "@/hooks/context/useChannelMessage";
import { useSocket } from "@/hooks/context/useSockit";
import { useQueryClient } from "@tanstack/react-query";

import { Loader2Icon, TriangleAlertIcon } from "lucide-react";
import { useEffect, useRef } from "react";

import { useParams } from "react-router-dom";

export const Channel = () => {
  const { channelId } = useParams();

  const queryClient = useQueryClient();

  const messageContainerListRef = useRef(null);

  const { joinChannel } = useSocket();

  const { channelDetails, isFetching, isError } = useGetChannelById(channelId);

  const { messages, isSuccess } = useGetChannelMessages(channelId);

  const { setMessageList, messageList } = useChannelMessages();

  useEffect(() => {
    if (messageContainerListRef.current) {
      messageContainerListRef.current.scrollTop =
        messageContainerListRef.current.scrollHeight;
    }
  }, [messageList]);

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
      setMessageList(messages.reverse());
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

      {/* We need to make sure that below div is scrollable for the messages */}
      <div
        ref={messageContainerListRef}
        className="flex-5 overflow-y-auto p-5 gap-y-2"
      >
        {messageList?.map((message) => {
          return (
            <Message
              key={message._id}
              body={message.body}
              authorImage={message.senderId?.avatar}
              authorName={message.senderId?.username}
              createdAt={message.createdAt}
              image={message.image}
            />
          );
        })}
      </div>

      <div className="flex-1" />

      <ChatInput />
    </div>
  );
};
