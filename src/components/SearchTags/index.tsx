import 'react-toastify/dist/ReactToastify.css'

import { TextField } from '@mui/material'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

interface ChipData {
  label: string
}

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

export function SearchTags() {
  const [chipData, setChipData] = useState<readonly ChipData[]>([])

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
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

      if (newTag.length > 16) {
        toast.error('A tag não pode ter mais de 16 caracteres')
      } else if (
        chipData.some(
          (chip) => chip.label.toLowerCase() === newTag.toLowerCase(),
        )
      ) {
        toast.error('Tag já inserida')
      } else if (chipData.length >= 2) {
        toast.error('Limite máximo de 2 tags')
      } else {
        setChipData((prevChips) => [...prevChips, { label: newTag }])
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
            <ChipList chipData={chipData} handleDelete={handleDelete} />
          ),
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}
