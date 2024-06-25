import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material/styles"

const ProjectsStyles = makeStyles((theme: Theme) => ({
	root: {
		background: theme.palette.primary.dark
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	align: {
		height: "80vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}
}))

export default ProjectsStyles;