import paintStrip from '../images/shapes/paintStrip.svg';
import { makeStyles } from '@material-ui/core';
import { laptop, laptopL, mobileL, tablet } from '../breakpoints/breakpoints';

export const useStyles = makeStyles((theme) => ({
	swirlImg: {
		maxWidth: 1300,
		backgroundImage: `url(${paintStrip})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: -200,
		width: '100%',
		height: 400,
		position: 'absolute',
		top: 350,
		zIndex: 0,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileL)]: {
			height: 500,
			top: 300,
			backgroundPosition: -100
		},

		[theme.breakpoints.up(tablet)]: {
			height: 700,
			top: 600,
			backgroundPosition: -100
		},

		[theme.breakpoints.up(laptop)]: {
			height: 1000,
			top: 400,
			backgroundPosition: -200
		},

		[theme.breakpoints.up(laptopL)]: {
			height: 1200,
			top: 350,
			backgroundPosition: -400
		}
	},

	swirlImg2: {
		maxWidth: 1300,
		backgroundImage: `url(${paintStrip})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: -100,
		width: '100%',
		height: 400,
		position: 'absolute',
		top: 400,
		zIndex: 0,
		opacity: 0.5,

		//<--------------breakpoints-------------->

		[theme.breakpoints.up(mobileL)]: {
			height: 500,
			top: 350,
			backgroundPosition: -100
		},

		[theme.breakpoints.up(tablet)]: {
			height: 800,
			top: 600,
			backgroundPosition: -100
		},

		[theme.breakpoints.up(laptop)]: {
			height: 1100,
			top: 400,
			backgroundPosition: -200
		},

		[theme.breakpoints.up(laptopL)]: {
			height: 1300,
			top: 350,
			backgroundPosition: -400
		}
	},

	container: {
		maxWidth: 1300,
		boxSizing: 'border-box',
		margin: '0 auto'
	},

	callToAction: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: 200,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			height: 350
		},

		[theme.breakpoints.up(laptopL)]: {
			height: 400
		}
	},

	subtitle: {
		fontSize: 'var(--fontSmall)',
		padding: '20px 0',
		zIndex: 2,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			fontSize: 'var(--fontMedium)',
			padding: '30px 0'
		},

		[theme.breakpoints.up(laptop)]: {
			fontSize: 'var(--fontLarge)'
		}
	},

	btn: {
		backgroundColor: 'var(--colorBlack)',
		color: 'var(--colorWhite)',
		borderRadius: 50,
		fontSize: 'var(--btnXSmall)',
		zIndex: 2,

		'&:hover': {
			backgroundColor: 'var(--colorGray)'
		},

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			fontSize: 'var(--btnSmall)'
		},

		[theme.breakpoints.up(laptop)]: {
			fontSize: 'var(--btnMedium)'
		}
	}
}));
