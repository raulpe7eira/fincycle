import { IconButton, Menu as MuiMenu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

export const Menu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Fragment>
      <IconButton color="inherit" onClick={handleOpen}>
        <MenuIcon />
      </IconButton>

      <MuiMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        getContentAnchorEl={null}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/reports");
          }}
        >
          Relatórios
        </MenuItem>
      </MuiMenu>
    </Fragment>
  );
};

export default Menu;
