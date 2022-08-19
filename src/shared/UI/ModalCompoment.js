import React from "react";
import { Dialog, DialogTitle, DialogContent, Slide } from "@mui/material";

export const ModalCompoment = ({
  title,
  children,
  openPopup,
  setOpenPopup,
  theme,
}) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      TransitionComponent={Transition}
      onClose={() => {
        setOpenPopup(false);
      }}
      open={openPopup}
    >
      <DialogContent dividers sx={{ maxHeight: "none" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
