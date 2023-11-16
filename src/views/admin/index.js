import { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { db } from '../../utils/firebase';

import './Admin.css';
import EditSpeakerModal from './editSpeakerModal';

const AdminView = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  const columnsSpeakers = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "conferenceLink", headerName: "Conference Link", width: 300 },
    { field: "photoUrl", headerName: "Photo Url", width: 300 },
  ];

  const columnsRegistration = [
    { field: "id", headerName: "ID", width: 148 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "university", headerName: "University", width: 200 },
    { field: "tecCampus", headerName: "Tec Campus", width: 200 },
    { field: "major", headerName: "Major", width: 200 },
  ];

  const rowsSpeakers = speakers.map((speaker) => {
    return {
      id: speaker.id,
      name: speaker.name,
      description: speaker.description,
      conferenceLink:
        speaker.conferenceLink.length > 0 ? speaker.conferenceLink : "N/A",
      photoUrl: speaker.photoUrl,
    };
  });

  const rowsRegistration = registrations.map((registration) => {
    return {
      id: registration.id,
      name: registration.name,
      email: registration.email,
      phone: registration.phone,
      company: registration.company,
      jobTitle: registration.jobTitle,
      experience: registration.experience,
      interest: registration.interest,
      comments: registration.comments,
    };
  });

  const handleRowClick = (params) => {
    setCurrentSpeaker(params.row);
    setModalOpen(true);
  };

  const updateSpeakerList = (id, updatedSpeaker) => {
    setSpeakers(
      speakers.map((speaker) => (speaker.id === id ? updatedSpeaker : speaker))
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("speakers").get();
      setSpeakers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("registrations").get();
      setRegistrations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);

  return (
    <div className="Admin">
      <h1 style={{ paddingLeft: "2rem" }}>Admin View</h1>
      <hr />

      <div>
        <h2 style={{ paddingLeft: "12.5%" }}>Speakers</h2>
        <DataGrid
          rows={rowsSpeakers}
          columns={columnsSpeakers}
          onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "75%",
            margin: "auto",
          }}
        />
      </div>

      <div>
        <h2 style={{ paddingLeft: "12.5%" }}>Registrations</h2>
        <DataGrid
          rows={rowsRegistration}
          columns={columnsRegistration}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "75%",
            margin: "auto",
          }}
        />
      </div>

      {currentSpeaker && (
        <EditSpeakerModal
          isOpen={isModalOpen}
          handleClose={() => setModalOpen(false)}
          speaker={currentSpeaker}
          updateSpeakerList={updateSpeakerList}
        />
      )}
    </div>
  );
}

export default AdminView;
