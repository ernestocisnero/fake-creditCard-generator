import { Box, Typography } from "@mui/material";

export const CardNotGenerated = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: { xs:300, sm: 450 },
        height: { xs:200, sm:250},
        p: 2,
        marginTop: { xs:5, sm:20 },
        border: "1px dashed grey",
        borderRadius: 2,
      }}
    >
      <Typography sx={{ color: "white" }}>
        Your credit card will appear here.
      </Typography>
    </Box>
  );
};
