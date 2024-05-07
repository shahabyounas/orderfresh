
import MenusList from '../../components/Menus/Menus'
import Container from '@mui/material/Container'

export default function DashboardLayout({ children }) {
    return (
      <div style={{ display: 'flex' }}>
        <MenusList />
        <Container>
            {children}
        </Container>
      </div>
    )
  }
  