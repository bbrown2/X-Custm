import { Typography, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useStyles } from './productCardStyles';
import { overview } from './data';

function ProductCard() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.container}>
				<Typography className={classes.headerText} variant="h6" align="center">
					Top Features
				</Typography>
				<Grid container spacing={5} className={classes.grid}>
					{overview.map((item, id) => {
						return (
							<Grid key={id} item xs={12} md={6} lg={4}>
								<Paper className={classes.paper}>
									<Typography className={classes.cardTitle} variant="h6" align="center">
										{item.title}
									</Typography>
									<div className={classes.imgContainer}>
										<img className={classes.img} src={item.img} alt="pc specs" />

										<Typography className={classes.desc} variant="h6">
											{item.desc}
										</Typography>
									</div>
								</Paper>
							</Grid>
						);
					})}
				</Grid>
			</div>
		</React.Fragment>
	);
}

export default ProductCard;
