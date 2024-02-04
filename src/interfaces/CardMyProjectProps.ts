export interface CardMyProjectProps {
  avatar?: string
  userName?: string
  date?: string
  tags?: string[]
  photo_url?: string
  project_id?: string | undefined
  blockOptions?: boolean
  onClick?: () => void
}
