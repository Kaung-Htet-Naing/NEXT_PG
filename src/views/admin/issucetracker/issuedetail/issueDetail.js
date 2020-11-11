import React, { useState, useEffect ,useContext} from 'react';
import { makeStyles } from '@material-ui/styles';

import { Header,PostCard } from './components';
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

const IssueFeed = ({fetchData,detail,match,commentsList}) => {
  const classes = useStyles();
  const id = match.params.id;
  const fetchContext = useContext(FetchContext);

  const [comments,setComments] = useState([])

  useEffect (()=>{
    fetchData(fetchContext.getIssueDetail(id))
    fetchData(fetchContext.getCommentsList(id))
  },[fetchData,fetchContext,id])

  useEffect( ()=>{
    setComments(commentsList)
  },[commentsList])


  if(detail !== {}){
    return (
      <Page
        className={classes.root}
        title="Social Feed"
      >
        <Header />
        <div className={classes.posts}>
          <PostCard
            className={classes.post}
            commentsList={comments}
            detail={detail}
            id={id}
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
