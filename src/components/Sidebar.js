import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, Route, Routes ,useNavigate} from "react-router-dom";
import ProductDeliverd from "./Localpartner/ProductDeliverd";
import ReceivedProduct from "./Localpartner/ReceivedProduct";
import ReturnProduct from "./Localpartner/ReturnProduct";
import DashboardLp from "./Localpartner/DashboardLp";
import ViewStatement from "./Localpartner/ViewStatement";
import ShopListlp from "./Localpartner/ShopListlp";
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openProfileModal, setOpenProfileModal] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuItemClick = () => {
    setOpen(false);
  };

  const handleProfileClick = () => {
    setOpenProfileModal(true);
  };

  const handleProfileModalClose = () => {
    setOpenProfileModal(false);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{ backgroundColor: "#4058b8" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              LOCAL PARTNER LOGIN
            </Typography>
            <Tooltip title="profile">
              <IconButton sx={{ p: 0 }} onClick={handleProfileClick}>
             
                  <Avatar alt="local partner" />
                
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              { text: "Dashboard", link: "/" },
              { text: "Recevied Product from HYZ", link: "/ReceivedProduct" },
              { text: "Current Orders", link: "/ProductDeliverd" },
              { text: "Shops", link: "/shoplistlp" },
              { text: "Returned Product", link: "/ReturnProduct" },
            ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.link}
                  onClick={handleMenuItemClick}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />
          <List>
            {["", "", ""].map((item, index) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />

          <Routes>
            <Route path="/" element={<DashboardLp />} />
            <Route path="/statement" element={<ViewStatement />} />
            <Route path="/ProductDeliverd" element={<ProductDeliverd />} />
            <Route path="/ReceivedProduct" element={<ReceivedProduct />} />
            <Route path="/ReturnProduct" element={<ReturnProduct />} />
            <Route path="/shoplistlp" element={<ShopListlp />} />
          </Routes>
        </Main>
      </Box>
      <Dialog open={openProfileModal} onClose={handleProfileModalClose}>
      <Box p={2}>
        <Card>
        <CardMedia
        component="img"
        alt="local partner image"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
          <CardContent>
            <Typography gutterBottom variant="h6">
              name
            </Typography>
            <Typography gutterBottom variant="h6">
              address
            </Typography> <Typography gutterBottom variant="h6">
            ware house location
          </Typography> <Typography gutterBottom variant="h6">
         bank details
        </Typography> <Typography gutterBottom variant="h6">
        summary
      </Typography>
          </CardContent>
        </Card>
      </Box>
    </Dialog>
    </>
  );
}
