import React, { useState, useEffect ,useContext} from 'react';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { Header,AddPost,PostCard } from './components';
import { Page} from 'components';
import { FetchContext } from '../../../../context/FetchContext';
import { fetchData } from '../../../../store/action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const posts=[
  {
    author:{
      avatar: '/images/avatars/avatar_10.png',
      name: 'Kwak Seong-Min'
    },
    comments:[{
      author:{
        avatar: '/images/avatars/avatar_12.png',
        name: 'Merrile Burgett'
      } ,
      created_at:'2020-10-23T07:19:13.213Z',
      id:'329826df-1519-11eb-8ab9-ade3ff5ddea6',
      message:'I\'ve been using Angular for the past 3 years'
    }],
    created_at: '2020-10-23T10:03:13.213Z',
    id: '329826de-1519-11eb-8ab9-ade3ff5ddea6',
    liked: true,
    likes: 1,
    message: 'Hey guys! What\'s your favorite framework?'
  },
  {
    author:{
      avatar: '/images/avatars/avatar_10.png',
      name: 'Kwak Seong-Min'
    },
    comments:[{
      author:{
        avatar: '/images/avatars/avatar_12.png',
        name: 'Merrile Burgett'
      } ,
      created_at:'2020-10-23T07:19:13.213Z',
      id:'329826df-1519-11eb-8ab9-ade3ff5ddea6',
      message:'I\'ve been using Angular for the past 3 years'
    }],
    created_at: '2020-10-23T10:03:13.213Z',
    id: '329826de-1519-11eb-8ab9-ade3ff5ddea6',
    liked: true,
    likes: 1,
    message: 'Hey guys! What\'s your favorite framework?'
  }
]

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

const IssueFeed = ({fetchData,lists}) => {
  const classes = useStyles();

  const fetchContext = useContext(FetchContext);

  useEffect ( ()=>{
    fetchData(fetchContext.getIssuesList())
  },[])

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
    lists:issues.list
  }
}

export default connect(mapStateToProps,{fetchData})(IssueFeed);
