import Typography from '@mui/material/Typography'
import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'
import minhaFoto from './photo.jpg'


function Author() {
  const [likes, setLikes] = React.useState(() => {
    const storedData = localStorage.getItem('likes')
    return storedData ? JSON.parse(storedData) : 0 // uso do ternário para valor inicial igual a zero
    // uso do JSON.parse para converter string em número (pois em localStorage tudo é string)
  })

  React.useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes)) // uso do JSON.stringify para converter número em string
  }, [likes])

  return(
    <Card sx={{ maxWidth: 335 }}>
        <Typography variant="h5" gutterBottom>
          Sobre o autor
        </Typography> 
      <CardMedia
        sx={{ height: 270 }}
        image={minhaFoto} // importei a foto no topo do arquivo
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Hugo Mendes
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Atualmente cursando Análise e Desenvolvimento de Sistemas na Fatec Franca e trabalhando como estágiario em 
          análise de dados na Softtyr.
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          variant="contained"
          size="small" 
          startIcon={<FavoriteIcon />}
          onClick={() => setLikes(likes + 1)}
          sx={{ 
            backgroundColor: '#e91e63',
            color: '#fff'
          }}
        >
          CURTIR ({likes})
        </Button>
      </CardActions>
    </Card>
  )
}

export default Author
