import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

function MarketCard(){
    return (
        <Card>
            <CardHeader>
                Huddersfield Market
            </CardHeader>
            <CardContent>
                <Typography> Fresh Markets  </Typography>
            </CardContent>
        </Card>
    )
}

export default MarketCard