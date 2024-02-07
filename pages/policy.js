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
		     				  <div className="content-header">Privacy Policy</div>

							   <div className="content">

							    <b>Information We Collect</b>

							    <p>We collect and store information you provide when using our website or services. This information may include:</p>

							    <ul>
							        <li>Personal information such as name, email address, and contact information.</li>
							        <li>Usage data, including pages visited, features used, and interactions with the website.</li>
							        <li>Cookies and similar tracking technologies that may be used for analytics and personalization.</li>
							    </ul>

							    <b>How We Use Your Information</b>

							    <p>We use the information we collect for various purposes, including:</p>

							    <ul>
							        <li>Providing and maintaining our services.</li>
							        <li>Personalizing your experience on our website.</li>
							        <li>Improving our website and services.</li>
							        <li>Communicating with you, including responding to inquiries and sending updates.</li>
							    </ul>

							    <b>Sharing Your Information</b>

							    <p>We may share your information in the following situations:</p>

							    <ul>
							        <li>With third-party service providers to facilitate our services.</li>
							        <li>With law enforcement, government agencies, or authorized third parties when required by law.</li>
							        <li>In connection with a business transaction, such as a merger, sale, or acquisition.</li>
							    </ul>

							    <b>Security</b>

							    <p>We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>

							    <b>Changes to This Privacy Policy</b>

							    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

							   
							    </div>
							   </div>
					</div>
			</div>
		</div>
			)
}