export interface ModalState {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  projectInfo: {
    title: string
    tags: string
    link: string
    description: string
    date?: string
    avatar?: string
    author?: string
  }
  imageBanner: string
}
