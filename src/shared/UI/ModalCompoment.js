import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";


export const ModalCompoment = ({ title, children, openPopup, setOpenPopup, theme }) => {
  return (
    <Dialog
      onClose={() => {
        setOpenPopup(false);
      }}
      open={openPopup}>
      <DialogTitle>
        <div style={{width: "500px"}}>
          <div className="text-center py-2">
            <h1 style={{fontSize: "30px", width: "300px"}}>{title}</h1>
          </div>
        </div>
      </DialogTitle>
      <DialogContent dividers sx={{ maxHeight: "none" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};