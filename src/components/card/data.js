import airflow from '../images/pc/airflow.png';
import pcDesign from '../images/pc/pc-design.png';
import driveStorage from '../images/pc/drive-storage.png';
import frontPanelIO from '../images/pc/front-panel-io.png';
import temperedGlass from '../images/pc/tempered-glass.png';
import xCustmFan from '../images/pc/x-custm-fan.png';

export const overview = [
	{
		id: 1,
		title: 'Design',
		desc: 'The Mini Tower R21 has an unique aluminum design, making it very lightweigth and easy to move around.',
		img: pcDesign
	},
	{
		id: 2,
		title: 'High AirFlow',
		desc:
			'The high airflow front panel allows the PC to cool properly by maximzing the airflow from both sides of the front panel',
		img: airflow
	},
	{
		id: 3,
		title: 'Front Panel I/O',
		desc:
			'Modern Front Panel I/O puts your connections at easy reach, including a USB 3.1 Type-C, USB 3.0 port, and a combination auido/microphone jack.',
		img: frontPanelIO
	},
	{
		id: 4,
		title: 'X Custm Fan',
		desc:
			'X Custm Mini Tower R21 includes 3 x 120mm cooling fans, while also allowing space to pre-install 1 addititonal cooling fan for enhanced cooling.',
		img: xCustmFan
	},
	{
		id: 5,
		title: 'Tempered Glass Side Panel',
		desc:
			'Tool-Free Dark Black Tinted Tempered Glass Side Panel allow you to show off your high-profile components and RGB lights.',
		img: temperedGlass
	},
	{
		id: 6,
		title: 'Storage',
		desc: 'Fits up to 3 SSDs and 2 HDDs.',
		img: driveStorage
	}
];
