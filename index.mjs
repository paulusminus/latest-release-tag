import { getInput, setOutput, setFailed } from '@actions/core';
import { Octokit } from '@octokit/rest';

try {
    let owner = getInput('owner') || 'paulusminus';
    let repo = getInput('repo') || 'lipl-control';
    
    let release = await new Octokit().repos.getLatestRelease({owner: owner, repo: repo});
    setOutput('latest', release.data.tag_name);        
} catch (error) {
    if (error instanceof Error) {
        setFailed(error);
    }
}
