import React,{useState} from 'react'

export default function NewsLetter() {
    const [input,setInput] = useState({
        email: ''
    });

    const subscribeEmail = (e) =>{
        e.preventDefault();

    }
  return (
    <div>
         <div className="subscribe-area gray-bg pt-80 pb-50" style={{marginBottom: '50px'}}>
			<div className="container width-100">
				<div className="row">
					<div className="col-md-6">
						<div className="subscribe-text mb-30">
							<h4>Subscribe To Our Newsletter</h4>
						</div>
					</div>
					<div className="col-md-6">
						<div className="subscribe-form mb-30">
							<form onSubmit={subscribeEmail}>
								<input value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})} type="email" placeholder="Your email address"/>
								<button type='submit'>subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
