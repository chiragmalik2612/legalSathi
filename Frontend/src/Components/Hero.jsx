import "./Hero.css";

const Hero = () =>{
    return (
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 hero">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://plus.unsplash.com/premium_photo-1682089956293-7a59fe81c9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGFnZXxlbnwwfHwwfHx8MA%3D%3D" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="8mgcmq">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4" fdprocessedid="6uvn6k">Default</button>
        </div>
      </div>
    </div>
    )
}
export default Hero;