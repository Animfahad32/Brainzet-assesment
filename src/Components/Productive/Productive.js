import { Container, Grid } from "@mui/material";
import img from "../../images/fa-angellist.png";
const Productive = () => {
    return (
       <>
       <Container style={{marginTop:"150px"}}>
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} style={{ justifyContent: "center"}}>
       <Grid item md={6} sm={12}  className="dis-mob" style={{ display: "flex"}}>
      
      <div className="cta-img">
      <img src={img} alt="" />
        
      </div>
       <div className="cta-info">
       <h2>Be More Productive</h2>
        <p>Lookback is free to try for 14 days</p>
       </div>
       </Grid>
       <Grid item md={6} sm={12} style={{ display: "flex", justifyContent: "end", alignItems: "center"}}>
       <div>
       <button className="cta-btn">Sign Up</button>
       </div>
       </Grid>
      
       </Grid>
       </Container>
       </>
        
    );
};

export default Productive;