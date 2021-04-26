import { makeStyles } from '@material-ui/core';
import { mobileS, mobileM, mobileL, tablet, laptop } from '../breakpoints/breakpoints';

export const useStyles = makeStyles((theme) => ({
	container: {
		maxWidth: 1300,
		boxSizing: 'border-box',
		margin: '0 auto'
	},

	headerText: {
		fontSize: 'var(--fontSmall)',
		textAlign: 'center',
		height: 50,
		marginTop: 60,
		marginBottom: 40,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileL)]: {
			marginTop: 100,
			marginBottom: 60
		},

		[theme.breakpoints.up(tablet)]: {
			fontSize: 'var(--fontMedium)',
			height: 100
		},

		[theme.breakpoints.up(laptop)]: {
			fontSize: 'var(--fontLarge)',
			marginTop: 200,
			marginBottom: 100
		}
	},

	grid: {
		backgroundColor: 'var(--colorBlack)',
		maxWidth: 1300,
		width: 'auto',
		margin: '0 auto',
		padding: '40px 0'
	},

	paper: {
		height: 350,
		width: 240,
		maxWidth: 500,
		margin: '0 auto',
		minWidth: 240,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileS)]: {
			height: 350,
			width: 300
		},

		[theme.breakpoints.up(mobileM)]: {
			height: 400,
			width: 'auto'
		},

		[theme.breakpoints.up(tablet)]: {
			height: 450
		}
	},

	cardTitle: {
		padding: '20px 0',
		fontSize: 'var(--fontSmall)',

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(tablet)]: {
			fontSize: 'var(--fontMedium)'
		}
	},

	imgContainer: {
		height: 'auto',
		width: 'inherit',
		maxWidth: 400,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto'
	},

	img: {
		height: 150,
		maxWidth: 400,
		padding: '0px 15px',
		width: '100%',
		minWidth: 'inherit',

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileM)]: {
			height: 200
		}
	},

	desc: {
		padding: 15,
		maxWidth: 400,
		textAlign: 'left',
		width: '100%',
		fontSize: 'var(--paragraphSmall)',
		lineHeight: 1.3,
		fontWeight: 300,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileS)]: {
			lineHeight: 1.5
		},

		[theme.breakpoints.up(tablet)]: {
			fontSize: 'var(--paragraphMedium)'
		}
	}
}));
