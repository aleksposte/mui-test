import * as React from 'react';

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import imgConcertHall from '../img/imgConcertHall.svg'
import imgDanceHalll from '../img/imgDanceHalll.svg'
import imgBanquetHall from '../img/imgBanquetHall.svg'
import imgFighting from '../img/imgFighting.svg'
import imgConference from '../img/imgConference.svg'
import imgCyberCompetition from '../img/imgCyberCompetition.svg'

import GilroyThin from '../fonts/Gilroy-Thin.woff2'
import Gilroy from '../fonts/Gilroy-Bold.woff2'


const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
})

const MainTitleTypography = styled(Typography)`
	font-family: 'Gilroy';
	font-style: normal;
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #FFFFFF;
`

const IconTitleTypography = styled(Typography)`
	font-family: Gilroy;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
	letter-spacing: 0.08em;
	text-transform: uppercase;

	// background: linear-gradient(45deg, #FF2E00 11.98%, #BD00FF 98.96%);
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;

	animation: glow linear 4s infinite;
	-webkit-animation: glow linear 4s infinite;

	@-webkit-keyframes glow {
		0 % { background- color: #FF2E00; }
		50 % { background- color: #BD00FF; }
		100 % { background- color: #FF2E00; } 
	}
	@keyframes glow {
		0 % { background- color: #FF2E00;}
		50 % { background- color: #BD00FF; }
		100 % { background- color: #FF2E00; } 
	}
`

const IconNumTypography = styled(Typography)`
	font-family: Gilroy;
	font-style: normal;
	font-weight: bold;
	font-size: 56px;
	line-height: 64px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.04em;
	text-transform: uppercase;

	// background: linear-gradient(45deg, #FF2E00 11.98%, #BD00FF 98.96%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	animation: glow linear 4s infinite;
	-webkit-animation: glow linear 4s infinite; 
    
	@-webkit-keyframes glow { 
		0% { background-color: #FF2E00; }
		50% { background-color: #BD00FF; }
		100% { background-color: #FF2E00; } 

	} 
	@keyframes glow { 
		0% { background-color: #FF2E00; }
		50% { background-color: #BD00FF; }
		100% { background-color: #FF2E00; } 
	}
`

const BgGradient = styled(Typography)`
	position: absolute;
	width: 987px;
	height: 987px;
	left: -744px;
	top: 185px;

	background: radial-gradient(50% 50% at 50% 50%, rgba(255, 0, 15, 0.8) 0%, rgba(48, 76, 224, 0) 100%, rgba(0, 41, 255, 0) 100%);
	mix-blend-mode: lighten;
	filter: blur(180px);
`

const theme = createTheme({
  typography: {
		fontFamily: 'Gilroy',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
		@font-face {
			font-family: 'Gilroy';
			font-style: normal;
			font-display: swap;
			font-weight: 400;
			src: local('Gilroy'), local('Gilroy-Regular'), url(${ Gilroy }) format('woff2');
			unicodeRange: U + 0000 - 00FF, U + 0131, U + 0152 - 0153, U + 02BB - 02BC, U + 02C6, U + 02DA, U + 02DC, U + 2000 - 206F, U + 2074, U + 20AC, U + 2122, U + 2191, U + 2193, U + 2212, U + 2215, U + FEFF;
		}
      `,
    },
  },
})

const items = [
	{
		id: 1,
		img: imgConcertHall,
		title: "Концертный зал",
		value: "2 360 "
	},
	{
		id: 2,
		img: imgDanceHalll,
		title: "танцевальный зал",
		value: "3 000"
	},
	{
		id: 3,
		img: imgBanquetHall,
		title: "банкентный зал",
		value: "1 900"
	},
	{
		id: 4,
		img: imgFighting,
		title: "проведение боёв ",
		value: "2 700"
	},
	{
		id: 5,
		img: imgConference,
		title: "конференции",
		value: "1 140"
	},
	{
		id: 6,
		img: imgCyberCompetition,
		title: "кибер соревнования",
		value: "2 500"
	},
]


export default function Main() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
				<Box>
				  	<BgGradient />
				</Box>
				<Box sx={{ bgcolor: '#23262F' }}
				>
					<Container sx={{ py: 9 }} >
						<Grid
							container
							spacing={0}
							direction="column"
							alignItems="center"
							justifyContent="center"
						>
							<MainTitleTypography>
								Вмещаемость главного зала
							</MainTitleTypography>	
						</Grid>
					</Container>	

					<Container sx={{ py: 2 }} >
						<Grid 
							container 
							item
							spacing={1} 
							direction="row"	
							justifyContent="center"
							alignItems="flex-start"
						>
							{items.map((item) => (
								<Grid
									key={item.id} 
									spacing={0}
									direction="column"
									justifyContent="center"
									alignItems="flex-start"
									sx={{ marginLeft: 8.5, marginRight: 8.5, marginBottom: 7  }}
								>
									<Grid sx={{ width: 240, height: 158 }}
										container
										direction="column"
										justifyContent="center"
										alignItems="center">
										<Img alt="complex" src={item.img} />
									</Grid>
									<Grid xs
										container
										direction="column"
										justifyContent="center"
										alignItems="center">
											<IconTitleTypography>
												{item.title}
											</IconTitleTypography>
											<IconNumTypography>
												{item.value}
											</IconNumTypography>
										</Grid>
								</Grid>
							))}
						</Grid>
					</Container>
				</Box>
			</main>
		</ThemeProvider >
	)
}