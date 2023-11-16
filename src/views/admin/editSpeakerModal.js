import { useState, useEffect } from "react";
import { Modal, TextField, Button, Fade, Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { Timestamp } from "firebase/firestore";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "50%",
  maxWidth: 800,
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const EditSpeakerModal = ({ isOpen, handleClose, speaker }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    conferenceLink: "",
    photoUrl: "",
    dateTalk: new Date(),
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, dateTalk: date });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    const speakerRef = doc(db, "speakers", speaker.id);
    try {
      await updateDoc(speakerRef, {
        ...formData,
        dateTalk: formData.dateTalk
          ? Timestamp.fromDate(formData.dateTalk)
          : null,
      });
      handleClose();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  useEffect(() => {
    if (speaker) {
      setFormData({
        name: speaker.name || "",
        description: speaker.description || "",
        conferenceLink: speaker.conferenceLink || "",
        photoUrl: speaker.photoUrl || "",
        dateTalk: speaker.dateTalk ? speaker.dateTalk.toDate() : null,
      });
    }
  }, [speaker]);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
    >
      <Fade in={isOpen}>
        <Box sx={style}>
          <Box sx={{ flex: "1 1 auto", mr: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Conference Link"
              name="conferenceLink"
              value={formData.conferenceLink}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Photo URL"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              margin="normal"
            />
            <div style={{ paddingTop: "1rem" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date Talk"
                  value={formData.dateTalk}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
            </Box>
          </Box>

          <Box sx={{ flex: "0 0 auto" }}>
            {formData.photoUrl && (
              <img
                src={formData.photoUrl}
                alt="Speaker"
                style={{ maxWidth: "100%", maxHeight: 300 }}
              />
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default EditSpeakerModal;
