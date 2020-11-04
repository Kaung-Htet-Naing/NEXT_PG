import React, { useState, useEffect ,useContext} from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Header,AddPost,PostCard } from './components';
import { Page} from 'components';
import { FetchContext } from '../../../../context/FetchContext';
import { fetchData } from '../../../../store/action';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  newPost: {
    marginTop: theme.spacing(3)
  },
  posts: {
    marginTop: theme.spacing(3)
  },
  post: {
    marginBottom: theme.spacing(3)
  }
}));

const IssueFeed = ({fetchData,detail,commentsList}) => {
  const classes = useStyles();

  const fetchContext = useContext(FetchContext);

  useEffect ( ()=>{
    fetchData(fetchContext.getIssueDetail(101))
    fetchData(fetchContext.getCommentsList(101))
  },[])

  if(detail !== {}){
    return (
      <Page
        className={classes.root}
        title="Social Feed"
      >
        <Header />
        <AddPost className={classes.newPost} />
        <div className={classes.posts}>
          <PostCard
            className={classes.post}
            commentsList={commentsList}
            detail={detail}
            key={detail.id}
          />
        </div>
      </Page>
    );
  }
};

const mapStateToProps = ({issues})=>{
  return{
    detail:issues.detail,
    commentsList:issues.commentsList
  }
}

export default connect(mapStateToProps,{fetchData})(IssueFeed);
