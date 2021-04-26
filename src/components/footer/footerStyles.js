import { makeStyles } from '@material-ui/core';
import { mobileL, mobileS } from '../breakpoints/breakpoints';

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'var(--colorWhite)',
		height: '100%',
		display: 'flex',
		paddingTop: 100
	},

	footerContainer: {
		maxWidth: 1300,
		margin: 'auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},

	gridItem: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		minWidth: 220,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(960)]: {
			display: 'block'
		}
	},

	alignInfo: {
		display: 'flex',
		padding: 5,
		minWidth: 'inherit',
		width: 250,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileS)]: {
			width: 300
		},

		[theme.breakpoints.up(mobileL)]: {
			width: 400
		},

		[theme.breakpoints.up(960)]: {
			width: 'auto'
		}
	},

	icon: {
		color: 'var(--colorBlack)'
	},

	text: {
		paddingLeft: 5,
		fontSize: 'var(--fontSmall)',
		minWidth: 'inherit'
	},

	copyright: {
		backgroundColor: 'var(--colorWhite)',
		maxWidth: 1300,
		margin: ' 0 auto',
		height: 30,
		padding: '20px 12px 50px',
		minWidth: 220,
		width: 250,

		//<--------------breakpoints-------------->
		[theme.breakpoints.up(mobileS)]: {
			width: 300
		},

		[theme.breakpoints.up(mobileL)]: {
			width: 400
		},

		[theme.breakpoints.up(960)]: {
			width: 'auto'
		}
	},

	links: {
		textDecoration: 'none',
		color: 'var(--colorBlack)',
		display: 'flex'
	}
}));
