import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      {post.user && (
        <p>
          {' Posted by '}
          <UserInfo user={post.user} />
        </p>
      )}
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <hr />
    {post.comments.length ? (
      <CommentList comments={post.comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </div>
);