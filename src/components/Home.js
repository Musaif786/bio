import React ,{useEffect} from "react";
import Nav from "./nav";
import Footer from "./footer"

function Home() {
  
    useEffect(()=>{
        const imgFull =()=>{
          let widths = window.innerWidth;
          let img = document.querySelector(".imgbox");
          img.addEventListener("click",()=>{
           //  img.style.height = "500px";
           img.classList.toggle("aboutImg");
          });
           let img1 = document.querySelector(".navLogo");
           img1.addEventListener("click",()=>{
            //  img.style.height = "500px";
            img1.classList.toggle("logos");
           });

        

           
          // for canvas
          let open = document.querySelector(".magic");
          let cons = document.querySelector("canvas");
          let close = document.querySelector(".magicClose")
          let conentbox = document.querySelector(".conentbox")
          let backphotos = document.querySelector(".backphotos");
          let printbtn  = document.querySelector(".printbtn");
          open.addEventListener("click",()=>{
           //  img.style.height = "500px";
          //  img2.classList.toggle("convas");
          cons.style.display = "block"
          conentbox.style.display = "none"
          open.style.display = "none"
          close.style.display = "block"
          backphotos.style.display = "none"
          printbtn.style.display = "none"

          });

          close.addEventListener("click",()=>{
            //  img.style.height = "500px";
           //  img2.classList.toggle("convas");
           
           cons.style.display="none"
           close.style.display = "none"
           open.style.display = "block"
           conentbox.style.display = "block"
           printbtn.style.display = "block"
           if (widths > 600){

             backphotos.style.display = "block"
            }
            else{
              backphotos.style.display = "none"
            } 
 
           });
           const ints = ()=>{
            setInterval(()=>{
              alert("Hello")

            },[1000])
           }
            // ints(widths);
          
        }
        imgFull();
       },[])

       
  return (
    <div >
    
      <div className="wrapper">
        <div className="imgbox">
          <img 
            src="./Images/image.jpg"
            alt="online/img"
          />
        </div>
        <div className="conentbox">
          <div className="moveupanddown"><h1>???????????? ?????????? ?????????????????????? ??????????????????????</h1>
          
          <h1>???????????????????? ???????????????????? ???????????????????? ?????????? ??????????????????????????</h1>
          <h1>???????? ???? ???? ?????????? ?????????? ????????</h1>
         
          </div>
          
          <p>
          Assalamualaikum warahmatullahi wabarakatuh,
            My name is <span className="text-primary fw-bold"> Mohammed Musaif </span>and i'm from Hyderbad, and i'm a software developer below are the more details please go further. Regards Musaif.
          </p>
          <button id="btn1" className="btn btn-primary">
            <a href="https://wa.me/917995587687?text=Assalamu alaikum ">contact</a>
          </button>
        </div>
      </div>

      <div className="backphotos">
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://source.unsplash.com/1600x700/?nature,flower"
                className="d-block w-100"
                alt="Online/img"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://source.unsplash.com/1600x700/?nature,water"
                className="d-block w-100"
                alt="online/img"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/1600x700/?islamic"
                className="d-block w-100"
                alt="online/img"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      

      {/* <div className='titleLine'>
    
<div className="modal-dialog modal-dialog-centered">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, quas?
</div>

    </div> */}
      <div className="title"><i class="fa fa-user-md" aria-hidden="true"></i> profile... </div>
      <div className="info">
        <div className="text">
          <h1>Name :</h1>
          <h1>Mohammed Musaif</h1>
        </div>
        <div className="text">
          <h1>Date of birth :</h1>
          <h1>2nd sep 1998</h1>
        </div>
        <div className="text">
          <h1>height :</h1>
          <h1>5'6"</h1>
        </div>
        <div className="text">
          <h1>complexion :</h1>
          <h1>fair</h1>
        </div>
        <div className="text">
          <h1>caste :</h1>
          <h1>sunni</h1>
        </div>
        <div className="text">
          <h1>education :</h1>
          <h1>B.tech</h1>
        </div>
        <div className="text">
          <h1>Native place :</h1>
          <h1>Hyderabad</h1>
        </div>
        <div className="text">
          <h1>occupation :</h1>
          <h1>software developer </h1>
        </div>
      </div>

      {/* Education */}

      <div className="title">Education...</div>

      <div className="info">
        <div className="text1">
          <h2>Bachelore of technology, 2021 </h2>
          <h2>CMR Eng college</h2>
        </div>
        <div className="text1">
          <h2>Intermediate, 2015-2017</h2>
          <h2>Sultan-Ul-Uloom junior college </h2>
        </div>
        <div className="text1">
          <h2>Secondary School Certificate, 2015</h2>
          <h2>St. christoper convent High School </h2>
        </div>
      </div>

      {/* Profession */}

      <div className="title">Profession...</div>

<div className="info">
  <div className="text1">
    <h2>Solugenix india pvt ltd, 2022</h2>
    <h2>Splunk developer/Admin</h2>
  </div>
  <div className="text1">
    <h2>safebros, 2021</h2>
    <h2>Full-stack web developer </h2>
  </div>
</div>
  

{/* Family */}
<div className="title">Family...</div>

<div className="info">
        <div className="text">
          <h1>Mother :</h1>
          <h1>Noor jahan begum    ( homemaker )</h1>
        </div>
        <div className="text">
          <h1>Father :</h1>
          <h1>Mohammed zahed    ( businessman)</h1>
        </div>
        
      </div>

{/* Family */}
<div className="title">siblings...</div>

<div className="info">
        <div className="text">
          <h1>Mohammed Zayed :</h1>
          <h1>interior designer   (married)</h1>
        </div>
        <div className="text">
          <h1>Mohammed Zubair :</h1>
          <h1>Car mechanic   (married)</h1>
        </div>
        <div className="text">
          <h1>Mohammed Maaz :</h1>
          <h1>EEE Engineer  (married)</h1>
        </div>
        <div className="text">
          <h1>Sister :</h1>
          <h1>pursing BSC - 3rd year </h1>
        </div>
      </div>



      {/* Address */}
<div className="title"><i class="fa fa-map-marker" aria-hidden="true"></i> Address...</div>

<div className="info">
        <div id="forprint" className="text2">
          <div className="address"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.005090182846!2d78.4295924285899!3d17.40738618437343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9727551755c3%3A0x24ce9f67b9c075c4!2zMTfCsDI0JzI2LjUiTiA3OMKwMjUnNDcuNSJF!5e0!3m2!1sen!2sin!4v1657768616702!5m2!1sen!2sin"></iframe>
          
          <p>
          10-5-391/54/219/A/1, MLA colony, Syed Nagar-2, Banjara Hill's, RoadNo-12, Hyderabad, Telengana.

          </p>
          <p><i class="fa fa-whatsapp" aria-hidden="true"></i> Phone no: <a className="text-decoration-none" href="https://wa.me/919550278896?text=Assalamu Alaikum ">9550278896 </a> </p>
          <p><i class="fa fa-whatsapp" aria-hidden="true"></i> Phone no: <a className="text-decoration-none" href="https://wa.me/917995587687?text=Assalamu Alaikum ">7995587687</a> </p>
          
          </div>
          
        </div>
      
        
      </div>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.005090182846!2d78.4295924285899!3d17.40738618437343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9727551755c3%3A0x24ce9f67b9c075c4!2zMTfCsDI0JzI2LjUiTiA3OMKwMjUnNDcuNSJF!5e0!3m2!1sen!2sin!4v1657768616702!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    
      <div className="animation1">
    <Footer/>

    </div>
    </div>
  );

}

export default Home;
