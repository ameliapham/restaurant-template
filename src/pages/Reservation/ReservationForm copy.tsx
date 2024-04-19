import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
// use https://github.com/orgs/react-hook-form/discussions/10135#discussioncomment-5355256 for date time picker
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { restaurantDetails } from "data/restaurantDetails";
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';


interface FormInput {
    name: string;
    email: string;
    phoneNumber: string;
    numberOfGuests: number;
    specialRequest?: string;
    dateTime: Date | null;
}

export const ReservationForm2: React.FC = () => {
    const { control, handleSubmit, formState: { isValid } } = useForm<FormInput>({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            numberOfGuests: 1,
            specialRequest: '',
            dateTime: new Date(),
        }
    });

    const onSubmit = (data: FormInput) => {

        fetch(import.meta.env.VITE_SERVERLESS_FUNCTION_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "formData": {
                    name: data.name,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    numberOfGuests: 1,
                    time: data.dateTime?.toISOString() ?? "",
                    specialRequests: data.specialRequest ?? "",
                } satisfies {
                    name: string;
                    email: string;
                    phoneNumber: string;
                    numberOfGuests: number;
                    time: string;
                    specialRequests: string;
                },
                restaurantDetails
            })
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);

                alert("Your reservation has been sent to the restaurant, you will receive a confirmation email shortly.");

            });

    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Name is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Name"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    rules={{ required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Enter a valid email' } }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Email"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{ required: 'Phone number is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            label="Phone Number"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                />



                <Controller
                    name="numberOfGuests"
                    control={control}
                    rules={{
                        required: 'Number of guests is required',
                        min: { value: 1, message: 'At least one guest is required' }
                    }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            type="number"
                            label="Number of Guests"
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message}
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                />

                <Controller
                    name="dateTime"
                    control={control}
                    rules={{ required: 'Date and time are required' }}
                    render={({ field }) => (
                        <MobileDateTimePicker
                            disablePast
                            label="Day and Time"
                            value={field.value}
                            inputRef={field.ref}
                            onChange={(date) => {
                                field.onChange(date);
                            }}
                        />
                    )}
                />

                <Controller
                    name="specialRequest"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Special Request"
                            multiline
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                <Typography variant="caption" display="block" gutterBottom>
                    Your email will only be used for reservation confirmation and not for promotional purposes.
                </Typography>

                <Button type="submit" variant="contained" disabled={!isValid} fullWidth>
                    Submit
                </Button>
            </form>
        </LocalizationProvider>

    );
};

