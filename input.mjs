import { getInput } from '@actions/core';

function missing(what) {
  throw Error(`Missing input ${what}`);
}

export default function () {
  return {
    owner: getInput('owner') || function () { missing('owner') }(),
    repo: getInput('repo') || function () { missing('repo') }(),
  }
}

