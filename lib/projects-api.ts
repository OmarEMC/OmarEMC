import { supabase } from "./supabase"
import { Project } from "@/utils/interfaces/Project"

export class ProjectsAPI {
  static async getAll() {
    const { data: projects, error } = await supabase
      .from<Project>('projects')
      .select('*')

    return {
      projects,
      error,
    }
  }
}