import { makeStyles } from '@material-ui/core';
import { laptop, laptopL, mobileS, mobileXS, tablet } from '../breakpoints/breakpoints';
import circle from '../images/shapes/dots.svg';
import pc from '../images/pc/pc.svg';

export const useStyles = makeStyles((theme) => ({
	mixin: theme.mixins.toolbar,
	container: {
		maxWidth: 1300,
		boxSizing: 'border-box',
		margin: '0 auto'
	},

	appbar: {
		backgroundColor: 'var(--colorWhite)'
	},

	toolbar: {
		maxWidth: 1300,
		width: '100%',
		margin: '0 auto',
		padding: 0
	},

	logoContainer: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer'
	},

	logo: {
		height: 40,
		width: 40
	},

	logoText: {
		color: 'var(--colorBlack)',
		fontSize: '1.2em'
	},

	headerText: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 500,
		margin: '0 auto',
		textAlign: 'left',
		fontSize: 'var(--fontMedium)',
		width: 250,
		height: 'inherit',
		padding: '0 15px',

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			fontSize: 'var(--fontLarge)',
			width: 315
		},

		[theme.breakpoints.up(laptop)]: {
			fontSize: 'var(--fontXLarge)',
			width: 386
		}
	},

	circleBg: {
		backgroundImage: `url(${circle})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		backgroundPosition: '20px 70px',
		backgroundAttachment: 'fixed',
		maxWidth: 'inherit',
		width: '100%',
		height: 200,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileS)]: {
			backgroundPosition: '20px 50px'
		},

		[theme.breakpoints.up(tablet)]: {
			backgroundPosition: 'center top',
			height: 350
		},

		[theme.breakpoints.up(laptopL)]: {
			height: 400
		}
	},

	pcContainer: {
		maxWidth: 1300,
		boxSizing: 'border-box',
		margin: '0 auto',
		display: 'flex'
	},

	pcHeroText: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		width: '100%',
		paddingTop: 30,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			paddingTop: 60
		}
	},

	price: {
		display: 'flex',
		justifyContent: 'flex-end',
		fontSize: 'var(--fontSmall)',

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			fontSize: 'var(--fontMedium)'
		},

		[theme.breakpoints.up(laptop)]: {
			fontSize: 'var(--fontLarge)'
		}
	},

	dollarSymbol: {
		fontSize: 'var(--fontXSmall)',
		paddingTop: 5,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			paddingTop: 7
		},

		[theme.breakpoints.up(laptop)]: {
			paddingTop: 8
		}
	},

	superscript: {
		fontSize: 'var(--fontXSmall)',
		paddingTop: 5,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			paddingTop: 7
		},

		[theme.breakpoints.up(laptop)]: {
			paddingTop: 8
		}
	},

	pcName: {
		fontSize: 'var(--fontSmall)',
		width: 100,
		height: 30,
		textAlign: 'right',

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			fontSize: 'var(--fontMedium)',
			width: 150
		},

		[theme.breakpoints.up(laptop)]: {
			fontSize: 'var(--fontLarge)',
			width: 160
		}
	},

	pcBg: {
		height: 250,
		width: 150,
		backgroundImage: `url(${pc})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: -60,
		zIndex: 2,
		position: 'relative',

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileXS)]: {
			backgroundPosition: -60,
			height: 270,
			width: 170
		},

		[theme.breakpoints.up(tablet)]: {
			backgroundPosition: -120,
			height: 500,
			width: 300
		}
	}
}));
