import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions/post';

const mapStateToProps = state => ({
  posts: state.post.posts,
  isLoading: state.post.isLoading,
});

const mapDispatchToProps = {
  fetchPosts,
};

class Posts extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    posts: PropTypes.instanceOf(Array).isRequired,
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const mappedPosts = this.props.posts.map(value => <p key={value.id}>{value.title}</p>);

    return (
      <div>
        <h1>Posts</h1>
        { this.props.isLoading ? <p>loading...</p> : null }
        {mappedPosts}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
