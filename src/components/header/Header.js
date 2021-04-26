import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './headerStyles';
import Logo from '../images/pc/pc-brand-logo.svg';

function Header({ title, dollarSymbol, priceLg, priceSm, productName }) {
	const classes = useStyles();
	const scrollToTop = () => window.scrollTo(0, 0);

	return (
		<React.Fragment>
			<div className={classes.mixin}>
				<AppBar className={classes.appbar}>
					<Toolbar className={classes.toolbar}>
						<div onClick={scrollToTop} className={classes.logoContainer}>
							<img src={Logo} className={classes.logo} alt="company logo" />
							<Typography className={classes.logoText} variant="h6">
								Custm
							</Typography>
						</div>
					</Toolbar>
				</AppBar>
			</div>
			<div className={classes.container}>
				<div className={classes.circleBg}>
					<Typography className={classes.headerText} variant="h2">
						{title}
					</Typography>
				</div>
			</div>
			<div className={classes.pcContainer}>
				<div className={classes.pcHeroText}>
					<Typography className={classes.price} variant="h6">
						<span className={classes.dollarSymbol}>{dollarSymbol}</span>
						{priceLg}
						<span className={classes.superscript}>{priceSm}</span>
					</Typography>
					<Typography className={classes.pcName} variant="h6">
						{productName}
					</Typography>
				</div>
				<div>
					<div className={classes.pcBg} />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;
