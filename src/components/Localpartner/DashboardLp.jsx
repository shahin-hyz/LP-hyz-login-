import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Box, CardActions } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
];

const DashboardLp = () => {

  const cardContent = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          INITIAL AMOUNT
        </Typography>
        <Typography variant="h5" component="div">
          ₹ 100,000
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          balance
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to="/statement">VIEW STATEMENT</Button>
      </CardActions>
    </React.Fragment>
  );

  const cardContent2 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          PROFIT AMOUNT
        </Typography>
        <Typography variant="h5" component="div">
          ₹ 100,000
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          balance
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">withdraw</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <>


      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{cardContent}</Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{cardContent2}</Card>
            </Box>
          </Grid>

          
          <Grid item xs={12} >
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                  Sales Overview
                </Typography>
                <LineChart width={750} height={300} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </CardContent>
            </Card>
          </Grid>


          <Grid item xs={6} sm={7} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                  🔔 NOTIFICATIONS
                </Typography>
                <hr />
                <Card variant="solid">
                  <CardContent>
                    <Typography variant="h6" level="title-md" style={{ color: "red" }}>Assigned one order</Typography>
                    <Typography variant="p">order to trivandrum</Typography>
                  </CardContent>
                </Card><hr />
                <Card variant="solid">
                  <CardContent>
                    <Typography variant="h6" level="title-md" style={{ color: "green" }}>Order Delivered</Typography>
                    <Typography variant="p">order delivered to trivandrum is successful</Typography>
                  </CardContent>
                </Card><hr />
                <Card variant="solid">
                  <CardContent>
                    <Typography variant="h6" level="title-md" style={{ color: "red" }}>ALERT</Typography>
                    <Typography variant="p" style={{ color: "red" }}>low amount in wallet</Typography>
                  </CardContent>
                </Card><hr />
                <Card variant="solid">
                  <CardContent>
                    <Typography variant="h6" level="title-md" style={{ color: "darkblue" }}>One shop Added</Typography>
                    <Typography variant="p">added from hyz-business</Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashboardLp;
