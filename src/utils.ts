export const getImageUrl = (path: string) => {
	if (!path) {
		console.error('No path provided to getImageUrl')
		return ''
	}
	return `https://dulcet-tanuki-268d13.netlify.app/assets/${path}`
}
