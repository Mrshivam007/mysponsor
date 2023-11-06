import bg_img from '../../assets/img/bg_pattern.svg';
import img1 from "../../assets/img/banner_image_2.svg";
const Banner = () => {
    return (
        <>
            <div class="page-section banner-info">
                <div class="wrap bg-image" style={{ height: 'auto', backgroundImage: `url(${bg_img})` }}>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 py-3 pr-lg-5 wow fadeInUp">
                                <h2 class="title-section">SEO to Improve Brand <br /> Visibility</h2>
                                {/* <div class="divider"></div> */}
                                <p>We're an experienced and talented team of passionate consultants who breathe with search engine marketing.</p>
                                <a href="service.html" className="btn btn-primary" style={{ marginTop: '-26px' }}>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Banner;