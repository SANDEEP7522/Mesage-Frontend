import { AlertTriangleIcon, HashIcon, Loader, MessageSquareTextIcon, SendHorizontalIcon } from 'lucide-react';

import { useParams } from 'react-router-dom';

import { WorkspacePanelHeader } from '@/components/molecules/Workspace/WorkspacePanelHeader';

import { useGetWorkspaceById } from '@/hooks/apis/workspaces/useGetWorkspaceById';
import { SideBarItem } from '@/components/atoms/SideBarItem/SideBarItem';
import { WorkspacePanelSection } from '@/components/molecules/Workspace/WorkspacePanelSection';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';
import { UserItem } from '@/components/atoms/UserItems/UserItem';

export const WorkspacePanel = () => {

     const { workspaceId } = useParams();

     const { setOpenCreateChannelModal } = useCreateChannelModal();

     const { workspace, isFetching, isSuccess } = useGetWorkspaceById(workspaceId);
     
    // console.log('workspace', workspace, 'isFetching', isFetching, 'isSuccess', isSuccess);
     
      
     // here we check if the workspace is fetching
     if(isFetching) {
        return (
            <div
                className='flex flex-col gap-y-2 h-full items-center justify-center text-white'
            >
                <Loader className='animate-spin size-6 text-white' />
            </div>
        );
     }

   
     // here we check if the workspace is successful
    if(!isSuccess) {
        return (
            <div
                className='flex flex-col gap-y-2 h-full items-center justify-center text-white'
            >
                <AlertTriangleIcon className='size-6 text-white' />
                Something went wrong
            </div>
        );
    }

    return (
        <div
            className="flex flex-col h-full bg-slack-medium"
        >
            <WorkspacePanelHeader workspace={workspace} />

            <div
                className='flex flex-col px-2 mt-3 '
            >
                <SideBarItem 
                    label="Threads"
                    icon={MessageSquareTextIcon}
                    id="threads"
                    variant='active'
                />

                <SideBarItem 
                    label="Drafts & Sends"
                    icon={SendHorizontalIcon}
                    id="drafts"
                    variant='default'
                />

             <WorkspacePanelSection
                label={'Channels'}
                onIconClick={() => {setOpenCreateChannelModal(true);}}
            >
                {workspace?.channels?.map((channel) => {
                    return <SideBarItem key={channel._id} icon={HashIcon} label={channel.name} id={channel._id} />;
                })}
            </WorkspacePanelSection>

            <WorkspacePanelSection
                label="Direct messages"
                onIconClick={() => {}}
            >
                {workspace?.members?.map((item) => {
                    return <UserItem key={item.memberId._id} label={item.memberId.username} id={item.memberId._id} image={item.memberId.avatar} />;
                })}
            </WorkspacePanelSection>


            </div>

        </div>
    );
};