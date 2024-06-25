import { useState } from 'react'
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import ProjectsCardStyles from './ProjectsCardsStyles.ts'

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

	const classes = ProjectsCardStyles()

	const [link, setLink] = useState<Link>('linkTextBlack')

	const handleHover = (hover: boolean) => {
		if (hover) {
			setLink('linkTextWhite');
		} else {
			setLink('linkTextBlack');
		}
	}

	return (
		<Card onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} className={classes.root}>
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

				<div className={classes.linkContainer}>
					<div className={classes.linkSpacing}>
						{source && <>
							<a rel="noreferrer" target="_blank" href={source} style={{textDecoration: "none"}}>
								<Typography className={classes[link]} display="inline">Source Code&nbsp;&nbsp;</Typography>
							</a>
						</>}
						{(source && website) && <>
							<Typography style={{ fontSize: "0.85rem" }} display="inline">|&nbsp;&nbsp;</Typography>
						</>}
						{website && <>
							<a rel="noreferrer" target="_blank" href={website} style={{textDecoration: "none"}}>
								<Typography className={classes[link]} display="inline">Live&nbsp;</Typography>
							</a>
						</>}
					</div>
				</div>
			</CardContent>
		</Card>

	);
}

export default ProjectsCards;