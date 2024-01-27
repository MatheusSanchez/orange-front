import React from 'react'

import { LoaderContainer, LoaderIcon, LoaderOverlay } from './styles'

interface LoaderProps {
  isLoading: boolean
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    isLoading && (
      <LoaderOverlay>
        <LoaderContainer>
          <LoaderIcon></LoaderIcon>
        </LoaderContainer>
      </LoaderOverlay>
    )
  )
}

export default Loader
