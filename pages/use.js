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
									<div className="content-header">
										Terms of Service
									</div>
									
									<div className="content">
										
										<b> Acceptance of Terms </b>
										<br/>
										<p>
											Welcome to our website. 
											By accessing or using our website, 
											you agree to be bound by these Terms 
											of Service. If you do not agree to 
											these terms, you may not access 
											or use our website.
										</p>
										<b> Changes to Terms </b>
										<br />
										<p>
											We reserves the right to
											modify or update these terms at any 
											time without prior notice. You are 
											responsible for reviewing the TOS 
											periodically to stay informed of any changes.
										</p>

										<b> User Conduct </b>
										<br />

										<p>You agree not to: </p>
										<ul>
											<li>
											i. Use the Website for any unlawful or unauthorized purpose.
											</li>
											<li>
											ii. Transmit any viruses, malware, or any other harmful code.
											</li>
											<li>
											iii. Violate any applicable laws or regulations.
											</li>
											<li>
											iv. Engage in any form of harassment, hate speech, or harmful behavior.</li>
										</ul>
																			
										<b> Intellectual Property</b>
										<br />
										<p> 
											The content and materials on our website, including text, graphics, and logos, are protected by copyright and trademark laws. You may not use, copy, or distribute them without our written permission.
										</p>

										<b>  Disclaimers</b>
										<br />
										<p>Our webiste provides the Website "as is," and we make no warranties or representations regarding its availability or accuracy.</p>

										<b> Limitation of Liability</b>
										<br />
										<p> To the maximum extent permitted by law, SampleSite.com and its affiliates are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Website.</p>

									</div>
							</div>
					</div>
			</div>
		</div>
			)
}