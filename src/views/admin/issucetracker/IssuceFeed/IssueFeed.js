import React, { useState,useEffect ,useContext} from 'react';
import { makeStyles } from '@material-ui/styles';

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

const IssueFeed = ({fetchData,issuesList}) => {
  const classes = useStyles();
  const fetchContext = useContext(FetchContext);
  const [lists,setLists] = useState([]);

  useEffect ( ()=>{
    fetchData(fetchContext.getIssuesList())
  },[])

  useEffect( ()=>{
    setLists(issuesList)
  },[issuesList])

  return (
    <Page
      className={classes.root}
      title="Social Feed"
    >
      <Header />
      <AddPost className={classes.newPost} />
      <div className={classes.posts}>
        {lists.map(list => (
          <PostCard
            className={classes.post}
            commentCount={list.comments_count}
            key={list.id}
            list={list}
          />
        ))}
      </div>
    </Page>
  );
};

const mapStateToProps = ({issues})=>{
  return{
    issuesList:issues.list
  }
}

export default connect(mapStateToProps,{fetchData})(IssueFeed);
