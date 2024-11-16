import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC } from '@fortawesome/free-solid-svg-icons'

function LandingPage(){



return(
    <div>
        
        <div id="homePage-poster">
        <div id="container1">
        <h1 id="homePage-mainHeading">Plan Your Trip with Go Weekend</h1>
        
        <p>The world is a book, and those who do not travel read only one page.</p>

        <button class="btn">Explore Now</button>
        </div>
        </div>

        <div id="popular-destination">
            <div id="pd-heading">
                <div id="left-pd-heading">
                    <h1>Popular Destinations</h1>
                    <p>From historical cities to natural spectecular, comes see the best of the world!</p>
                </div>
            
                <div id="right-pd-heading">
                    <div id="arrow-left" class="arrow">L</div>
                    <div id="arrow-right" class="arrow">R</div>
                </div>
            </div>
            <div id="pd-galary">
                <div className="card">
                    <div className="card-img"></div>
                    <h1>01</h1>
                    <ul className="card-info">
                        <li>Goa</li>
                        <li>Maharashtra</li>
                    </ul>
                </div>

                <div className="card">
                    <div className="card-img"></div>
                    <h1>01</h1>
                    <ul className="card-info">
                        <li>Goa</li>
                        <li>Maharashtra</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-img"></div>
                    <h1>01</h1>
                    <ul className="card-info">
                        <li>Goa</li>
                        <li>Maharashtra</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-img"></div>
                    <div className="card-dtl">
                        <h1>01</h1>
                        <ul className="card-info">
                            <li>Goa</li>
                            <li>Maharashtra</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        {/* special offers */}
        <div class="container">
      <div class="title">
        <h1>Special Offers</h1>
        <p>
          From historical cities to natural spectaculars, come see the best of
          the world!
        </p>
      </div>
      <div class="offers">
        <div class="offer">
          <img src='goa_place.jpg' />
          <div class="discount">30% Off</div>
          <div class="price">$7,452</div>
          <div class="details">
            <div>2 Beds</div>
            <div> 1 Bath</div>
            <div> Wi-Fi</div>
          </div>
          <div class="details">
            <div><img src="shuttle-icon.png" alt="Shuttle" /> Shuttle</div>
          </div>
          <div class="location">450 Vine St #310, Peru</div>
          <a href="#" class="view-details">View Details</a>
        </div>
        <div class="offer">
          <img src="ooty-place.jpg" alt="ooty_place" />
          <div class="discount">30% Off</div>
          <div class="price">$2,452</div>
          <div class="details">
            <div> 2 Beds</div>
            <div> 1 Bath</div>
            <div> Wi-Fi</div>
          </div>
          <div class="details">
            <div>Shuttle</div>
          </div>
          <div class="location">450 Vine St #310, Mexico</div>
          <a href="#" class="view-details">View Details</a>
        </div>
        <div class="offer">
          <img src="manali_place.jpg" alt="manali-place" />
          <div class="discount">30% Off</div>
          <div class="price">$6,992</div>
          <div class="details">
            <div> 3 Beds</div>
            <div> 2 Baths</div>
            <div> Wi-Fi</div>
          </div>
          <div class="details">
            <div> Shuttle</div>
          </div>
          <div class="location">450 Vine St #310, Cambodia</div>
          <a href="#" class="view-details">View Details</a>
        </div>
      </div>x``
    </div>


    </div>
);
}

export default LandingPage;