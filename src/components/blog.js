import React, { Component } from 'react';


class Blog extends Component {
	componentDidMount() {
		this.props.fetch_posts();
	}

	render() {
        return (
        	<div>
        	The posts will show up here.
        	</div>
        	);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts};
}

export default connect(mapStateToProps, { fetch_posts })(Blog);