import { useDispatch, useSelector } from "react-redux";
import SponsorCalendarCard from "./SponsorCalendarCard";
import { useEffect } from "react";
import { fetchContent } from "../../../redux/actions/contentAction";

const SponsorClaendar = () => {
    const dispatch = useDispatch();
    const ContentDetails = useSelector(state => state.content)
    useEffect(() => {
        dispatch(fetchContent())
    }, [])
    return (
        <>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">New message</h1>
                        <button type="button" className="mai-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {/* <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label for="recipient-name" class="col-form-label">Recipient:</label>
                          <input type="text" class="form-control" id="recipient-name" />
                        </div>
                        <div class="mb-3">
                          <label for="message-text" class="col-form-label">Message:</label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                      </form>
                    </div> */}
                    {/* <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Send message</button>
                    </div> */}
                    <SponsorCalendarCard line={"Sponsor Content Creators"} cardData={ContentDetails.contentDetails?.past_content} />
                </div>
            </div>
        </>
    );
}

export default SponsorClaendar;