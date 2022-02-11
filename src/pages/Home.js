const Home = () => {
    return (
      <div className="postsList">
        <div className="postWrapper">
          <div className="postHeader">
            <div className="postAvatar">
              <img
                src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1644591071~hmac=53c882810ea6b302934838d8fb7af074"
                alt="user-pic"
              />
              <div>
                <span className="postAuthor">Sarthak</span>
                <span className="postTime">a minute ago</span>
              </div>
            </div>
            <div className="postContent">Post Content</div>

            <div className="postActions">
              <div className="postLike">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/889/889140.png"
                  alt="likes-icon"
                />
                <span>5</span>
              </div>

              <div className="postCommentsIcon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png"
                  alt="comments-icon"
                />
                <span>2</span>
              </div>
            </div>
            <div className="postCommentBox">
              <input placeholder="Start typing a comment" />
            </div>

            <div className="postCommentsList">
              <div className="postCommentsItem">
                <div className="postCommentHeader">
                  <span className="postCommentAuthor">Bill </span>
                  <span className="postCommentTime">a minute ago </span>
                  <span className="postCommentLikes">22</span>
                </div>

                <div className="postCommentContent">Random comment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
