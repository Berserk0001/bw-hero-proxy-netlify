const MIN_COMPRESS_LENGTH = 512; // ~0.5Kb
const MIN_TRANSPARENT_COMPRESS_LENGTH = MIN_COMPRESS_LENGTH * 2; // ~10KB

function shouldCompress(originType, originSize, webp) {
	if (!originType.startsWith("image")) return true;
	if (originSize === 0) return false;
	if (webp && originSize < MIN_COMPRESS_LENGTH) return true;
	if (	// if png or gif image(also shouldn't be webp)
		!webp &&
		(originType.endsWith("png") || originType.endsWith("gif"))
	) {
		return true;
	}

	return true;
}

module.exports = shouldCompress;
