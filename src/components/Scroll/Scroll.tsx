import { Box, Fade, useScrollTrigger } from '@mui/material';
import { Props } from '../../constants/constants';

export function ScrollTop(props: Props) {
  const { children, window, handleMenuClick } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        onClick={(e) => handleMenuClick({ event: e, querySelector: '#welcome-page-anchor' })}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
