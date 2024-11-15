import { ChatMessageActions } from './ChatMessageActions';
import { ChatMessageAvatar } from './ChatMessageAvatar';
import { ChatMessageContent } from './ChatMessageContent';
import { ChatMessageRoot } from './ChatMessageRoot';
import { ChatMessagWrapper } from './ChatMessagWrapper';

export const MessageItem = {
  Root: ChatMessageRoot,
  Avatar: ChatMessageAvatar,
  Wrapper: ChatMessagWrapper,
  Content: ChatMessageContent,
  Actions: ChatMessageActions,
};
