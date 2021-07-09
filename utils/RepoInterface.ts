/* eslint-disable camelcase */
export default interface RepositoryInterface {
  id: number;
  name: string;
  description: string;
  default_branch: string;
  archived: boolean;
  forks_count: number;
  homepage: string;
  language: string;
  private: boolean;
  html_url: string;
  stargazers_count: number;
  pushed_at: string;
  created_at: string;
  updated_at: string;
}
