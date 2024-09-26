import CommentWraper from "./components/commentWraper/CommentWraper";
import MainLayout from "./components/Layout/mainlayout/MainLayout";
import SendForm from "./components/sendForm/SendForm";
import { commentType } from "./types/commentType";

const comments: commentType[] = [
  {
    id: 1,
    userName: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    commentDate: "1 month ago",
    subComment: [
      {
        id: 1,
        userName: "John Who?",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
        commentDate: "1 month ago",
      },
      {
        id: 1,
        userName: "John Who?",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
        commentDate: "1 month ago",
      },
    ],
  },
  {
    id: 1,
    userName: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    commentDate: "1 month ago",
  },
];

function App() {
  return (
    <MainLayout>
      {comments.map((comment) => (
        <CommentWraper
          key={comment.id}
          userName={comment.userName}
          comment={comment.comment}
          commentDate={comment.commentDate}
          subComment={comment.subComment}
        />
      ))}

      <SendForm />
    </MainLayout>
  );
}

export default App;
