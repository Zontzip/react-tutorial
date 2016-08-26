/** 
 *  React is all about modular, composable components.  
 *  - Commentbox
 *    - CommentList
 *      - Comment
 *    - CommentForm
 */

/** 
 *  Native HTML elements start with lowercase, 
 *  React class names begin with uppercase
 */

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

// React.createClass() creates a new react component
var CommentBox = React.createClass({
  // Render returns a tree of react components which will eventually render to HTML
  render: function() {
    return (
      // Instantiation of react div component
      <div className="commentBox">
        {/** 
          * HTML components are like regular React components.
          * The JSX compiler will automatically rewrite HTML tags 
          * to React.createElement(tagname).  
          */}
        <h1>Comments</h1>
        {/* CommentBox will use these components */}
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div classname="comment">
        <h2 classname="commentAuthor">
          {/** 
            * Data passed in from a parent component is available 
            * as a property on the child component. 
            * It can be accessed using 'this.props' where comment
            * can read data passed from CommentList.
            * The named attributes are accessed using tags.
            */}
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

/**   
 *  Instantiates the root component, starts the framework, 
 *  and injects the markup into a raw DOM element.
 */
ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);