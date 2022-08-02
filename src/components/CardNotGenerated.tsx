import { Box, Typography } from '@mui/material';

export const CardNotGenerated = () => {
    return (
        <Box sx={{ display:'flex', justifyContent:'center', width: 450, height: 250, p: 2, marginTop: 20, border: '1px dashed grey', borderRadius: 2 }}>
            <Typography sx={{ color:'white' }}>
                <p>Your credit card will appear here.</p>
            </Typography> 
            
        </Box>
    )
}
