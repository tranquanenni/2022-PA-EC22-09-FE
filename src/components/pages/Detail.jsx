import Header from "../Header/Header"

const Detail = () => {
    return (
        <>
            <Header />
            
           <div className="hero-section style-2">
  <div className="container">
    <ul className="breadcrumb">
      <li>
        <a href="index.html">Home</a>
      </li>
      <li>
        <a href="#0">Pages</a>
      </li>
      <li>
        <span>Vehicles</span>
      </li>
    </ul>
  </div>
  <div className="bg_img hero-bg bottom_center"  />
            </div>
            

           <section className="product-details padding-bottom mt--240 mt-lg--440">
  <div className="container">
    <div className="product-details-slider-top-wrapper">
      <div className="product-details-slider owl-theme owl-carousel" id="sync1">
        <div className="slide-top-item">
          <div className="slide-inner">
            <img src="assets/images/product/product1.png" alt="product" />
          </div>
        </div>
        <div className="slide-top-item">
          <div className="slide-inner">
            <img src="assets/images/product/product2.png" alt="product" />
          </div>
        </div>
        <div className="slide-top-item">
          <div className="slide-inner">
            <img src="assets/images/product/product3.png" alt="product" />
          </div>
        </div>
        <div className="slide-top-item">
          <div className="slide-inner">
            <img src="assets/images/product/product4.png" alt="product" />
          </div>
        </div>
        <div className="slide-top-item">
          <div className="slide-inner">
            <img src="assets/images/product/product5.png" alt="product" />
          </div>
        </div>
        <div className="slide-top-item">
          <div className="slide-inner">
            <img src="assets/images/product/product6.png" alt="product" />
          </div>
        </div>
      </div>
    </div>
    <div className="product-details-slider-wrapper">
      <div className="product-bottom-slider owl-theme owl-carousel" id="sync2">
        <div className="slide-bottom-item">
          <div className="slide-inner">
            <img src="assets/images/product/01.png" alt="product" />
          </div>
        </div>
        <div className="slide-bottom-item">
          <div className="slide-inner">
            <img src="assets/images/product/02.png" alt="product" />
          </div>
        </div>
        <div className="slide-bottom-item">
          <div className="slide-inner">
            <img src="assets/images/product/03.png" alt="product" />
          </div>
        </div>
        <div className="slide-bottom-item">
          <div className="slide-inner">
            <img src="assets/images/product/04.png" alt="product" />
          </div>
        </div>
        <div className="slide-bottom-item">
          <div className="slide-inner">
            <img src="assets/images/product/05.png" alt="product" />
          </div>
        </div>
        <div className="slide-bottom-item">
          <div className="slide-inner">
            <img src="assets/images/product/06.png" alt="product" />
          </div>
        </div>
      </div>
      <span className="det-prev det-nav">
        <i className="fas fa-angle-left" />
      </span>
      <span className="det-next det-nav active">
        <i className="fas fa-angle-right" />
      </span>
    </div>
    <div className="row mt-40-60-80">
      <div className="col-lg-8">
        <div className="product-details-content">
          <div className="product-details-header">
            <h2 className="title">Sản Phẩm Đấu Giá</h2>
            <ul>
              <li>Listing ID: 14076242</li>
              <li>Item #: 7300-3356862</li>
            </ul>
          </div>
          <ul className="price-table mb-30">
            <li className="header">
              <h5 className="current">Giá Hiện Tại</h5>
              <h3 className="price">$700.00</h3>
            </li>
            <li>
              <span className="details">Gói VIP</span>
              <h5 className="info">10.00%</h5>
            </li>
            <li>
              <span className="details">Bước Nhảy</span>
              <h5 className="info">$50.00</h5>
            </li>
          </ul>
          <div className="product-bid-area">
            <form className="product-bid-form">
              <div className="search-icon">
                <img src="assets/images/product/search-icon.png" alt="product" />
              </div>
              <input type="text" placeholder="Nhập con số bạn muốn" />
              <button type="submit" className="custom-button">Xác Nhận</button>
            </form>
          </div>
          <div className="buy-now-area">
            <a href="#0" className="custom-button">Mua Ngay: $4,200</a>
            <a href="#0" className="rating custom-button active border"><i className="fas fa-star" /> Thêm Vào Danh Sách Yêu Thích</a>
            <div className="share-area">
              <span>Share to:</span>
              <ul>
                <li>
                  <a href="#0"><i className="fab fa-facebook-f" /></a>
                </li>
                <li>
                  <a href="#0"><i className="fab fa-twitter" /></a>
                </li>
                <li>
                  <a href="#0"><i className="fab fa-linkedin-in" /></a>
                </li>
                <li>
                  <a href="#0"><i className="fab fa-instagram" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="product-sidebar-area">
          <div className="product-single-sidebar mb-3">
            <h6 className="title">Phiên đấu giá kết thúc khi:</h6>
            <div className="countdown">
              <div id="bid_counter1" />
            </div>
            <div className="side-counter-area">
              <div className="side-counter-item">
                <div className="thumb">
                  <img src="assets/images/product/icon1.png" alt="product" />
                </div>
                <div className="content">
                  <h3 className="count-title"><span className="counter">61</span></h3>
                  <p>Người đấu giá</p>
                </div>
              </div>
              <div className="side-counter-item">
                <div className="thumb">
                  <img src="assets/images/product/icon2.png" alt="product" />
                </div>
                <div className="content">
                  <h3 className="count-title"><span className="counter">203</span></h3>
                  <p>Đang Xem</p>
                </div>
              </div>
              <div className="side-counter-item">
                <div className="thumb">
                  <img src="assets/images/product/icon3.png" alt="product" />
                </div>
                <div className="content">
                  <h3 className="count-title"><span className="counter">82</span></h3>
                  <p>Tổng đấu giá</p>
                </div>
              </div>
            </div>
          </div>
          <a href="#0" className="cart-link">View Shipping, Payment &amp; Auction Policies</a>
        </div>
      </div>
    </div>
  </div>
  <div className="product-tab-menu-area mb-40-60 mt-70-100">
    <div className="container">
      <ul className="product-tab-menu nav nav-tabs">
        <li>
          <a href="#details" className="active" data-toggle="tab">
            <div className="thumb">
              <img src="assets/images/product/tab1.png" alt="product" />
            </div>
            <div className="content">Mô tả</div>
          </a>
        </li>
        <li>
          <a href="#delevery" data-toggle="tab">
            <div className="thumb">
              <img src="assets/images/product/tab2.png" alt="product" />
            </div>
            <div className="content">Những lựa chọn</div>
          </a>
        </li>
        <li>
          <a href="#history" data-toggle="tab">
            <div className="thumb">
              <img src="assets/images/product/tab3.png" alt="product" />
            </div>
            <div className="content">Lịch Sử(36)</div>
          </a>
        </li>
        <li>
          <a href="#questions" data-toggle="tab">
            <div className="thumb">
              <img src="assets/images/product/tab4.png" alt="product" />
            </div>
            <div className="content">Câu hỏi </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="container">
    <div className="tab-content">
      <div className="tab-pane fade show active" id="details">
        <div className="tab-details-content">
          <div className="header-area">
            <h3 className="title">Sản Phẩm</h3>
            <div className="item">
              <table className="product-info-table">
                <tbody>
                  <tr>
                    <th>Điều Kiện</th>
                    <td>New</td>
                  </tr>
                  <tr>
                    <th>Mileage</th>
                    <td>15,000 miles</td>
                  </tr>
                  <tr>
                    <th>Year</th>
                    <td>09-2017</td>
                  </tr>
                  <tr>
                    <th>Engine</th>
                    <td>I-4 1,5 l</td>
                  </tr>
                  <tr>
                    <th>Fuel</th>
                    <td>Regular</td>
                  </tr>
                  <tr>
                    <th>Transmission</th>
                    <td>Automatic</td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>Blue</td>
                  </tr>
                  <tr>
                    <th>Doors</th>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item">
              <h5 className="subtitle">This unit is located at:</h5>
              <ul>
                <li>Kenben Industries Ltd.</li>
                <li>1908 Shore Parkway</li>
                <li>Brooklyn, NY 11214</li>
              </ul>
            </div>
            <div className="item">
              <h5 className="subtitle">Acceptance of condition - buyer inspection/preview</h5>
              <p>Vehicles and equipment often display significant wear and tear. Assets are sold AS IS with no warranty, express or implied, and we highly recommend previewing them before bidding. The preview period is the only opportunity to inspect an asset to verify condition and suitability. No refunds, adjustments or returns will be entertained. </p>
              <p>Vehicle preview inspections of the vehicle can be done at the below location on Monday and Tuesday from 10am - 2pm. See Preview Rules Here.</p>                                
              <ul>
                <li>Kenben Industries Ltd.</li>
                <li>1908 Shore Parkway</li>
                <li>Brooklyn, NY 11214</li>
              </ul>
              <p>BUYER is responsible for all storage fees at time of pick-up. See above under IMPORTANT PICK-UP TIMES for specific requirements for this asset, but generally assets must be picked up within 2 business days of payment otherwise additional storage fees will be applied.</p>
            </div>
            <div className="item">
              <h5 className="subtitle">Legal Notice</h5>
              <p>Vehicles may not be driven off the lot except with a dealer plate affixed. By law, vehicles are not permitted to be parked on or to drive on the streets of New York without registration and plates registered to the vehicle. If the buyer cannot obtain the required registration and plates prior to pick up, they should have the vehicle towed at their own expense. The buyer should have the vehicle towed at their own expense.</p>
              <p>Condition: Untested - Sold As-Is</p>
              <p>Employees of Sbidu, its subcontractors and affiliated companies, employees of the NYC Government and those bidding on behalf of PropertyRoom.com, its subcontractors and affiliated companies and employees of the NYC Government are not permitted to bid on or purchase NYC Fleet/DCAS assets. </p>
            </div>
            <div className="item">
              <h5 className="subtitle">Condition</h5>
              <p>This ASSET is being listed on behalf of a law enforcement agency or other partner ("SELLER") by PropertyRoom.com on a Sold AS IS, WHERE IS, WITH ALL FAULTS basis, with no representation or warranty from PropertyRoom.com or SELLER. In many cases, the car, boat, truck, motorcycle, aircraft, mowers/tractors, etc. ("ASSET") sold on PropertyRoom.com comes from seizure or forfeiture, and the SELLER typically does not possess use-based knowledge of the ASSET. Further, PropertyRoom.com does not physically inspect the ASSET and cannot attest to actual working conditions. PropertyRoom.com and SELLER gather information about the ASSET from authoritative sources; still, errors may appear from time to time in the listing. PropertyRoom.com cautions any website user, shopper, bidder, etc. ("BUYER") to attempt to confirm, with us, information material to a bidding/purchasing decision.</p>
            </div>
            <div className="item">
              <h5 className="subtitle">Bidding</h5>
              <p>At this time Sbidu only accepts bidders from the United States, Canada and Mexico on Vehicles and Heavy Industrial Equipment. The Bid Now button will appear on auctions where you are qualified to place a bid.</p>
            </div>
            <div className="item">
              <h5 className="subtitle">Buyer Responsibility</h5>
              <p>The BUYER will receive an email notification from PropertyRoom.com following the close of an auction. After fraud verification and payment settlement, we will email the BUYER instructions for retrieving the ASSET from the Will-Call Location listed above.</p>
              <p>All applicable shipping, logistics, transportation, customs, fees, taxes, export/import activities and all associated costs are the sole responsibility of the BUYER. No shipping, customs, export or import assistance is available from Sbidu.</p>
              <p>When applicable for a given ASSET, BUYER bears responsibility for determining motor vehicle registration requirements in the applicable jurisdiction as well as costs, including any fees, registration fees, taxes, etc., owed as a result of BUYER registering an ASSET; for example, BUYER bears sole responsibility for all title/registration/smog and other such fees.</p>
              <p>BUYER is responsible for all storage fees at time of pick-up. See above under IMPORTANT PICK-UP TIMES for specific requirements for this asset, but generally assets must be picked up within 2 business days of payment otherwise additional storage fees will be applied.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade show" id="delevery">
        <div className="shipping-wrapper">
          <div className="item">
            <h5 className="title">shipping</h5>
            <div className="table-wrapper">
              <table className="shipping-table">
                <thead>
                  <tr>
                    <th>Available delivery methods </th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Customer Pick-up (within 10 days)</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>Standard Shipping (5-7 business days)</td>
                    <td>Not Applicable</td>
                  </tr>
                  <tr>
                    <td>Expedited Shipping (2-4 business days)</td>
                    <td>Not Applicable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="item">
            <h5 className="title">Notes</h5>
            <p>Please carefully review our shipping and returns policy before committing to a bid.
              From time to time, and at its sole discretion, Sbidu may change the prevailing fee structure for shipping and handling.</p>
          </div>
        </div>
      </div>
      <div className="tab-pane fade show" id="history">
        <div className="history-wrapper">
          <div className="item">
            <h5 className="title">Bid History</h5>
            <div className="history-table-area">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Bidder</th>
                    <th>date</th>
                    <th>time</th>
                    <th>unit price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-history="bidder">
                      <div className="user-info">
                        <div className="thumb">
                          <img src="assets/images/history/01.png" alt="history" />
                        </div>
                        <div className="content">
                          Moses Watts
                        </div>
                      </div>
                    </td>
                    <td data-history="date">06/16/2021</td>
                    <td data-history="time">02:45:25 PM</td>
                    <td data-history="unit price">$900.00</td>
                  </tr>
                  <tr>
                    <td data-history="bidder">
                      <div className="user-info">
                        <div className="thumb">
                          <img src="assets/images/history/02.png" alt="history" />
                        </div>
                        <div className="content">
                          Pat Powell
                        </div>
                      </div>
                    </td>
                    <td data-history="date">06/16/2021</td>
                    <td data-history="time">02:45:25 PM</td>
                    <td data-history="unit price">$900.00</td>
                  </tr>
                  <tr>
                    <td data-history="bidder">
                      <div className="user-info">
                        <div className="thumb">
                          <img src="assets/images/history/03.png" alt="history" />
                        </div>
                        <div className="content">
                          Jack Rodgers
                        </div>
                      </div>
                    </td>
                    <td data-history="date">06/16/2021</td>
                    <td data-history="time">02:45:25 PM</td>
                    <td data-history="unit price">$900.00</td>
                  </tr>
                  <tr>
                    <td data-history="bidder">
                      <div className="user-info">
                        <div className="thumb">
                          <img src="assets/images/history/04.png" alt="history" />
                        </div>
                        <div className="content">
                          Arlene Paul
                        </div>
                      </div>
                    </td>
                    <td data-history="date">06/16/2021</td>
                    <td data-history="time">02:45:25 PM</td>
                    <td data-history="unit price">$900.00</td>
                  </tr>
                  <tr>
                    <td data-history="bidder">
                      <div className="user-info">
                        <div className="thumb">
                          <img src="assets/images/history/05.png" alt="history" />
                        </div>
                        <div className="content">
                          Marcia Clarke
                        </div>
                      </div>
                    </td>
                    <td data-history="date">06/16/2021</td>
                    <td data-history="time">02:45:25 PM</td>
                    <td data-history="unit price">$900.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center mb-3 mt-4">
                <a href="#0" className="button-3">Load More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade show" id="questions">
        <h5 className="faq-head-title">Frequently Asked Questions</h5>
        <div className="faq-wrapper">
          <div className="faq-item">
            <div className="faq-title">
              <img src="assets/css/img/faq.png" alt="css" /><span className="title">How to start bidding?</span><span className="right-icon" />
            </div>
            <div className="faq-content">
              <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-title">
              <img src="assets/css/img/faq.png" alt="css" /><span className="title">Security Deposit / Bidding Power </span><span className="right-icon" />
            </div>
            <div className="faq-content">
              <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-title">
              <img src="assets/css/img/faq.png" alt="css" /><span className="title">Delivery time to the destination port </span><span className="right-icon" />
            </div>
            <div className="faq-content">
              <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-title">
              <img src="assets/css/img/faq.png" alt="css" /><span className="title">How to register to bid in an auction?</span><span className="right-icon" />
            </div>
            <div className="faq-content">
              <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
            </div>
          </div>
          <div className="faq-item open active">
            <div className="faq-title">
              <img src="assets/css/img/faq.png" alt="css" /><span className="title">How will I know if my bid was successful?</span><span className="right-icon" />
            </div>
            <div className="faq-content">
              <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-title">
              <img src="assets/css/img/faq.png" alt="css" /><span className="title">What happens if I bid on the wrong lot?</span><span className="right-icon" />
            </div>
            <div className="faq-content">
              <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}

export default Detail