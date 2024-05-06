import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

function MarketCard(props){
    const { heading = '', title = '', description = ''  } = props
    return (
        <Card 
          sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              maxWidth: 345, 
              height: 400, 
              boxShadow: 3,
              borderRadius: 4,
              px: 1,
            }}>
            <CardHeader>
                {heading}
            </CardHeader>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{marginTop: 'auto' }}>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}

export default MarketCard