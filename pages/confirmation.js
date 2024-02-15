import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Header from "../components/header";
import Link from 'next/link';



export default function page() {

	return (

	<div id="search-page">
			<div className="search-paper">
				 	<Header />
		     		<div className="static-trend-list">
		     				 <div className="inner" id="content-sections">
		     				  <div className="content-header">Welcome to Kiddie Discovery</div>

							   <div className="content">

							    	<p>
								    	Thank you for subscribing to Kiddie Discovery! 
								    	 You're now set to receive exclusive updates,
								    	 offers, and insights directly to your inbox. 
								    	 We're thrilled to have you with us.
							    	 </p>
							    	 <p>
							    	 	<a href="/" target="_self"> Back to home page.
								    </a>
							    	 </p>
							    </div>
							   </div>
					</div>
			</div>
		</div>
			)
}