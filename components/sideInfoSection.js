import { useState,useEffect, useRef,createRef,useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faCircleInfo ,faHeart as faHeartSolid ,faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartReg} from '@fortawesome/free-regular-svg-icons'
import Header from "../components/header";
import {data} from "../config/search_cate";
import 'react-select-search/style.css'
import { customContext } from '../components/context'; 


export default function SideInfoSection(props) {


	const {likeList, updateLiskList, handleLikeBtn} = useContext(customContext);

  const getLikedList =()=>{
  		let list = []
		  for (var i = data.length - 1; i >= 0; i--) {
		  		let hrefLink = "/content/"+data[i].name;
		  		let img = "/images/"+data[i].name.replace(/ /g, "_")+".png";
		  		let likeIcon = <FontAwesomeIcon icon={faHeartReg} />;
		  		let isLiked = false;
		  		if (likeList.includes(data[i].name)) {
							  			list.push(
							  				<div className="likedItem" key={"liked_"+data[i].name}>
																<a href={hrefLink} target="_self" >
																	<span className="likedItemImage">
																	<img src={img} alt="" />
																</span>
																</a>
																<div className="disListIcon">
																	<button className="disLikeBtn" data-customproperty={data[i].name} onClick={(e)=>handleLikeBtn(e)} >
																		<FontAwesomeIcon icon={faCircleXmark} />
																	</button>
																</div>
												</div>);
							  				
						  		}

					}
		  		return list;
		  }

  return (
  	<div id="ads">
							<h2 className="side-title">Development Pathways</h2>
									<p>Embark on a journey of growth and discovery with Bright Futures Pathways,
									 where every child's potential is limitless. 
									 Our platform is dedicated to guiding and nurturing 
									 young minds through their developmental stages. 
									 We believe in creating a world where kids can
									  explore, learn, and thrive at their own pace.</p>
										<ul>
									<li>	<Link href="/about">About Us</Link></li>
									<li>	<Link href="/use">Terms of Service</Link></li>
									<li>	<Link href="/policy">Privacy Policy</Link></li>
								</ul>
								
								<div className="line"></div>
								<br/>
								<div className="collection">
									<p> Your Likes Collection </p>
										<div className="collected-items">
											{getLikedList()}
										</div>
								</div>
							</div>
  );
}
