import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fetchPosts } from '../store/actions/post';
// import Header from '../components/Header';
import hasContentWrapper from '../hoc/hasContentWrapper';

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
        { this.props.isLoading ? <p>loading...</p> : null }
        {mappedPosts}
      </div>
    );
  }
}

const enhance = compose(
  hasContentWrapper({
    title: 'Posts',
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(Posts);
