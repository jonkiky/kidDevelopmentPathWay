import { useState,useEffect, useRef,createRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

export default function Header(props) {

const options = [
	{name: "Mathematical Olympiad", value: "Mathematical Olympiad"},
	{name: "Computing_Olympiad", value: "Computing_Olympiad"},
	{name: "Go", value: "Go"},
	{name: "Chess", value: "Chess"},
	{name: "Poker", value: "Poker"},
	{name: "Ukulele", value: "Ukulele"},
	{name: "Jazz Dance", value: "Jazz Dance"},
	{name: "Painting", value: "Painting"},
	{name: "Jewelry Maker", value: "Jewelry Maker"},
	{name: "Cooking", value: "Cooking"},
	{name: "Drawing", value: "Drawing"},
	{name: "American Football", value: "American Football"},
	{name:"Accordion", value:"Accordion"},
	{name: "Archery", value: "Archery"},
	{name: "Ballet", value: "Ballet"},
	{name: "Basketball", value: "Basketball"},
	{name: "Beauty Pageant", value: "Beauty Pageant"},
	{name: "Fencing", value: "Fencing"},
	{name: "Film Maker", value: "Film Maker"},
	{name: "Formula 1 Racing", value: "Formula 1 Racing"},
	{name: "Golf", value: "Golf"},
	{name: "Gymnastics", value: "Gymnastics"},
	{name: "Karate", value: "Karate"},
	{name: "Photographer", value: "Photographer"},
	{name: "Street Dance", value: "Street Dance"},
	{name: "Taekwondo", value: "Taekwondo"},
	{name: "Swimming", value: "Swimming"}
];
const link = props.link?  props.link :"/";
const router = useRouter();
const search = (terms)=>{
	router.push('/content/'+terms);
}
  return (
				 	<header>
						 	<div id="search-logo"> 
						 		<Link href="/">
									<span className="symbol">
										<img src="https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo.png" alt="" />
									</span>
								</Link>

						 		<Link href={link}>
						 			<span className="title">
								   <h2>Kiddie Discovery</h2>
								  </span>
								</Link>
								<span className="search-input">
										<SelectSearch 
										options={options}  
										name="activities"
										placeholder="Find A Development Pathway" 
										emptyMessage =" No thing founded"
										search
										onChange= {(term)=>search(term)}/>
								</span>
						 	</div>
						 	 <div className="line"></div>
		       </header>

		    
  );
}
