import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import sucessSvg from '../../assets/sucess.svg'
import { BoxContainer } from './styles'

interface SucessModalProps {
  edit?: boolean
  create?: boolean
  delete?: boolean
  openSucessModal: boolean
  handleCloseSucessModal: () => void
}

export function SucessModal(props: SucessModalProps) {
  return (
    <div>
      <Modal
        open={props.openSucessModal}
        onClose={props.handleCloseSucessModal}
      >
        <BoxContainer>
          {props.edit && <h2>Edição concluída com sucesso!</h2>}
          {props.create && <h2>Criação concluída com sucesso!</h2>}
          {props.delete && <h2>Exclusão concluída com sucesso!</h2>}
          <img src={sucessSvg} alt="" />
          <Button
            variant="contained"
            style={{
              backgroundColor: '#f32',
              fontWeight: 'bold',
            }}
            onClick={props.handleCloseSucessModal}
          >
            Voltar para projetos
          </Button>
        </BoxContainer>
      </Modal>
    </div>
  )
}
