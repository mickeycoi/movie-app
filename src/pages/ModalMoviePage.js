import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import apiService from "../app/apiService";
import { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { Card, CardContent, Chip, Divider, Stack, Alert } from "@mui/material";
import GetMovieData from "../components/GetMovieData";

const modalStyle = {
  position: "absolute",
  backgroundColor: "#FFF",
  padding: "15px",
  zIndex: "1000",
  width: "100%",
  borderRadius: 4,
};
const overlayStyle = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "65%",
  backgroundColor: "#fff",
  zIndex: "1000",
  borderRadius: 4,
  overflowY: "auto",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalMoviePage() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    if (params.movieId) {
      const getData = async () => {
        setLoading(true);
        try {
          const res = await apiService.get(
            `/movie/${params.movieId}/videos?api_key=8d6f0cb4fe35f27fc39124f100bbb18d&language=en-US`
          );
          setMovie(
            res.data.results.filter((item) => item.type.includes("Trailer"))
          );
          console.log(
            "modalmovie",
            res.data.results.filter(
              (item) =>
                item.name.includes("Final ") || item.name.includes("Official ")
            )
          );

          setError("");
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
        setLoading(false);
      };
      getData();
    }
  }, [params]);

  return (
    <Modal
      keepMounted={false}
      open={true}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              {movie[0].key ? (
                <>
                  <Box
                    sx={{
                      margin: "auto",
                      width: "700px",
                      height: "calc(700px * 10/16)",
                      display: "flex",
                    }}
                  >
                    <iframe
                      title="Trailer"
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${movie[0].key}`}
                    ></iframe>
                  </Box>
                </>
              ) : (
                <>
                  <Typography
                    variant="h1"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#faaf00",
                    }}
                  >
                    OPP! Nothing here
                  </Typography>
                </>
              )}
            </>
          )}
        </>
      )}
    </Modal>
  );
}
