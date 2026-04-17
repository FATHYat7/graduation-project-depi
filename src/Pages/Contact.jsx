import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'ة



const Contact= () => {
  return (
    <div className="container my-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-dark">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Contact</li>
        </ol>
      </nav>

      <div className="row">
        {/* قسم معلومات الاتصال على اليسار */}
        <div className="col-lg-4 col-md-5">
          <div className="card shadow-sm p-4 mb-4">
            
             {/* بطاقة الاتصال الهاتفي */}
            <div className="d-flex align-items-start mb-4">
              <div className="rounded-circle d-flex justify-content-center align-items-center me-3" 
                   style={{ width: '40px', height: '40px', backgroundColor: '#e9e7e7' }}>
                {/*  */}
                <span className="text-danger fs-5">📞</span> 
              </div>
              <div>
                <h5 className="mb-1 text-dark fw-bold">Call To Us</h5>
                <p className="text-muted small mb-0">We are available 24/7, 7 days a week.</p>
                <p className="fw-bold mb-0">Phone: +8801611112222</p>
              </div>
            </div>

            <hr className="my-3"/>
            
            {/* بطاقة المراسلة */}
            <div className="d-flex align-items-start mt-4">
              <div className="rounded-circle d-flex justify-content-center align-items-center me-3" 
                   style={{ width: '40px', height: '40px', backgroundColor: '#e9e7e7' }}>
                 {/*  */}
                <span className="text-danger fs-5">📧</span>
              </div>
              <div>
                <h5 className="mb-1 text-dark fw-bold">Write To Us</h5>
                <p className="text-muted small mb-1">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-muted small mb-0">Emails: customer@exclusive.com</p>
                <p className="text-muted small mb-0">Emails: support@exclusive.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* قسم نموذج الاتصال على اليمين */}
        <div className="col-lg-8 col-md-7">
          <div className="card shadow-sm p-4">
            <form>
              <div className="row mb-3">
                {/* حقل الاسم */}
                <div className="col-md-4 mb-3 mb-md-0">
                  <input
                    type="text"
                    className="form-control bg-light border-0 py-3"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                {/* حقل البريد الإلكتروني */}
                <div className="col-md-4 mb-3 mb-md-0">
                  <input
                    type="email"
                    className="form-control bg-light border-0 py-3"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                {/* حقل الهاتف */}
                <div className="col-md-4">
                  <input
                    type="tel"
                    className="form-control bg-light border-0 py-3"
                    placeholder="Your Phone *"
                    required
                  />
                </div>
              </div>

              {/* حقل الرسالة */}
              <div className="mb-4">
                <textarea
                  className="form-control bg-light border-0"
                  placeholder="Your Message"
                  rows="10"
                ></textarea>
              </div>

              {/* زر إرسال الرسالة */}
              <div className="text-end">
                <button 
                  type="submit" 
                  className="btn btn-danger btn-lg px-5 py-2"  
                  style={{ backgroundColor: '#DB4444', borderColor: '#DB4444', color: 'white' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


