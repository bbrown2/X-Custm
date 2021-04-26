import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { Language, Twitter, Instagram, YouTube } from '@material-ui/icons';
import { useStyles } from './footerStyles';
import { pageLinks } from './data';
import logo from '../images/pc/pc-brand-logo.svg';

function Footer({ region, twitter, instagram, youtube }) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Grid className={classes.footerContainer} container spacing={3}>
					<Grid className={classes.gridItem} item xs={12} md={4}>
						<img src={logo} alt="company logo" width="200" height="200" />
						<div className={classes.alignInfo}>
							<Language className={classes.icon} />
							<Typography className={classes.text} variant="h6">
								{region}
							</Typography>
						</div>
					</Grid>
					<Grid className={classes.gridItem} item xs={12} md={4}>
						{pageLinks.map((page, id) => {
							return (
								<div className={classes.alignInfo} key={id}>
									<Link to="/" className={classes.links}>
										<Typography className={classes.text} variant="h6">
											{page.text}
										</Typography>
									</Link>
								</div>
							);
						})}
					</Grid>
					<Grid className={classes.gridItem} item xs={12} md={4}>
						<div className={classes.alignInfo}>
							<Typography className={classes.text} variant="h6">
								Stay Connected
							</Typography>
						</div>

						<div className={classes.alignInfo}>
							<Link to="/" className={classes.links}>
								<Twitter className={classes.icon} />
								<Typography className={classes.text} variant="h6">
									{twitter}
								</Typography>
							</Link>
						</div>
						<div className={classes.alignInfo}>
							<Link to="/" className={classes.links}>
								<Instagram className={classes.icon} />
								<Typography className={classes.text} variant="h6">
									{instagram}
								</Typography>
							</Link>
						</div>
						<div className={classes.alignInfo}>
							<Link to="/" className={classes.links}>
								<YouTube className={classes.icon} />
								<Typography className={classes.text} variant="h6">
									{youtube}
								</Typography>
							</Link>
						</div>
					</Grid>
				</Grid>
			</div>
			<div className={classes.copyright}>
				<Typography className={classes.text}>© 2021 X Custm LLC</Typography>
			</div>
		</React.Fragment>
	);
}

export default Footer;
