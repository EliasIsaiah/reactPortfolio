import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      margin: "2rem",
    },
  }),
);

interface Props {
  value?: string
}

export default function PaperSheet(props: Props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography component="p">
          { props.value }
        </Typography>
      </Paper>
    </div>
  );
}