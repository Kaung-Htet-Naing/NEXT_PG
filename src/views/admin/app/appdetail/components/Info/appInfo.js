import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  actions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + *': {
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const AppInfo = props => {
  const { className, detail, ...rest } = props;

  const classes = useStyles();

  const renderDetail = (item) => {
    return item === undefined ? ''
      : (
        Object.entries(item).map(([key, value], i) => (
          <TableRow
            key={i}
            selected={i % 2 === 0 ? true : false}
          >
            <TableCell>
              {key}
            </TableCell>
            <TableCell>
              {value}
            </TableCell>
            <TableCell>
              {
                (key === 'app_id') || (key === 'secret_key') ?
                  <CopyToClipboard
                    text={value}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                    >
                      <FileCopyOutlinedIcon />
                      <span>Copy</span>
                    </Button>
                  </CopyToClipboard>
                  : null
              }
            </TableCell>
          </TableRow>
        ))
      )
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Detail" />
      <Divider />
      <CardContent className={classes.content}>
        <Table>
          <TableBody>
            {renderDetail(detail)}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AppInfo;