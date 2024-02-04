export interface ProjectByTagsProps {
  id: string
  title: string
  tags: string[]
  link: string
  description: string
  created_at: string
  updated_at: string
  user_id: string
  photo_url: string
  user: {
    avatar_url: string
    name: string
    surname: string
  }
}
