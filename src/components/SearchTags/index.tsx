import { TextField } from '@mui/material'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import { ChipData } from '../../interfaces/ChipData'
import { ErrorMessage } from './styles'

const ChipList = ({
  chipData,
  handleDelete,
}: {
  chipData: readonly ChipData[]
  handleDelete: (chip: ChipData) => () => void
}) => {
  const SpacedChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
  }))

  return (
    <>
      {chipData.map((data) => (
        <SpacedChip
          key={data.label}
          label={data.label}
          onDelete={handleDelete(data)}
        />
      ))}
    </>
  )
}

interface SearchTagsProps {
  chipData: readonly ChipData[]
  setChipData: React.Dispatch<React.SetStateAction<readonly ChipData[]>>
}

export function SearchTags(props: SearchTagsProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleDelete = (chipToDelete: ChipData) => () => {
    props.setChipData((chips) =>
      chips.filter((chip) => chip.label !== chipToDelete.label),
    )
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      const newTag = (event.target as HTMLInputElement).value
        .trim()
        .toLowerCase()

      if (newTag === '') {
        return
      }

      if (newTag.length > 12) {
        setErrorMessage('A tag não pode ter mais de 12 caracteres')
      } else if (
        props.chipData.some(
          (chip) => chip.label.toLowerCase() === newTag.toLowerCase(),
        )
      ) {
        setErrorMessage('Tag já inserida')
      } else if (props.chipData.length >= 2) {
        setErrorMessage('Limite máximo de 2 tags')
      } else {
        props.setChipData((prevChips) => [...prevChips, { label: newTag }])
        setErrorMessage(null)
        ;(event.target as HTMLInputElement).value = ''
      }
    }
  }

  return (
    <>
      <TextField
        variant="outlined"
        fullWidth
        id="searchTags"
        label="Buscar Tags"
        name="searchTags"
        type="tags"
        autoComplete="tags"
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: (
            <ChipList chipData={props.chipData} handleDelete={handleDelete} />
          ),
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  )
}
