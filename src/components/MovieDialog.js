import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useSelector } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';
import VideoBackground from './VideoBackground';

export default function MovieDialog() {
  const { open, id } = useSelector(store => store.movie);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpen(false));
  };

  // Check if trailer is available
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          background: 'linear-gradient(135deg, #181818 80%, #111 100%)',
          color: '#fff',
          borderRadius: 3,
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.7)',
          border: '1px solid #333',
          minWidth: 340,
          maxWidth: 480,
        },
      }}
    >
      <DialogContent sx={{ p: 0 }}>
        {trailerMovie?.key ? (
          <VideoBackground movieId={id} bool={true} />
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[140px] sm:min-h-[200px] text-center p-3">
            <span className="text-base sm:text-lg font-bebas netflix-red mb-1">No Trailer Available</span>
          </div>
        )}
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          onClick={handleClose}
          sx={{
            backgroundColor: '#e50914',
            color: '#fff',
            fontWeight: 700,
            borderRadius: 2,
            px: 4,
            py: 1.5,
            '&:hover': { backgroundColor: '#b0060f' },
            boxShadow: '0 2px 8px 0 rgba(229,9,20,0.2)',
            textTransform: 'none',
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
