import { setOutput, setFailed } from "@actions/core";
import repoDetails from "./input.mjs";
import { Octokit } from "@octokit/core";

try {
  let release = await new Octokit().repos.getLatestRelease(repoDetails());
  setOutput("latest", release.data.tag_name);
} catch (error) {
  if (error instanceof Error) {
    setFailed(error);
  }
}
