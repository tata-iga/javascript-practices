const goToTop = () => window.scrollTo(0, 0);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const executableName = getExecutableName(channel, appName);