import {
  Box,
  Button,
  Divider,
  Modal,
  Typography
} from '@mui/material'
import { CloseButton, Container, ExitButton } from './styles'
import { type ConfirmModalProps } from './ConfirmModal.interface'
import CloseIcon from '@mui/icons-material/Close'

export function ConfirmModal(props: ConfirmModalProps): JSX.Element {
  const { isOpen, closeModal, onSubmit } = props

  return (
    <Modal sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} open={isOpen} onClose={closeModal}>
      <Container>
        <CloseButton disableRipple onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <Box p="30px">
          <Typography variant="h2">Excluir país</Typography>
          <Box mt="16px">
            <Divider />
          </Box>
          <Box my="20px">
            <Typography textAlign="center" color="#454545" fontSize="18px">Deseja excluir o país da lista?</Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              fullWidth
              onClick={onSubmit}
            >
              <Typography>Confirmar</Typography>
            </Button>
            <ExitButton
              variant="contained"
              fullWidth
              color='inherit'
              onClick={closeModal}
            >
              <Typography color="#515151" fontWeight="600">Sair</Typography>
            </ExitButton>
          </Box>
        </Box>
      </Container>
    </Modal>
  )
}
