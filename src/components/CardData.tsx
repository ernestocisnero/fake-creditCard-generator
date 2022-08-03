import { Button, Grid, TextField } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useForm } from "../hooks";
import { useContext } from "react";
import { UserContext } from "../context";

export const CardData = () => {
    const { name, lastName, onInputChange, onReset } = useForm({
        name: "",
        lastName: "",
    });

    const { userData, setUserData } = useContext(UserContext);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setUserData({
            name,
            lastName
        })
        onReset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                sx={{
                    backgroundColor: "white",
                    padding: 3,
                    marginLeft: { xs: 5, sm: 10 },
                    marginTop: { xs: 2, sm: 20 },
                    borderRadius: 2,
                    width: { xs: 300, sm: 450 },
                }}
            >
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        required
                        label="Name"
                        type="text"
                        placeholder="John"
                        name="name"
                        value={name}
                        onChange={onInputChange}
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField
                        required
                        label="Last Name"
                        type="text"
                        placeholder="Doe"
                        name="lastName"
                        value={lastName}
                        onChange={onInputChange}
                        fullWidth
                    />
                </Grid>

                <Grid container spacing={0} sx={{ mb: 2, mt: 1 }}>
                    <Grid item xs={12} sm={8}>
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<CreditCardIcon />}
                        >
                            Generate Credit Card
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};
