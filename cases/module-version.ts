import * as Version from "effect/Version"

const published = Version.getCurrentVersion()
Version.setCurrentVersion("fixture")
const overridden = Version.getCurrentVersion()
Version.setCurrentVersion(published)
console.log(JSON.stringify([published, overridden, Version.getCurrentVersion()]))
