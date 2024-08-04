// dependancies
import { useState } from 'react'
import { Box, Card, CardContent, CardMedia, Typography, useTheme } from "@mui/material"

// file imports
import { Styles as ProjectsCardStylesx } from './ProjectsCards.styles.ts'

type Props = {
	header: string;
	title: string;
	details: string;
	source: string | undefined;
	website: string | undefined;
}

type Link = "linkTextBlack" | "linkTextWhite"

const ProjectsCards = (props: Props) => {
	const { header, title, details, source, website } = props;
	const theme = useTheme();
  const Styles = ProjectsCardStylesx(theme);

	const [link, setLink] = useState<Link>('linkTextBlack')

	const handleHover = (hover: boolean) => {
		if (hover) {
			setLink('linkTextWhite');
		} else {
			setLink('linkTextBlack');
		}
	}

	return (
		<Card onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} sx={Styles.root}>
			<CardMedia
				component="img"
				alt="Image"
				height="210"
				image={header}
				title="Image"
			/>
			<CardContent>
				<Typography variant="h4">
					<b>{title}</b><br /><br />
				</Typography>
				<Typography variant="body2" component="p">
					{details}<br /><br />
				</Typography>

				<Box sx={Styles.linkContainer}>
					<Box sx={Styles.linkSpacing}>
						{source && <>
							<a rel="noreferrer" target="_blank" href={source} style={{textDecoration: "none"}}>
								<Typography sx={Styles[link]} display="inline">Source Code&nbsp;&nbsp;</Typography>
							</a>
						</>}
						{(source && website) && <>
							<Typography style={{ fontSize: "0.85rem" }} display="inline">|&nbsp;&nbsp;</Typography>
						</>}
						{website && <>
							<a rel="noreferrer" target="_blank" href={website} style={{textDecoration: "none"}}>
								<Typography sx={Styles[link]} display="inline">Live&nbsp;</Typography>
							</a>
						</>}
					</Box>
				</Box>
			</CardContent>
		</Card>

	);
}

export default ProjectsCards;