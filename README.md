# Open Educational Resources

## GitHub Workflows

This repository provides following workflows:

* [Release](https://github.com/studyathome-internationally/oer/actions/workflows/release.yml): builds and deploys website to https://oer.studyathome.technikum-wien.at/
* [Prerelease](https://github.com/studyathome-internationally/oer/actions/workflows/prerelease.yml): builds and deploys website to https://oer.studyathome.technikum-wien.at/next/
* [Algolia](https://github.com/studyathome-internationally/oer/actions/workflows/algolia.yml): deletes previous, creates and uploads new index to Algolia

NOTE: Workflow `Release` runs `Algolia` after building the website automatically.
Don't run workflow `Algolia` after running `Prerelease` since it won't have any effect.
When running workflow `Algolia` manually, enable deletion of the previous index to avoid execeeding the allowed amount of index records.

