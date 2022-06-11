import cors from 'cors'
import nc from 'next-connect'
import { Octokit } from '@octokit/core'
import { NextApiRequest, NextApiResponse } from 'next'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const selectedFields = [
  'id',
  'name',
  'description',
  'default_branch',
  'archived',
  'forks_count',
  'homepage',
  'full_name',
  'language',
  'private',
  'html_url',
  'stargazers_count',
  'pushed_at',
  'created_at',
  'updated_at',
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
  .get(async (req, res) => {
    const repo = await octokit.request('GET /repos/{owner}/{repo}', {
      repo: String(req.query.id),
      owner: process.env.GITHUB_REPO_OWNER || 'OmarEMC',
    })

    const headers = ['x-ratelimit-limit', 'x-ratelimit-remaining', 'x-ratelimit-reset']
    headers.forEach((header) => {
      res.setHeader(header, repo.headers[header]!)
    })

    Object.keys(repo.data).forEach((key) => {
      if (!selectedFields.includes(key)) delete repo.data[key as keyof typeof repo['data']]
    })

    return res.status(200).json(repo.data)
  })

export default handler
