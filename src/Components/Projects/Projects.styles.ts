import { Theme } from "@mui/material/styles"

export const Styles = (theme: Theme) => ({
	root: {
		background: theme.palette.primary.dark
	},
	title: {
		textAlign: "center",
		color: theme.palette.secondary.dark
	},
	myProject:{
		fontWeight: 800
	},
	align: {
		height: "80vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}
})