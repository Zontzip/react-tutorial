/* 
 *	React is all about modular, composable components. 	
 *	- Commentbox
 *		- CommentList
 *			- Comment
 *		- CommentForm
 */
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

/* 	
 *	Instantiates the root component, starts the framework, 
 *	and injects the markup into a raw DOM element
*/
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);