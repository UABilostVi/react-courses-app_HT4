export function pipeDuration(time) {
	return new Date(time * 60 * 1000).toISOString().substr(11, 5);
}
