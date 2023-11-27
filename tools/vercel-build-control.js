const { VERCEL_ENV, VERCEL_GIT_COMMIT_REF, VERCEL_GIT_COMMIT_MESSAGE } =
	process.env;

const isProduction =
	VERCEL_ENV === "production" || VERCEL_GIT_COMMIT_REF.indexOf("prod") >= 0;

const isReleaseCommit = VERCEL_GIT_COMMIT_MESSAGE.indexOf("Release v") >= 0;

// If deployment is production, build if it's a "release" commit
if (isProduction) process.exit(isReleaseCommit ? 1 : 0);

// If deployment is not production, build if it's NOT a "release" commit
process.exit(!isReleaseCommit ? 1 : 0);
