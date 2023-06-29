import { Octokit } from '@octokit/core';
import { REQUEST_TYPE } from '../constants/api';

export type GetRepoData = {
  owner: string;
  repo_name: string;
};
type GetRepoDataRequest = {
  request_type: keyof typeof REQUEST_TYPE;
  url_params: string;
  request_params: GetRepoDataRequestParams;
};
type GetRepoDataRequestParams = {
  owner: string;
  repo: string;
};

const format_to_octokit_method = (request_data: GetRepoDataRequest) => {
  return `${request_data.request_type} /repos/{owner}/{repo}`;
};

const get_repo_data = async ({ owner, repo_name }: GetRepoData) => {
  console.log(`enter with: ${owner} ${repo_name}`);
  const octokit = new Octokit();
  const request_data = {
    request_type: 'GET',
    url_params: `/repos/${owner}/${repo_name}`,
    request_params: {
      owner: owner,
      repo: repo_name,
    },
  } satisfies GetRepoDataRequest;
  console.log(`generated request data with: ${JSON.stringify(request_data)}}`);

  try {
    const response = await octokit
      .request(
        format_to_octokit_method(request_data),
        request_data.request_params
      )
      .then((response) => response.data);
    console.log(`response: ${JSON.stringify(response)}`);
    return response;
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export { get_repo_data };
