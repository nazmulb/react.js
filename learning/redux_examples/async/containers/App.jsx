import React from 'react';
import { connect } from 'react-redux';
import { selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded } from '../actions';
import Posts from '../components/Posts.jsx';
import Picker from '../components/Picker.jsx';
import styles from '../css/styles';
require('../css/style.css');

class App extends React.Component {
    componentDidMount(){
        const { selectedSubreddit, dispatch } = this.props;
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedSubreddit != this.props.selectedSubreddit){
            const { selectedSubreddit, dispatch } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    }
    handleChange(nextSubreddit){
        this.props.dispatch(selectSubreddit(nextSubreddit));
    }
    handleRefreshClick(e){
        e.preventDefault();

        const { selectedSubreddit, dispatch } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
        const isEmpty = posts.length === 0;
        return(
            <div className="container">
                <div className="col-md-10" style={styles.boxStyle}>
                    <Picker
                        value={selectedSubreddit}
                        onChange={this.handleChange.bind(this)}
                        options={['reactjs', 'news', 'Bangladesh']}
                    />
                    <p>
                        {lastUpdated &&
                            <span>
                                Last updated at <strong>{new Date(lastUpdated).toDateString()}.</strong>{' '}
                            </span>
                        }
                        {!isFetching &&
                            <a href="#" onClick={this.handleRefreshClick.bind(this)}>
                                Refresh
                            </a>
                        }
                    </p>
                    {isEmpty
                        ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                        : <div style={{opacity: isFetching ? 0.5 : 1}}>
                            <Posts posts={posts} />
                          </div>
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const { selectedSubreddit, postsBySubreddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    };

    return {
        selectedSubreddit,
        isFetching,
        lastUpdated,
        posts
    }
};

export default connect(mapStateToProps)(App);