/** 
 *	React is all about modular, composable components. 	
 *	- Commentbox
 *		- CommentList
 *			- Comment
 *		- CommentForm
 */

/** 
 *  Native HTML elements start with lowercase, 
 *  React class names begin with uppercase
 */
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
    return (
      <div className="commentList">
      {/* Passing data from parent to child*/}
        var data = [
          {id: 1, author: "Pete Hunt", text: "This is one comment"},
          {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
        ];
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
  render: function() {
    {/**
      * Markdown is a simple way to format text. 
      * Remarkable is a library that takes markdown text and 
      * converts it to raw HTML.
      */}
    var md = new Remarkable();
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
        {/* Calling the remarkable library and returning a string */}
        {md.render(this.props.children.toString())}
      </div>
    );
  }
});

/** 	
 *	Instantiates the root component, starts the framework, 
 *	and injects the markup into a raw DOM element.
 */
ReactDOM.render(
  // pass data to CommentBox
  <CommentBox data={data} />,
  document.getElementById('content')
);