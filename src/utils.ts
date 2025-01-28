export const getImageUrl = (path: string) => {
	if (!path) {
		console.error('No path provided to getImageUrl')
		return ''
	}
	return `/assets/${path}`
}
