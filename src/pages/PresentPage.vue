<template>
<div id = "body">
    <div class ="Playing">
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-1 offset-md-1">
                        <a href="#1" class="menu_link">Play</a>
                    </div>

                    <div class="col-md-1 offset-md-1">
                        <a href="#2" class="menu_link">About</a>
                    </div>
    
                    <div class="col-md-1 offset-md-1">
                        <a href="#3" class="menu_link">License</a>
                    </div>

                    <div class="col-md-1 offset-md-1">
                        <a href="#4" class="menu_link">Connect</a>
                    </div>

                    <div class="col-md-1 offset-md-2">
                        <div id="showModalBtn" @click="showModal">
                            <img src="../components/img/passkey.svg" alt="bg">
                        </div>
                    </div>
    
    
                </div>
            </div>
        </header>
    </div>
    <div id="modal" class="modal">
      <div class="modal-content">
        <span class="close" id="closeModalBtn" @click="closeModal">&times;</span>
        <form id = "form-for-auto">
            <label for="username" class = "text-for-auto">E-mail/phone</label>
            <br><input type="text" id="username" name="username" required>
          
            <br><br><label for="password" class = "text-for-auto">Password</label>
            <br><input type="password" id="password" name="password" required>
            
            <br><br><a href="/games" @click.prevent="goToGames"><input type="submit" value="Log In" class = "button-for-auto"></a>
          </form>
        </div>
    </div>

    <div class ="play" id = "1">
        <img src="../components/img/bg1.png" alt="bg">
        <div class="text-first">
            <p>Experience the Thrill 
            <br>of Winning</p>
        </div>
        <div class="text-second">
            <p>Step into the world of high stakes gambling and indulge in the<br>excitement of your favorite casino games at Erik.</p>
        </div>
        <div id="showModalBtn" @click="showModal">
            <a><input type="submit" value="Play Now" class = "button-thirst" ></a>
        </div>
       
    </div>
    <div class ="About" id = "2">
        <div class="container">
            <div class="row">
                <div class="col-md-2 offset-md-6">
                    <h1>About us</h1>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-md-2">
                    <img src="../components/img/rer.png" style="max-width: 100%;" alt="bg">
                </div>
                <div class="col-md-4 offset-md-0">
                    <h5>
                        Welcome to Erik, a premier casino destination in 
                        the United States. We pride ourselves on offering 
                        an exceptional gaming experience that combines 
                        thrilling entertainment, luxurious amenities, 
                        and unmatched customer service. With a wide 
                        range of exciting games, from classic favorites to 
                        the latest innovations, our state-of-the-art casino 
                        floor is designed to cater to both seasoned 
                        players and those new to the world of gambling. 
                        Join us at Erik and embark on a thrilling journey 
                        where luck meets luxury.
                    </h5>
                    <a href="#4"><input type="submit" value="Contact" class = "button-contact-about" ></a>
                </div>
            </div>
        </div>
        <img src="../components/img/croun.png" alt="bg" class="croun-img">
    </div>
    <div class ="AboutScroll">
        <h1> Experience Excitement at the Casino</h1>
        <div class="LampScrollBar"></div>
        <div class = "AboutScrollBar">
            <div class="but-scrollbar">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="../components/img/sk4.png" class="d-block w-100" alt=".r..">
                        <div class="carousel-caption d-none d-md-block">
                          <h2>First slide label</h2>
                          <p>Some representative placeholder content for the first slide.</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../components/img/sk2.png" class="d-block w-100" alt=".r..">
                        <div class="carousel-caption d-none d-md-block">
                          <h2>Second slide label</h2>
                          <p>Some representative placeholder content for the second slide.</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../components/img/sk3.png" class="d-block w-100" alt="..r.">
                        <div class="carousel-caption d-none d-md-block">
                          <h2>Third slide label</h2>
                          <p>Some representative placeholder content for the third slide.</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="../components/img/sk1.png" class="d-block w-100" alt="..r.">
                        <div class="carousel-caption d-none d-md-block">
                          <h2>Third slide label</h2>
                          <p>Some representative placeholder content for the third slide.</p>
                        </div>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
            
              
        </div>

    </div>
    <div class ="Lisa">
        <p>I had an amazing time at Erik Casino in Russia! The staff was 
            <br>friendly, the atmosphere was electric, and the games were thrilling. 
            <br>Thank you for the unforgettable experience!
            <br><br> - Lisa del Giocondo</p>
            
    </div>
    <div class ="License" id = "3">
        <h1>License</h1>
        <div class = "Paper-Lis">
            <img src="../components/img/lis.png" alt="bg">
            
        </div>
        <a href="FullLis.html"><input type="submit" value="Show Full" class = "button-show-lis" ></a>
        

    </div>
    <div class ="Map">
        <div class = Map_img>
            <img src="../components/img/Screenshot_5 1.png" alt="bg">
        </div>
        <div class = "rect-map">
            <h1>
                Location
            </h1>
            <p>
                Novocherkassk, Russia
            </p>
        </div>
    </div>
    <div class ="Connect" id = "4">
        <div class="container">
            <div class="row">
                <div class="col-md-5 offset-md-1">
                    <h1>Connect with Us</h1>
                    <br><br><h5>
                        Complete the contact form below to get in touch with our 
                        <br>team. We are here to answer any questions you may have 
                        <br>and help you with your casino needs.
                    </h5>
                </div>
                <div class="col-md-4 offset-md-1">
                    <form id = "form-for-connect">
                        <div class = "container">
                            <div class="row">
                                <div class="col-md-5 offset-md-0">
                                    <label for="name" class = "text-for-connect" style = "margin-left: -13px;">Name</label>
                                    <br><input type="text" class="connect-name" name="name" required>
                                </div>
                                <div class="col-md-5 offset-md-2">
                                    <label for="e-mail" class = "text-for-connect">E-mail</label>
                                    <br><input type="text" class="connect-e-mail" name="e-mail" required>
                                </div>
                            </div>
                        </div>
                        

                        <br><br><label for="message" class = "text-for-connect">Message</label>
                        <br><input type="text" class="connect-message" name="message" required>
                      
                        <br><br><input type="submit" value="Send" class = "button-for-connect">
                      </form>
                </div>
            </div>
        </div>
    </div>
    <footer>
    <h1>Erik’s Casino Company©</h1>
    <h4>Все права защищены</h4>
    <img src="../components/img/pillow.png" alt="bg">
</footer>
</div>
</template>

<script>

export default {
    methods: {
    showModal() {
      document.getElementById('modal').style.display = 'block';
    },
    closeModal() {
      document.getElementById('modal').style.display = 'none';
    },
    goToGames() {
      this.$router.push('/games');
    }
    },
};
</script>

<style>

header{
    position: fixed;
    margin-top: 20px;
    flex-shrink: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 10px 70px;
    list-style-type: none;
    left: 5%;
    right: 5%;
    border-radius: 10px;
    background: linear-gradient(180deg, #352900 -38.41%, rgba(0, 0, 0, 0.00) 50%), 
        linear-gradient(90deg, rgba(77, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 50%), 
        linear-gradient(270deg, #310707 0.03%, rgba(0, 0, 0, 0.00) 50%), #2F0000;
    box-shadow: 10px 10px 10px 5px #000;
    z-index: 100;
}

header .menu_link{
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    line-height: 45px; /* 100% */
    text-decoration: none;
    font-family: Piazzolla;
    font-weight: 400;
}

.play{
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0px;    
    position: relative;
    max-width: 100%;
    height: 950px;
    flex-wrap:wrap;
    align-content: flex-start;
    overflow-y: hidden;
}

.play img{
    margin-top: 90px;
    margin-left: 40px;
    filter: blur(2px);
    height: auto;
    display: block;
    transform: scale(1.4);
    transition: transform 0.3s ease; /* Плавный переход для эффекта масштабирования (по желанию) */
}

  #showModalBtn{
    cursor: pointer;
  }

  #modal {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 500px;
    height: 500px;
    border-radius: 20px;
    background: #2F0000;
    box-shadow: 10px 10px 10px 0px rgba(79, 64, 64, 0.50) inset, 10px 10px 10px 0px rgba(1, 0, 0, 0.50);

  }
  
 body .modal-content {
    position: relative;
    background-color: rgba(255, 0, 0, 0);
    border: none;
    color:white;

  }
  
  .close {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 50px;
    cursor: pointer;
  }

  #username{
    width: 260px;
    height: 52px;
    flex-shrink: 0;
    border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;
}
#password{
    width: 260px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;
}
.text-for-auto{
    color: #FFF;
text-align: center;
font-family: Piazzolla;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.button-for-auto{
    width: 152px;
height: 53px;
flex-shrink: 0;
border-radius: 10px;
border: 2px solid #FFF;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
background: none;
color: #FFF;
}
.button-for-auto:hover {
    background-color: #dddddd2c;
  }

#form-for-auto{
    position: relative;
    margin-top: 110px;
    margin-left: 100px;
}

.text-first, .text-second, .button-thirst {
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Piazzolla;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;    
  }
 .text-first {
    color: #FFF;
    font-size: 64px;
  }
  
  .text-second {
    margin-top: 150px;
    color: #FFF;
    font-size: 24px;
  }

  .button-thirst{
    width: 152px;
    height: 53px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #FFF;
    box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
    background: none;
    color: #FFF;
    font-size: 24px;
    margin-top: 250px;
  }

  .button-thirst:hover {
    background-color: #dddddd2c;
  }

  .About{
    width: 100%;
    height: 720px;
    background: linear-gradient(0deg, #2F0000 0%, rgba(0, 0, 0, 0.00) 100%), #000;}

.About h1, h5{
    color: #FFF;
font-family: Piazzolla; 
font-style: normal;
font-weight: 400;
line-height: normal;
}
.About h5{
    color: #FFF;
font-family: Piazzolla; 
font-style: normal;
font-weight: 400;
line-height: normal;
}
.croun-img{
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 10px;
    position: relative;
    left: 50%;
    top:43%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    display: block;
}
.button-contact-about{
    width: 152px;
    height: 53px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #FFF;
    box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
    background: none;
    color: #FFF;
    font-size: 24px;
    margin-top: 40px;
}

.button-contact-about:hover {
    background-color: #dddddd2c;
  }

  .AboutScroll{
    width: 100%;
    height: 720px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 72.78%, rgba(0, 0, 0, 0.00) 78.12%), linear-gradient(180deg, #2F0000 0%, #01002F 146.86%), #FFF;
}

.AboutScroll h1{
    position: relative;
    top:10%;
    color: #FFF;
    text-align: center;
    font-family: Piazzolla;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.LampScrollBar{
    position: absolute;
    left: 15%;
    right: 15%;
    top: 1830px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 90px;
    background: linear-gradient(0deg, rgba(255, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%), #2F0000;
}
.AboutScrollBar{

    width: 100%;
    height: 557px;
    margin-top: 119px;
    flex-shrink: 0;
    background: linear-gradient(180deg, rgba(255, 252, 252, 0.50) 0%, rgba(0, 0, 0, 0.00) 10.68%), linear-gradient(180deg, #D80000 0%, rgba(47, 0, 0, 0.00) 96.32%), #340000;
}

.but-scrollbar{
    width: 800px;
    height: 524px;
    flex-shrink: 0;
    position: relative;
    margin: 5px;
    left: 50%;
    top:55%;
    transform: translate(-50%, -50%);
    text-align: center;

}
  
  
.Lisa{
    width: 100%;
    height: 720px;
    display: flex;
    padding: 457px 346px 135px 347px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    background: linear-gradient(180deg, #340000 4.24%, rgba(52, 0, 0, 0.00) 112.15%), #000;
}
.Lisa p{
    color: #FFF;
    text-align: center;
    font-family: Piazzolla;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.License{
    width: 100%;
    height: 720px;
    background: #000;
}
.License h1{
    position: relative;
    color: #FFF;
    text-align: center;
    margin-top: 40px;
    font-family: Piazzolla;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.button-show-lis{
    position: relative;
    left: 50%;
    top:-30%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Piazzolla;
    font-style: normal;
    font-weight: 400;
    line-height: normal;   
    width: 152px;
    height: 53px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #FFF;
    box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
    background: none;
    color: #FFF;
    font-size: 24px;
    margin-top: 250px;
}

.button-show-lis:hover {
    background-color: #dddddd2c;
  }
.Paper-Lis{
    position: relative;
    left: 50%;
    top:40%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Piazzolla;
    font-style: normal;
    font-weight: 400;
    line-height: normal;   
    width: 619px;
    height: 524px;
    flex-shrink: 0;
    border-radius: 10px;
    background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), lightgray 50% / cover no-repeat;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    left: 50%;
    transform: translate(-50%, -50%);
}

.Map{
    width: 100%;
    height: 720px;
    background: linear-gradient(0deg, rgba(222, 0, 0, 0.20) 0%, rgba(222, 0, 0, 0.00) 96.94%), #040000;
}
.Map_img{
    width: 930px;
    height: 501px;
    flex-shrink: 0;
    border-radius: 10px;
    position: relative;
    left: 50%;
    top:60%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    display: block;
}
.rect-map{
    width: 421px;
    height: 115px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #000;
    position: relative;
    left: 40%;
    top:10%;
    transform: translate(-50%, -50%);
    padding: 20px;
    
}
.rect-map h1{
    color: #FFF;
    font-family: Piazzolla;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.rect-map p{
    color: #FFF;
    font-family: Piazzolla;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.Connect{
    width: 100%;
    height: 720px;
    background: linear-gradient(0deg, rgba(215, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), #2F0000;
}

.Connect .text-for-connect{
    color: #FFF;
    text-align: center;
    font-family: Piazzolla;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

#form-for-connect{
    position: relative;
    margin-top: 110px;
}

.Connect .connect-name{
 width: 235px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: #772727;
margin-left: -13px;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.Connect .connect-e-mail{
    width: 240px;
height: 45px;
flex-shrink: 0;
border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;

}

.Connect .connect-message{
    width: 515px;
height: 257px;
flex-shrink: 0;
border-radius: 10px;
background: #772727;
box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25) inset;

}

.button-for-connect{
    position: relative;
    left: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Piazzolla;
    font-style: normal;
    font-weight: 400;
    line-height: normal;   
    width: 152px;
    height: 53px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #FFF;
    box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
    background: none;
    color: #FFF;
    font-size: 24px;
    margin-top: 20px;
}

.button-for-connect:hover {
    background-color: #dddddd2c;
  }

.Connect h1{

    color: #FFF;
    font-family: Piazzolla;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.Connect h5{
    color: #FFF;
    font-family: Piazzolla;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
footer{
    position: relative;
    width: 100%;
    height: 232px;
    flex-shrink: 0;
    background-color: #2F0000;
    box-shadow: 0px 5px 4px 0px rgba(255, 177, 177, 0.50) inset;
}

footer img{
    position: relative;
    display: block;
    bottom: 5%;
    left:10%;
    width: 301px;
    height: 232px;
    flex-shrink: 0;
    transform: translate(-50%, -50%);
}

footer h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Piazzolla;
    font-style: normal;
    font-weight: 400;
    line-height: normal;    
    color: rgba(255, 255, 255, 0.60);
    font-size: 24px;

    
}
footer h4{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: Piazzolla;
    font-style: normal;
    font-weight: 400;
    line-height: normal;    
    color: rgba(255, 255, 255, 0.60);
    font-size: 18px;

    
}
</style>
