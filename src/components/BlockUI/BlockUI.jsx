import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import BeatLoader from "react-spinners/BeatLoader";

const BlockUI = () => {
  return (
    <Modal
      aria-labelledby="suspense-modal"
      aria-describedby="Waiting for data to load"
      open={true}
      style={{ zIndex: 1400 }}
      hideBackdrop
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          outline: "none",
          bgcolor: "grey.100",
        }}
      >
        <BeatLoader color="blue" />
      </Box>
    </Modal>
  );
};

export default BlockUI;
