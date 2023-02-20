import React from 'react'

export default function Mailer() {
  return (
    <div>
        <div className="contact-area ptb-100">
			<div className="container">
				<form id="contact-form" action="https://htmldemo.net/univ/univ/mail.php" method="POST">
					<div className="row">
						<div className="col-md-6">
							<input type="text" placeholder="name" name="name" id="name"/>
						</div>
						<div className="col-md-6">
							<input type="email" placeholder="email" name="email" id="email"/>
						</div>
						<div className="col-md-6">
							<input type="text" placeholder="tel" name="phone" id="phone"/>
						</div>
						<div className="col-md-6">
							<input type="text" placeholder="subject" name="subject" id="subject"/>
						</div>
						<div className="col-12">
							<textarea id="message" placeholder="message" rows="10" cols="30" name="message"></textarea>
						</div>	
					</div>
					<div className="message-button text-center">
						<input className="message" type="submit" value="send"/>
					</div>
				</form>
				<p className="form-messege"></p>
			</div>
		</div>
    </div>
  )
}
