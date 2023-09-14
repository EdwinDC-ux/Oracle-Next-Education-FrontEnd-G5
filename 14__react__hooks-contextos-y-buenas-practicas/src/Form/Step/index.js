import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CounterContext } from "../../Context";

function Step ({ data, step }) {

    const { inputs, buttonText, onSubmit } = data;

    const counterData = useContext(CounterContext);
    
    return (
        <Box
            component="form"
            autocomplete="off"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
            onSubmit={onSubmit}
        >
            <strong> El valor del contador es: 0</strong>
            {
                inputs.map( (input, i) => {
                    const { label, type, value, valid, onChange, helperText, validator } = input
                    return (
                        <TextField
                            label={ label }
                            key={i}
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            type={ type }
                            error={valid === false}
                            helperText={valid === false && helperText}
                            value={value}
                            onChange={(e) => onChange(e, i, step, validator) }
                        />
                    )
                } )
            }
            <Button variant="contained" type="submit">
                {buttonText}
            </Button>
        </Box>
    );
}

export default Step;
