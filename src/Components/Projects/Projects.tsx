// dependancies
import { useState } from "react"
import { Grid, Typography, IconButton, useMediaQuery, Slide, Box, useTheme } from "@mui/material"
import { ArrowBack, ArrowForward } from "@mui/icons-material";

// file imports
import { Styles as ProjectsStyles } from "./Projects.styles.ts"
import ProjectsCard from './ProjectsCard/ProjectsCards'
import { cardContents, firstSectionCards, secondSectionCards, thirdSectionCards, firstSmallSectionCards, secondSmallSectionCards } from "./cardContents.ts"

type Direction = "left" | "right" | "up" | "down" | undefined

const Projects = () => {
	const theme = useTheme();
  const Styles = ProjectsStyles(theme);

	const lg = useMediaQuery('(min-width: 1280px)');
	const md = useMediaQuery('(max-width: 1279px)');
	const sm = useMediaQuery('(min-width: 870px)');
	const sm2 = useMediaQuery('(min-width: 600px)');
	const xs = useMediaQuery('(max-width: 869px)');

	const [state, setState] = useState(0);
	const [slide, setSlide] = useState(true);
	const [dir, setDir] = useState<Direction>("right");

	const changeStateLeft = (cards: number) => {
		let divisor;
		if (cards === 3) {
			divisor = firstSectionCards.length;
		} else if (cards === 2) {
			divisor = firstSmallSectionCards.length;
		} else {
			divisor = cardContents.length
		}
		const negativeChange = (((state - 1) % divisor) + divisor) % divisor;
		setDir("left");
		setSlide(false);
		setTimeout(() => {
			setState(negativeChange);
			setDir("right");
			setSlide(true);
		}, 300);
	}

	const changeStateRight = (cards: number) => {
		let divisor;
		if (cards === 3) {
			divisor = firstSectionCards.length;
		} else if (cards === 2) {
			divisor = firstSmallSectionCards.length;
		} else {
			divisor = cardContents.length
		}
		setDir("right");
		setSlide(false);
		setTimeout(() => {
			setState((state + 1) % divisor);
			setDir("left");
			setSlide(true);
		}, 300);
	}

	return (
		<Grid id="projects" sx={Styles.root} container>
			<Grid sx={Styles.title} item xs={12}>
				<br />
				<Typography variant="h2" sx={Styles.myProject}>My Projects</Typography>
				<Typography variant="h4">- What I am working on -</Typography>
			</Grid>

			{sm2 && <Grid item xs={1}></Grid>}

			{lg && <>
				<Grid item xs={1}>
					<Box sx={Styles.align}>
						<IconButton onClick={() => changeStateLeft(3)} aria-label="arrow-left">
							<ArrowBack />
						</IconButton>
					</Box>
				</Grid>
				<Grid item container spacing={1} xs={8}>
					<Slide in={slide} direction={dir}>
						<Grid item xs={4}>
							<Box sx={Styles.align}>
								{firstSectionCards.map((firstSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={firstSectionCard.title}
											header={firstSectionCard.header}
											title={firstSectionCard.title}
											details={firstSectionCard.details}
											source={firstSectionCard.source}
											website={firstSectionCard.website}
										/>
									);
								})}
							</Box>
						</Grid>
					</Slide>
					<Slide in={slide} direction={dir}>
						<Grid item xs={4}>
							<Box sx={Styles.align}>
								{secondSectionCards.map((secondSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={secondSectionCard.title}
											header={secondSectionCard.header}
											title={secondSectionCard.title}
											details={secondSectionCard.details}
											source={secondSectionCard.source}
											website={secondSectionCard.website}
										/>
									);
								})}
							</Box>
						</Grid>
					</Slide>
					<Slide in={slide} direction={dir}>
						<Grid item xs={4}>
							<Box sx={Styles.align}>
								{thirdSectionCards.map((thirdSectionCard, index) => {
									return (
										state === index &&
										<ProjectsCard
											key={thirdSectionCard.title}
											header={thirdSectionCard.header}
											title={thirdSectionCard.title}
											details={thirdSectionCard.details}
											source={thirdSectionCard.source}
											website={thirdSectionCard.website}
										/>
									);
								})}
							</Box>
						</Grid>
					</Slide>
				</Grid>
				<Grid item xs={1}>
					<Box sx={Styles.align}>
						<IconButton onClick={() => changeStateRight(3)} aria-label="arrow-right">
							<ArrowForward />
						</IconButton>
					</Box>
				</Grid>
			</>}

			{md &&
				sm && <>
					<Grid item xs={1}>
						<Box sx={Styles.align}>
							<IconButton onClick={() => changeStateLeft(2)} aria-label="arrow-left">
								<ArrowBack />
							</IconButton>
						</Box>
					</Grid>
					<Grid item container spacing={1} xs={8}>
						<Slide in={slide} direction={dir}>
							<Grid item xs={6}>
								<Box sx={Styles.align}>
									{firstSmallSectionCards.map((firstSmallSectionCard, index) => {
										return (
											state === index &&
											<ProjectsCard
												key={firstSmallSectionCard.title}
												header={firstSmallSectionCard.header}
												title={firstSmallSectionCard.title}
												details={firstSmallSectionCard.details}
												source={firstSmallSectionCard.source}
												website={firstSmallSectionCard.website}
											/>
										);
									})}
								</Box>
							</Grid>
						</Slide>
						<Slide in={slide} direction={dir}>
							<Grid item xs={6}>
								<Box sx={Styles.align}>
									{secondSmallSectionCards.map((secondSmallSectionCard, index) => {
										return (
											state === index &&
											<ProjectsCard
												key={secondSmallSectionCard.title}
												header={secondSmallSectionCard.header}
												title={secondSmallSectionCard.title}
												details={secondSmallSectionCard.details}
												source={secondSmallSectionCard.source}
												website={secondSmallSectionCard.website}
											/>
										);
									})}
								</Box>
							</Grid>
						</Slide>
					</Grid>
					<Grid item xs={1}>
						<Box sx={Styles.align}>
							<IconButton onClick={() => changeStateRight(2)} aria-label="arrow-right">
								<ArrowForward />
							</IconButton>
						</Box>
					</Grid>
				</>}

			{xs && <>
				<Grid item xs={2} sm={1}>
					<Box sx={Styles.align}>
						<IconButton onClick={() => changeStateLeft(1)} aria-label="arrow-left">
							<ArrowBack />
						</IconButton>
					</Box>
				</Grid>
				<Grid item xs={8}>
					<Slide in={slide} direction={dir}>
						<Box sx={Styles.align}>
							{cardContents.map((cardContent, index) => {
								return (
									state === index &&
									<ProjectsCard
										key={cardContent.title}
										header={cardContent.header}
										title={cardContent.title}
										details={cardContent.details}
										source={cardContent.source}
										website={cardContent.website}
									/>
								);
							})}
						</Box>
					</Slide>
				</Grid>
				<Grid item xs={2} sm={1}>
					<Box sx={Styles.align}>
						<IconButton onClick={() => changeStateRight(1)} aria-label="arrow-right">
							<ArrowForward />
						</IconButton>
					</Box>
				</Grid>
			</>}
		</Grid>
	)
}

export default Projects;