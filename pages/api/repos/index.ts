import cors from 'cors'
import nc from 'next-connect'
import { Octokit } from '@octokit/core'
import { NextApiRequest, NextApiResponse } from 'next'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
/* Fields to be selected for each repository */
const selectedFields = [
  'id',
  'name',
  'description',
  'default_branch',
  'archived',
  'forks_count',
  'homepage',
  'language',
  'private',
  'html_url',
  'stargazers_count',
  'pushed_at',
  'created_at',
  'updated_at'
]

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, _req, res) => {
    return res.status(500).json({
      error: err.message || 'Server Error'
    })
  },
  onNoMatch: (_req, res) => {
    return res.status(404).json({
      error: 'Not found.'
    })
  }
})
  .use(cors({
    origin: process.env.NODE_ENV === 'development' ? 'http://localhost:1310' : process.env.NEXT_PUBLIC_URL
  }))
  .get(async (_req, res) => {
    try {
      const repos = await octokit.request('GET /user/repos', {
        page: 1,
        per_page: 15,
        sort: 'created',
        affiliation: 'owner'
      })

      const filteredRepos = repos.data
        .filter(repo => repo?.owner?.login === process.env.GITHUB_REPO_OWNER)
        .filter((repo) => !repo.name.endsWith('-test')) // If the repo name ends with -test, it is a test repo and should not be displayed

      const headers = ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-ratelimit-reset']
      headers.forEach((header) => {
        res.setHeader(header, repos.headers[header]!)
      })

      filteredRepos.forEach((repo: Record<string, any>) => {
        Object.keys(repo).forEach((key) => {
          if (!selectedFields.includes(key)) delete repo[key]
        })
      })

      return res.status(200).json(
        filteredRepos.filter((repo) => ((repo.private && repo.homepage) || (!repo.private)))
      )
    } catch (error) {
      return res.json({ error: (error as any).message || 'Server Error' })
    }
  })

export default handler
