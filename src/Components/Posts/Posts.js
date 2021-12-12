import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Container, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import avatar from '../../images/avatar1.png';
const Posts = () => {
    let [likeCount, setLikeCount]= useState(0)

    const likeIncrease = (e) => {
        setLikeCount(likeCount++)
    }

    return (
     <>

<Container maxWidth="lg" style={{marginTop:"100px"}}>
    <div className="text-center">
        <h2 className="posts">Posts</h2>
    </div>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} style={{ justifyContent: "center"}}>
  <Grid item md={6} style={{
    display: "flex",
    justifyContent: "center"
}}>
  <Card sx={{ maxWidth: 459 }} className="card-bg">
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              <img src={avatar} alt="" />
            </Avatar>
          }
        />
       
        <CardContent>
          <Typography variant="h4" className="card-title">
          A Guide To <br /> Rocky <br /> Mountain 
          </Typography>
          <Typography variant="body2" className="card-para" >
          These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on
          </Typography>
        </CardContent>
        <CardActions  style={{     justifyContent: 'space-around',
    borderTop: '1px solid #FFFFFF'}}>
          <IconButton aria-label="add to favorites" style={{ color: 'white' }}>
            <button onClick={likeIncrease} className="action-btn"><FavoriteIcon /> {likeCount}</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><TextsmsIcon /> 355</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><ShareIcon /> 355</button>
          </IconButton>
        
        </CardActions>

      </Card>
  </Grid>
  <Grid item md={6} style={{
    display: "flex",
    justifyContent: "center"
}}>
  <Card sx={{ maxWidth: 459 }}  className="card-bg">
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              <img src={avatar} alt="" />
            </Avatar>
          }
        />
       
        <CardContent>
          <Typography variant="h4" className="card-title">
          A Guide To <br /> Rocky <br /> Mountain 
          </Typography>
          <Typography variant="body2" className="card-para" >
          These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{     justifyContent: 'space-around',
    borderTop: '1px solid #FFFFFF'}}>
          <IconButton aria-label="add to favorites" style={{ color: 'white' }}>
            <button onClick={likeIncrease}  className="action-btn"><FavoriteIcon /> 355</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><TextsmsIcon /> 355</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><ShareIcon /> 355</button>
          </IconButton>
        
        </CardActions>

      </Card>
  </Grid>
  <Grid item md={6} style={{
    display: "flex",
    justifyContent: "center"
}}>
  <Card sx={{ maxWidth: 459 }}  className="card-bg">
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              <img src={avatar} alt="" />
            </Avatar>
          }
        />
       
        <CardContent>
          <Typography variant="h4" className="card-title">
          A Guide To <br /> Rocky <br /> Mountain 
          </Typography>
          <Typography variant="body2" className="card-para" >
          These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{     justifyContent: 'space-around',
    borderTop: '1px solid #FFFFFF'}}>
          <IconButton aria-label="add to favorites" style={{ color: 'white' }}>
            <button onClick={likeIncrease}  className="action-btn"><FavoriteIcon /> 355</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><TextsmsIcon /> 355</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><ShareIcon /> 355</button>
          </IconButton>
        
        </CardActions>

      </Card>
  </Grid>
  <Grid item md={6} style={{
    display: "flex",
    justifyContent: "center"
}}>
  <Card sx={{ maxWidth: 459 }} className="card-bg">
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              <img src={avatar} alt="" />
            </Avatar>
          }
        />
       
        <CardContent>
          <Typography variant="h4" className="card-title">
          A Guide To <br /> Rocky <br /> Mountain 
          </Typography>
          <Typography variant="body2" className="card-para" >
          These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{     justifyContent: 'space-around',
    borderTop: '1px solid #FFFFFF'}}>
          <IconButton aria-label="add to favorites" style={{ color: 'white' }}>
            <button onClick={likeIncrease}  className="action-btn"><FavoriteIcon /> {likeCount}</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><TextsmsIcon /> 355</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><ShareIcon /> 355</button>
          </IconButton>
        
        </CardActions>

      </Card>
  </Grid>
  <Grid item md={6} style={{
    display: "flex",
    justifyContent: "center"
}}>
  <Card sx={{ maxWidth: 459 }} className="card-bg">
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              <img src={avatar} alt="" />
            </Avatar>
          }
        />
       
        <CardContent>
          <Typography variant="h4" className="card-title">
          A Guide To <br /> Rocky <br /> Mountain 
          </Typography>
          <Typography variant="body2" className="card-para" >
          These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{     justifyContent: 'space-around',
    borderTop: '1px solid #FFFFFF'}}>
          <IconButton aria-label="add to favorites" style={{ color: 'white' }}>
            <button onClick={likeIncrease}  className="action-btn"><FavoriteIcon /> {likeCount}</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><TextsmsIcon /> 355</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><ShareIcon /> 355</button>
          </IconButton>
        
        </CardActions>

      </Card>
  </Grid>
  <Grid item md={6} style={{
    display: "flex",
    justifyContent: "center"
}}>
  <Card sx={{ maxWidth: 459 }} className="card-bg">
        <CardHeader
          avatar={
            <Avatar  aria-label="recipe">
              <img src={avatar} alt="" />
            </Avatar>
          }
        />
       
        <CardContent>
          <Typography variant="h4" className="card-title">
          A Guide To <br /> Rocky <br /> Mountain 
          </Typography>
          <Typography variant="body2" className="card-para" >
          These tips come from the safety experts at Voith Turbo, York, Pa., which manufactures a device that helps trains with braking, to make train travel even better. The new type of railcar is on
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{     justifyContent: 'space-around',
    borderTop: '1px solid #FFFFFF'}}>
          <IconButton aria-label="add to favorites" style={{ color: 'white' }}>
            <button onClick={likeIncrease}  className="action-btn"><FavoriteIcon /> {likeCount}</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><TextsmsIcon /> 355</button>
          </IconButton>
          <IconButton aria-label="share" style={{ color: 'white' }}>
            <button className="action-btn"><ShareIcon /> 355</button>
          </IconButton>
        
        </CardActions>

      </Card>
  </Grid>
</Grid>
</Container>







       
     </>
    );
};

export default Posts;