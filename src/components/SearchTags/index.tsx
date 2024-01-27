import { TextField } from '@mui/material'

export function SearchTags() {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      id="searchTags"
      label="Buscar Tags"
      name="searchTags"
      type="tags"
      autoComplete="tags"
      style={
        {
          // width: '31.25rem',
        }
      }
    />
  )
}
