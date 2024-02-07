import SponsorCalendarCard from "./SponsorCalendarCard";

const SponsorClaendar = () => {

  return (
    <>
      <div className="modal-dialog" style={{ display: 'flex', flexDirection: 'column', maxHeight: '80svh' }}>
        <div className="modal-content" style={{ flex: 1, overflow: 'auto' }}>
          <div className="modal-header" style={{ position: 'sticky', top: 0, background: '#fff', zIndex: 1050 }}>
            <h3 className="modal-title fs-5">
              Event Date & Time&nbsp;
              <i className="bi bi-calendar3 text-secondary"></i>
            </h3>
            <button
              type="button"
              className="mai-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <SponsorCalendarCard />
          </div>
        </div>
      </div>

    </>
  );
};

export default SponsorClaendar;
