import RepositoryInterface from '@/utils/interfaces/RepoInterface'

export class ReposAPI {
  private static baseUrl = `${process.env.NODE_ENV === 'development' ? 'http://localhost:1310' : process.env.NEXT_PUBLIC_URL}/api/repos`

  static async getAll () {
    const res = await fetch(
      this.baseUrl
    )

    const data = await res.json()

    if (!res.ok) {
      return { data: undefined, error: data.error }
    }

    return { data: data as RepositoryInterface[], error: undefined }
  }

  static async getById (id: string) {
    const res = await fetch(
      this.baseUrl + `/${id}`
    )

    const data = await res.json()

    if (!res.ok) {
      return { data: undefined, error: data.error }
    }

    return { data: data as RepositoryInterface, error: undefined }
  }
}
