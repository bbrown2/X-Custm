import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './mainStyles';
import ProductCard from '../card/ProductCard';

function Main({ subtitle, btnText }) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div className={classes.container}>
				<div className={classes.swirlImg} />
				<div className={classes.swirlImg2} />
				<div className={classes.callToAction}>
					<Typography className={classes.subtitle} variant="h6">
						{subtitle}
					</Typography>
					<div className={classes.btnContainer}>
						<Button className={classes.btn} variant="contained">
							{btnText}
						</Button>
					</div>
				</div>
				<ProductCard />
			</div>
		</React.Fragment>
	);
}

export default Main;
