import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Header from "../components/header";
import Link from 'next/link';

export default function page() {

	return (

	<div id="search-page">
			<div className="search-paper">
				 	<Header />
		     		<div className="static-trend-list">
		     				 <div className="inner" id="about-content-sections">
		     				  <div className="content-header">About Us</div>

							   <div className="content">
							  	<p>Everyone harbors dreams deep within their hearts; however, many find themselves lost on the journey to pursue these dreams, feeling confused about the gap between their aspirations and reality. The lack of guidance and understanding of the paths to realization may lead to the dreams remaining unrealized.</p>
										    </div>
							   </div>
					</div>
			</div>
		</div>
			)
}