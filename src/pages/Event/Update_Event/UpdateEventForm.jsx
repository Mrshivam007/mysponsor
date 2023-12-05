import React, { useState } from "react";
import { Footer, NavBar } from "../../../components";
import backgroundimg from "../../../assets/img/circle-bg.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEvent } from "../../../redux/actions/eventAction";
import { eventReducer } from "../../../redux/reducer/eventReducer";
import { useLocation, useNavigate } from "react-router-dom";
import apiurl from "../../../constant/config";

const UpdateEvent = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
    }, []);

    const [title, setTitle] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [event_date_time, setEventDateTime] = useState("");
    const [sponsoring_item, setSponsoringItem] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [audience, setAudienceExpected] = useState("");
    const [event_categories, setEventCategories] = useState("");
    const [event_time, setEventTime] = useState("");
    const [price, setPrice] = useState("");
    const [prices, setPrices] = useState("");
    const [selectedItems, setSelectedItems] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [thumbnail1, setThumbnail1] = useState(null);
    const [thumbnail2, setThumbnail2] = useState(null);
    const [thumbnail3, setThumbnail3] = useState(null);
    const [video, setVideo] = useState("");
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [errors, setErrors] = useState({});
    const { userDetails } = auth;
    const navigate = useNavigate(); // Initialize useNavigate hook
    console.log(userDetails);
    console.log("event error", errors);
    const data_location = useLocation();
    const [eventData, setEventData] = useState(data_location.state?.eventData || null);
    console.log("update event data", eventData);
    const [currentThumbnail1, setCurrentThumbnail1] = useState(eventData ? apiurl + eventData.thumbnail1 : null);
    const [newThumbnail1, setNewThumbnail1] = useState(null);
    const [currentThumbnail2, setCurrentThumbnail2] = useState(eventData ? apiurl + eventData.thumbnail2 : null);
    const [newThumbnail2, setNewThumbnail2] = useState(null);
    const [currentThumbnail3, setCurrentThumbnail3] = useState(eventData ? apiurl + eventData.thumbnail3 : null);
    const [newThumbnail3, setNewThumbnail3] = useState(null);

    useEffect(() => {
        setEventData(data_location.state?.eventData || null);
    }, [data_location.state?.eventData]);


    // For each thumbnail, you'll need a separate state and handler
    const handleThumbnail1Change = (e) => {
        const file = e.target.files[0];
        setNewThumbnail1(file);
    };

    const handleThumbnail2Change = (e) => {
        const file = e.target.files[0];
        setNewThumbnail2(file);
    };

    const handleThumbnail3Change = (e) => {
        const file = e.target.files[0];
        setNewThumbnail3(file);
    };
    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        setVideo(file);
    };

    const updatePrices = (selected) => {
        const updatedPrices = { ...prices };

        selected.forEach((item) => {
            if (!updatedPrices[item]) {
                updatedPrices[item] = '';
            }
        });

        setPrices(updatedPrices);
    };

    const handleSponsoringItemChange = (e) => {
        const { value } = e.target;
        let updatedSelectedItems = [...selectedItems];

        if (updatedSelectedItems.includes(value)) {
            updatedSelectedItems = updatedSelectedItems.filter((item) => item !== value);
        } else {
            updatedSelectedItems.push(value);
        }

        setSelectedItems(updatedSelectedItems);
    };

    const handlePriceChange = (item, price) => {
        const updatedPrices = { ...prices };
        updatedPrices[item] = price;
        setPrices(updatedPrices);
    };

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const validateForm = () => {
        const errorsObj = {};

        if (title.trim() === '') {
            errorsObj.title = 'Title is required';
        }
        if (location.trim() === '') {
            errorsObj.location = 'Location is required';
        }
        if (startDate.trim() === '') {
            errorsObj.startDate = 'startDate is required';
        }
        if (endDate.trim() === '') {
            errorsObj.endDate = 'endDate is required';
        }
        // if (sponsoring_item.trim() === '') {
        //   errorsObj.sponsoring_item = 'sponsoring_item is required';
        // }

        if (!selectedItems) {
            errorsObj.selectedItems = 'selectedItems is required';
        }
        if (!prices) {
            errorsObj.prices = 'prices is required';
        }
        if (audience.trim() === '') {
            errorsObj.audience = 'audience is required';
        }
        if (event_categories.trim() === '') {
            errorsObj.event_categories = 'event_categories is required';
        }
        // if (price.trim() === '') {
        //     errorsObj.price = 'price is required';
        // }
        if (description.trim() === '') {
            errorsObj.description = 'description is required';
        }
        // if (!thumbnail1) {
        //     errorsObj.thumbnail1 = 'thumbnail1 is required';
        // }
        // if (!thumbnail2) {
        //     errorsObj.thumbnail2 = 'thumbnail2 is required';
        // }
        // if (!thumbnail3) {
        //     errorsObj.thumbnail3 = 'thumbnail3 is required';
        // }
        // if (event_time.trim() === '') {
        //   errorsObj.event_time = 'event_time is required';
        // }
        // ... validate other fields similarly
        setErrors(errorsObj);
        return Object.keys(errorsObj).length === 0;
    };

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (eventData) {
            const formData = new FormData();
            formData.append("title", eventData.title); // Ensure you're using eventData.title here

            // Prepare sponsoring items array
            const sponsoringItemsData = selectedItems.map((item) => ({
                sponsoring_items: item,
                price: prices[item] || null,
            }));
            formData.append("event_start_date", eventData.event_start_date);
            formData.append("event_end_date", eventData.event_end_date);
            formData.append("event_time", eventData.event_time);
            formData.append("sponsoring_items", JSON.stringify(sponsoringItemsData));
            formData.append("user_id", userDetails.user_id);
            formData.append("description", eventData.description);
            formData.append("location", eventData.location);
            formData.append("audience_expected", eventData.audience_expected);
            // formData.append("price", price);
            formData.append("event_category", eventData.event_category);
            if (newThumbnail1 && newThumbnail1 !== currentThumbnail1) {
                formData.append("thumbnail1", newThumbnail1);
            }
            if (newThumbnail2 && newThumbnail2 !== currentThumbnail2) {
                formData.append("thumbnail2", newThumbnail2);
            }
            if (newThumbnail3 && newThumbnail3 !== currentThumbnail3) {
                formData.append("thumbnail3", newThumbnail3);
            }
    

            formData.append("attach_video", video);

            try {
                // Make an API call to update the event using the existing event's ID
                await dispatch(updateEvent(eventData.event_id, formData)); // Assuming updateEvent action is available
                sessionStorage.setItem('successMessage', 'Event updated successfully!');
                navigate('/events/upcoming_event'); // Replace with the desired route
            } catch (error) {
                console.log("An error occurred during API calls:", error);
            }
        }
    };


    return (
        <>
            <NavBar />
            <div
                className="bg-form"
                style={{
                    height: "auto",
                    padding: "1%",
                    backgroundImage: `url(${backgroundimg})`,
                }}
            >
                <div className="container event-form px-md-0">
                    <div className="row">
                        <div className="col-12 col-md-6 px-0">
                            <div className="container">
                                <h1 className="font-weight-bold d-none d-lg-block">
                                    Enter event info
                                </h1>
                                <h2 className="sponsor-mobile-text">Enter event info</h2>
                                <div className="box1">
                                    <form action="#" className="contact-form">
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    id="title"
                                                    value={eventData ? eventData.title : ''}
                                                    onChange={(e) => {
                                                        const updatedEventData = { ...eventData, title: e.target.value };
                                                        setEventData(updatedEventData);
                                                    }}
                                                    className="form-control"
                                                    placeholder="Enter Title"
                                                />


                                                {errors.title && <p className="error-msg">{errors.title}</p>}
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    id="location"
                                                    value={eventData ? eventData.location : ''} // Populate the input with eventData's location if it exists
                                                    onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                                                    className="form-control"
                                                    placeholder="Enter Location"
                                                />
                                                {errors.location && <p className="error-msg">{errors.location}</p>}

                                            </div>
                                        </div>

                                        <div className="row form-group gap-3">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                {/* <select className="form-control" value={""}>
                          <option className="text-muted">Enter category</option>
                          <option>--select event category--</option>
                        </select> */}
                                                {/* <input
                          type="text"
                          id="sponoring_item"
                          value={sponsoring_item}
                          onChange={(e) => setSponsoringItem(e.target.value)}
                          className="form-control"
                          placeholder="Enter Sponsoring Item"
                        />
                        {errors.sponsoring_item && <p className="error-msg">{errors.sponsoring_item}</p>} */}

                                                <div>
                                                    <button onClick={handleToggleDropdown}>Add Sponsoring Item</button>

                                                    {showDropdown && (
                                                        <div>
                                                            <select
                                                                multiple
                                                                value={selectedItems}
                                                                onChange={handleSponsoringItemChange}
                                                                className="form-control"
                                                                id="sponsoring_item"
                                                                placeholder="Enter Sponsoring Item"
                                                            >
                                                                <option value="banner">Banner</option>
                                                                <option value="led_screen">LED Screen</option>
                                                                <option value="bill_board">Billboard</option>
                                                            </select>

                                                            {selectedItems.map((item) => (
                                                                <div key={item}>
                                                                    <input
                                                                        type="text"
                                                                        value={prices[item]}
                                                                        onChange={(e) => handlePriceChange(item, e.target.value)}
                                                                        className="form-control"
                                                                        placeholder={`Enter ${item.replace('_', ' ')} Price`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                {errors.selectedItems && <p className="error-msg">{errors.selectedItems}</p>}
                                                {errors.prices && <p className="error-msg">{errors.prices}</p>}

                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    value={eventData ? eventData.audience_expected : ''} // Populate the input with eventData's audience if it exists
                                                    onChange={(e) => setEventData({ ...eventData, audience_expected: e.target.value })}
                                                    className="form-control"
                                                    placeholder="Estimated audience"
                                                />
                                                {errors.audience && <p className="error-msg">{errors.audience}</p>}

                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-6">
                                                <label className="font-weight-bold">Start Date</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    value={eventData ? eventData.event_start_date : ''} // Populate the input with eventData's startDate if it exists
                                                    onChange={(e) => setEventData({ ...eventData, event_start_date: e.target.value })}
                                                    className="form-control"
                                                    placeholder="DD/MM/YYYY"
                                                />
                                                {errors.startDate && <p className="error-msg">{errors.startDate}</p>}

                                            </div>
                                            <div className="col-6">
                                                <label className="font-weight-bold">End Date</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    value={eventData ? eventData.event_end_date : ''} // Populate the input with eventData's endDate if it exists
                                                    onChange={(e) => setEventData({ ...eventData, event_end_date: e.target.value })}
                                                    className="form-control"
                                                    placeholder="DD/MM/YYYY"
                                                />
                                                {errors.endDate && <p className="error-msg">{errors.endDate}</p>}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-0">
                            <div className="container">
                                <h1 className="font-weight-bold d-none d-lg-block">
                                    Enter organizer info
                                </h1>
                                <h2 className="sponsor-mobile-text">Enter organizer info</h2>
                                <div className="box1">
                                    {/* <div className="col-lg-6 mb-5 mb-lg-0"> */}
                                    <form action="#" className="contact-form">
                                        {/* <div className="row form-group">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <label className="text-black" for="fname">First Name</label>
                                    <input type="text" id="fname" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="text-black" for="lname">Last Name</label>
                                    <input type="text" id="lname" className="form-control" />
                                </div>
                            </div> */}

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    value={`${userDetails.firstname} ${userDetails.lastname}`}
                                                    onChange={""}
                                                    className="form-control"
                                                    placeholder="Organiser name"
                                                />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={userDetails.email}
                                                    onChange={""}
                                                    className="form-control"
                                                    placeholder="E-mail"
                                                />
                                            </div>
                                        </div>

                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    id="categorie"
                                                    value={eventData ? eventData.event_categories : ''} // Populate the input with eventData's event_categories if it exists
                                                    onChange={(e) => setEventData({ ...eventData, event_categories: e.target.value })}
                                                    className="form-control"
                                                    placeholder="Event Categories"
                                                />
                                                {errors.event_categories && <p className="error-msg">{errors.event_categories}</p>}

                                            </div>
                                        </div>


                                        {/* <div className="row form-group">
                                            <div className="col-md-12">
                                                <input
                                                    type="number"
                                                    id="price"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    className="form-control"
                                                    placeholder="Price"
                                                />
                                                {errors.price && <p className="error-msg">{errors.price}</p>}

                                            </div>
                                        </div> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <h1 className="font-weight-bold d-none d-lg-block">
                                Enter event description
                            </h1>
                            <h2 className="sponsor-mobile-text">Enter event description</h2>
                            <div className="box1 mt-2">
                                <textarea
                                    className="form-control"
                                    value={eventData ? eventData.description : ''} // Populate the input with eventData's description if it exists
                                    onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                                    placeholder="Enter description (100 words)"
                                    col="30"
                                    rows="5"
                                ></textarea>
                                {errors.description && <p className="error-msg">{errors.description}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <h1 className="font-weight-bold d-none d-lg-block">
                                Add Photos & Videos
                            </h1>
                            <h2 className="sponsor-mobile-text">Add Photos & Videos</h2>
                            <p>(atleast 3 photos & 1 video)</p>
                            <div className="box1 mt-2 d-flex justify-content-center" style={{ gap: '2%' }}>
                                <div className="box photo-box bg-white d-flex justify-content-center align-items-center p-3">
                                    <div className="box text-center">
                                        <h5 className="font-weight-bold">Add media</h5>
                                        // Input field and preview for the thumbnail
                                        {currentThumbnail1 && (
                                            <div>
                                                <h2>Current Thumbnail:</h2>
                                                <img src={currentThumbnail1} alt="Current Thumbnail" width="200" />
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleThumbnail1Change}
                                                    style={{ width: "74%", borderRadius: "0" }}
                                                />
                                            </div>
                                        )}

                                        {/* Display the new thumbnail if selected */}
                                        {newThumbnail1 && (
                                            <div>
                                                <h2>New Thumbnail:</h2>
                                                <img src={URL.createObjectURL(newThumbnail1)} alt="New Thumbnail" width="200" />
                                            </div>
                                        )}
                                        {errors.thumbnail1 && <p className="error-msg">{errors.thumbnail1}</p>}

                                    </div>
                                </div>
                                <div className="box photo-box bg-white d-flex justify-content-center align-items-center p-3">
                                    <div className="box text-center">
                                        <h5 className="font-weight-bold">Add media</h5>
                                        {currentThumbnail2 && (
                                            <div>
                                                <h2>Current Thumbnail:</h2>
                                                <img src={currentThumbnail2} alt="Current Thumbnail" width="200" />
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleThumbnail2Change}
                                                    style={{ width: "74%", borderRadius: "0" }}
                                                />
                                            </div>
                                        )}

                                        {/* Display the new thumbnail if selected */}
                                        {newThumbnail2 && (
                                            <div>
                                                <h2>New Thumbnail:</h2>
                                                <img src={URL.createObjectURL(newThumbnail2)} alt="New Thumbnail" width="200" />
                                            </div>
                                        )}
                                        {errors.thumbnail2 && <p className="error-msg">{errors.thumbnail2}</p>}

                                    </div>
                                </div>
                                <div className="box photo-box bg-white d-flex justify-content-center align-items-center p-3">
                                    <div className="box text-center">
                                        <h5 className="font-weight-bold">Add media</h5>
                                        {currentThumbnail3 && (
                                            <div>
                                                <h2>Current Thumbnail:</h2>
                                                <img src={currentThumbnail3} alt="Current Thumbnail" width="200" />
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleThumbnail3Change}
                                                    style={{ width: "74%", borderRadius: "0" }}
                                                />
                                            </div>
                                        )}

                                        {/* Display the new thumbnail if selected */}
                                        {newThumbnail3 && (
                                            <div>
                                                <h2>New Thumbnail:</h2>
                                                <img src={URL.createObjectURL(newThumbnail3)} alt="New Thumbnail" width="200" />
                                            </div>
                                        )}
                                        {errors.thumbnail3 && <p className="error-msg">{errors.thumbnail3}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="box1 mt-2">
                                <input
                                    type="file"
                                    accept="video/*"
                                    onChange={handleVideoChange}
                                    style={{ width: "74%", borderRadius: "0" }}
                                />
                                {video && (
                                    <div>
                                        <h2>Preview:</h2>
                                        <img src={URL.createObjectURL(video)} alt="Preview" width="200" />
                                    </div>
                                )}
                            </div>
                            <input type="submit" className="submit" value="List Event" onClick={handleSubmitClick} />
                            <button className="btn btn-outline-primary mt-3">Discard</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UpdateEvent;
