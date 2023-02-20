import React from 'react'

export default function PricingComponent() {
  return (
    <div>
         <section id="price-page" className="section-padding" style={{"backgroundImage": "url('img/section-bg-3.png')", "backgroundPosition": "center center"}}>
        <div className="container">
            <div className="row text-white">
                <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center">
                    <div className="page-title">
                        <h4 className="heading-4 title text-white">Simple and Transparent Pricing</h4>
                        <p>Notifications keep you informed of all updates. Customize them to receive as many, or as few, as you want.</p>
                    </div>
                    <div className="space-80"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <div className="price-box  wow fadeInLeft">
                        <h5 className="title">Basic</h5>
                        <div className="price-rate">$0</div>
                        <div className="price-time">Free Forever</div>
                        <div className="price-content">
                            <ul>
                                <li>4 agents included</li>
                                <li>Unlimited History</li>
                                <li>Automated triggers</li>
                                <li>Integrations</li>
                                <li>Team Inbox Features</li>
                            </ul>
                        </div>
                        <a href="#" className="bttn-3">Start using free</a>
                    </div>
                    <div className="space-60 hidden visible-xs"></div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="price-box wow flipInY">
                        <h5 className="title">Pro</h5>
                        <div className="price-rate">$9</div>
                        <div className="price-time">Per Month</div>
                        <div className="price-content">
                            <ul>
                                <li>10 agents included</li>
                                <li>Unlimited History</li>
                                <li>Automated triggers</li>
                                <li>Integrations</li>
                                <li>Team Inbox Features</li>
                            </ul>
                        </div>
                        <a href="#" className="bttn-3">Start My Trial</a>
                    </div>
                    <div className="space-60 hidden visible-xs"></div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="price-box wow fadeInRight">
                        <h5 className="title">Unlimited</h5>
                        <div className="price-rate">$45</div>
                        <div className="price-time">Per Month</div>
                        <div className="price-content">
                            <ul>
                                <li>18 agents included</li>
                                <li>Unlimited History</li>
                                <li>Automated triggers</li>
                                <li>Integrations</li>
                                <li>Team Inbox Features</li>
                            </ul>
                        </div>
                        <a href="#" className="bttn-3">Start My Trial</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
