import React from 'react'
import { Link } from 'react-router-dom'

export default function PricingComponent() {
  return (
    <div>
         <section id="price-page" className="section-padding" style={{"backgroundImage": "url('img/section-bg-3.png')", "backgroundPosition": "center center"}}>
        <div className="container">
            <div className="row text-white">
                <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3 text-center">
                    <div className="page-title">
                        <h4 className="heading-4 title text-white">RiskCurb Pricing Page</h4>
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
                        <div className="price-time">Get test app</div>
                        <div className="price-content">
                            <ul>
                                <li>0 apps included</li>
                                <li>Unlimited History</li>
                                <li>Automated triggers</li>
                                <li>Integrations</li>
                                <li>Team Inbox Features</li>
                            </ul>
                        </div>
                        <Link to="/create-app/trial" className="bttn-3">Start using free</Link>
                    </div>
                    <div className="space-60 hidden visible-xs"></div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="price-box wow flipInY">
                        <h5 className="title">Pro</h5>
                        <div className="price-rate">$129</div>
                        <div className="price-time">Per Month</div>
                        <div className="price-content">
                            <ul>
                                <li>all apps included</li>
                                <li>riskcurb framework</li>
                                <li>webapp</li>
                                <li>Integrations</li>
                                <li>Team Inbox Features</li>
                            </ul>
                        </div>
                        <Link to="/create-app/monthly" className="bttn-3">Get Plan</Link>
                    </div>
                    <div className="space-60 hidden visible-xs"></div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="price-box wow fadeInRight">
                        <h5 className="title">Unlimited</h5>
                        <div className="price-rate">$1290</div>
                        <div className="price-time">Per Year</div>
                        <div className="price-content">
                            <ul>
                                <li>all apps included</li>
                                <li>Unlimited History</li>
                                <li>Automated triggers</li>
                                <li>Integrations</li>
                                <li>Team Inbox Features</li>
                            </ul>
                        </div>
                        <Link to="/create-app/yearly" className="bttn-3">Get Plan</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
