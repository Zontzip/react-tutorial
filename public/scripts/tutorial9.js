// tutorial9.js
var CommentBox = React.createClass({
	render: function() {
		return (
			<div clasName="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data} />
				<Commentform />
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox data={data} />,
	document.getElementbyId('content')
);