import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Select, MenuItem, Button, Typography, Box, InputLabel, FormControl } from "@mui/material";
import StepIndicator from "../common/StepIndicator";
import ImageUploader from "../common/ImageUploader";
import { addPropertyAsync, updatePropertyAsync, clearError, clearSuccess } from "../../redux/Slice/propertySlice";
import { toast } from "react-toastify";

const AddPropertyForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditMode = Boolean(id);

    const existingProperty = useSelector((state) =>
        state.property.properties.find((p) => p.id === Number(id))
    );

    const { loading, error, success } = useSelector((state) => state.property);
    const { token } = useSelector((state) => state.auth);


    const [form, setForm] = useState({
        mobile: "",
        owner: "",
        type: "Room",
        purpose: "For Rent",
        location: "",
        nearby: "",
        address: "",
        rooms: "",
        sqft: "",
        bathroomImage: null,
        floor: "",
        furnished: "None",
        amenities: "",
        preference: "Family",
        availability: "Immediate",
        availableDate: "",
        description: "",
        price: "",
        photos: [],
    });

    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isEditMode && existingProperty) {
            setForm(existingProperty);
        }
    }, [isEditMode, existingProperty]);

    // Clear error and success states when component unmounts or when navigating
    useEffect(() => {
        return () => {
            dispatch(clearError());
            dispatch(clearSuccess());
        };
    }, [dispatch]);

    // Auto-navigate after successful submission
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                navigate("/properties-list");
            }, 2000); // Wait 2 seconds to show success message

            return () => clearTimeout(timer);
        }
    }, [success, navigate]);

    // Validation per step
    const validateStep = () => {
        const errs = {};
        if (step === 1) {
            if (!form.mobile.match(/^\d{10}$/)) errs.mobile = "Mobile number must be 10 digits";
            if (!form.owner.trim()) errs.owner = "Owner name is required";
            if (!form.address.trim()) errs.address = "Address is required";
        }
        if (step === 2) {
            if (!form.rooms || form.rooms <= 0) errs.rooms = "Enter valid room count";
            if (!form.sqft || form.sqft <= 0) errs.sqft = "Enter valid square footage";
            // Add more step 2 validations if needed
        }
        if (step === 3) {
            if (!form.price || form.price <= 0) errs.price = "Enter valid price";
            // Add more step 3 validations if needed
        }
        return errs;
    };

    const handleNext = () => {
        const stepErrors = validateStep();
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }
        setErrors({});
        setStep((prev) => Math.min(prev + 1, 3));
    };

    const handleBack = () => {
        setErrors({});
        setStep((prev) => Math.max(prev - 1, 1));
    };

    const handleChange = (e, newFiles = null) => {
        const { name, value, type, files } = e.target;

        // Only do this if newFiles is an array (iterable)
        if (newFiles && Array.isArray(newFiles)) {
            setForm((prev) => {
                const current = prev[name] || [];
                const combined = [...current, ...newFiles].slice(0, 8);
                return { ...prev, [name]: combined };
            });
            setErrors((prev) => ({ ...prev, [name]: null }));
            return;
        }

        if (type === "file") {
            console.log("Selected file:", files[0]);
            setForm((prev) => ({ ...prev, [name]: files[0] }));
        }
        else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
        setErrors((prev) => ({ ...prev, [name]: null }));
    };
    const [previewUrl, setPreviewUrl] = React.useState(null);

    React.useEffect(() => {
        if (form.bathroomImage) {
            const url = URL.createObjectURL(form.bathroomImage);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setPreviewUrl(null);
        }
    }, [form.bathroomImage]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const allErrors = {};
        // Validate all steps on submit:
        for (let s = 1; s <= 3; s++) {
            setStep(s);
            const errs = validateStep();
            Object.assign(allErrors, errs);
        }
        if (Object.keys(allErrors).length > 0) {
            setErrors(allErrors);
            return;
        }

        // Additional validation for required fields
        console.log(form, "form the test")
        if (!form.mobile || !form.owner || !form.address || !form.rooms || !form.sqft || !form.price) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            if (isEditMode) {
                await dispatch(updatePropertyAsync({ id, data: form, token })).unwrap();
                toast.success("Property updated successfully!");
            } else {
                await dispatch(addPropertyAsync(form, token)).unwrap();
                toast.success("Property added successfully!");
            }
        } catch (error) {
            console.error('Failed to submit property:', error);
            // Error handling is done in the Redux slice
        }
    };
    console.log(form.bathroomImage instanceof File); // should be true

    const inputClass = `shadow h-[48px] text-[14px] appearance-none border-[1px] border-b-4 rounded w-full py-2 px-3 text-gray-700 focus:outline-none`;
    const errorClass = "text-red-500 text-sm";

    return (
        <div className="w-full lg:max-w-6xl lg:mx-auto px-4 sm:px-6 md:px-8 pt-16 flex flex-col justify-center">
            <Typography variant="h4" mb={3}>
                {isEditMode ? "Edit Property Details" : "Add Property Details"}
            </Typography>

            {loading && (
                <div className="text-blue-600 text-center mb-4 p-3 bg-blue-50 rounded-lg">
                    {isEditMode ? "Updating property..." : "Adding property..."}
                </div>
            )}
            <StepIndicator currentStep={step} />

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                {step === 1 && (
                    <>
                        <Box
                            sx={{
                                p: 4,
                                backgroundColor: "#fff",
                                borderRadius: 2,
                                boxShadow: 3,
                                mt: 3
                            }}
                        >
                            <Typography variant="h5" gutterBottom>
                                Enter Owner and Contact Info
                            </Typography>

                            {/* Row 1 */}
                            <Box sx={{ display: "flex", gap: 2, mb: 2, mt: 4 }}>
                                <TextField
                                    label="Mobile Number"
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={(e) => {
                                        const digitsOnly = e.target.value.replace(/\D/g, "");
                                        setForm((prev) => ({ ...prev, mobile: digitsOnly }));
                                        setErrors((prev) => ({ ...prev, mobile: null }));
                                    }}
                                    fullWidth
                                    error={!!errors.mobile}
                                    helperText={errors.mobile}
                                />
                                <TextField
                                    label="Owner Name"
                                    name="owner"
                                    value={form.owner}
                                    onChange={handleChange}
                                    fullWidth
                                    error={!!errors.owner}
                                    helperText={errors.owner}
                                />
                            </Box>

                            {/* Row 2 */}
                            <Box sx={{ display: "flex", gap: 2, mb: 2, mt: 4 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Property Type</InputLabel>
                                    <Select
                                        name="type"
                                        value={form.type}
                                        onChange={handleChange}
                                        label="Property Type"
                                    >
                                        {["Room", "1RK", "Flat (1BHK)", "Flat (2BHK)", "Flat (3BHK)", "House", "Shop", "PG/Hostel"].map((option) => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl fullWidth>
                                    <InputLabel>Purpose</InputLabel>
                                    <Select
                                        name="purpose"
                                        value={form.purpose}
                                        onChange={handleChange}
                                        label="Purpose"
                                    >
                                        {["For Rent", "For Sale"].map((option) => (
                                            <MenuItem key={option} value={option}>{option}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            {/* Row 3 */}
                            <Box sx={{ display: "flex", gap: 2, mb: 2, mt: 4 }}>
                                <TextField
                                    label="Nearby Places"
                                    name="nearby"
                                    value={form.nearby}
                                    onChange={handleChange}
                                    fullWidth
                                />
                                <TextField
                                    label="Address"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    fullWidth
                                    error={!!errors.address}
                                    helperText={errors.address}
                                />
                            </Box>

                            {/* Row 4 - Full Width */}
                            <Box sx={{ mb: 2, mt: 4 }}>
                                <GooglePlacesAutocomplete
                                    apiKey="YOUR_API_KEY"
                                    selectProps={{
                                        value: form.location,
                                        onChange: (newValue) =>
                                            setForm((prev) => ({ ...prev, location: newValue.label })),
                                        placeholder: "Search location...",
                                        styles: {
                                            control: (base) => ({
                                                ...base,
                                                backgroundColor: "#f9f9f9",
                                                borderRadius: "8px",
                                                padding: "10px",
                                                fontSize: "16px",
                                                borderColor: "#ccc",
                                                minHeight: "56px",
                                            }),
                                        },
                                    }}
                                    debounce={400}
                                />
                            </Box>
                        </Box>


                    </>
                )}
                {step === 2 && (
                    <Box
                        sx={{
                            p: 4,
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Enter Property Details
                        </Typography>

                        {/* Row 1 */}
                        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                            <TextField
                                label="Number of Rooms"
                                name="rooms"
                                type="number"
                                value={form.rooms}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.rooms}
                                helperText={errors.rooms}
                            />
                            <TextField
                                label="Square Footage"
                                name="sqft"
                                type="number"
                                value={form.sqft}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.sqft}
                                helperText={errors.sqft}
                            />
                        </Box>

                        {/* Row 2 */}
                        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                            <Button variant="outlined" component="label" fullWidth>
                                Upload Bathroom Image
                                <input
                                    type="file"
                                    name="bathroomImage"
                                    accept="image/*"
                                    hidden
                                    onChange={handleChange}
                                />
                            </Button>

                            <TextField
                                label="Floor"
                                name="floor"
                                value={form.floor}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Box>
                        {previewUrl && (
                            <Box mt={2} mb={4}>
                                <img
                                    src={previewUrl}
                                    alt="Bathroom"
                                    style={{ maxWidth: "200px", maxHeight: "150px", borderRadius: "8px" }}
                                />
                            </Box>
                        )}

                        {/* Row 3 */}
                        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel>Furnished</InputLabel>
                                <Select
                                    name="furnished"
                                    value={form.furnished}
                                    onChange={handleChange}
                                    label="Furnished"
                                >
                                    {["None", "Semi-Furnished", "Fully Furnished"].map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField
                                label="Amenities"
                                name="amenities"
                                value={form.amenities}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Box>

                        {/* Row 4 */}
                        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel>Tenant Preference</InputLabel>
                                <Select
                                    name="preference"
                                    value={form.preference}
                                    onChange={handleChange}
                                    label="Tenant Preference"
                                >
                                    {["Boys", "Girls", "Family", "Independent", "Non-Independent"].map(
                                        (option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        )
                                    )}
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel>Availability</InputLabel>
                                <Select
                                    name="availability"
                                    value={form.availability}
                                    onChange={handleChange}
                                    label="Availability"
                                >
                                    {["Immediate", "Select Date"].map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>

                                {form.availability === "Select Date" && (
                                    <TextField
                                        type="date"
                                        name="availableDate"
                                        value={form.availableDate}
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{ mt: 2 }}
                                    />
                                )}
                            </FormControl>
                        </Box>
                    </Box>
                )}





                {step === 3 && (
                    <Box
                        sx={{

                            p: 4,
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Additional Details
                        </Typography>

                        {/* Description - full width */}
                        <Box sx={{ mb: 2 }}>
                            <TextField
                                label="Property Description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </Box>

                        {/* Image Uploader - full width */}
                        <Box sx={{ mb: 2 }}>
                            <ImageUploader
                                inputClass={inputClass}
                                errors={errors}
                                handleChange={handleChange}
                            />
                        </Box>

                        {/* Price */}
                        <Box sx={{ maxWidth: "300px" }}>
                            <TextField
                                label="Price"
                                name="price"
                                type="number"
                                value={form.price}
                                onChange={handleChange}
                                fullWidth
                                error={!!errors.price}
                                helperText={errors.price}
                            />
                        </Box>
                    </Box>
                )}



                <div className="flex justify-between mt-4">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            disabled={loading}
                            className={`px-4 py-2 rounded ${loading
                                ? 'bg-gray-200 cursor-not-allowed'
                                : 'bg-gray-300 hover:bg-gray-400'
                                } text-gray-700`}
                        >
                            Back
                        </button>
                    )}
                    {step < 3 && (
                        <button
                            type="button"
                            onClick={handleNext}
                            disabled={loading}
                            className={`px-4 py-2 rounded ml-auto ${loading
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600'
                                } text-white`}
                        >
                            {loading ? 'Processing...' : 'Next'}
                        </button>
                    )}
                    {step === 3 && (
                        <>
                            {error && (
                                <div className="text-red-500 text-sm mb-2 p-3 bg-red-50 rounded-lg">
                                    <div className="font-medium">Error:</div>
                                    <div>{typeof error === 'string' ? error : 'An error occurred while submitting the property'}</div>
                                    <button
                                        onClick={() => dispatch(clearError())}
                                        className="text-red-600 underline mt-1 hover:text-red-800"
                                    >
                                        Dismiss
                                    </button>
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-4 py-2 rounded ml-auto ${loading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-green-500 hover:bg-green-600'
                                    } text-white`}
                            >
                                {loading ? 'Submitting...' : (isEditMode ? "Update Property" : "Submit Property")}
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AddPropertyForm;

