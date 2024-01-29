import { Collections } from '@mui/icons-material'

import { UploadFileContentContainer } from './styles'

interface UploadFileContentProps {
  onClick: () => void
}

export function UploadFileContent({ onClick }: UploadFileContentProps) {
  return (
    <UploadFileContentContainer onClick={onClick}>
      <Collections
        sx={{
          height: 46,
          width: 46,
          fill: '#323232',
        }}
      />
      <p>Adicione seu primeiro projeto</p>
      <span>Compartilhe seu talento com milhares de pessoas</span>
    </UploadFileContentContainer>
  )
}
