const merge = (a, b) => [...a, ...b];
const channel = getChannel(computedAppVersion);
const apmRootPath = path.join(repositoryRootPath, 'apm');