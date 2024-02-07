import { useState,useEffect, useRef,createRef, useContext} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; 
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faCircleInfo ,faHeart as faHeartSolid ,faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartReg} from '@fortawesome/free-regular-svg-icons';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';
import Header from "../components/header";
import {data} from "../config/search_cate";
import SideInfoSection from "../components/sideInfoSection"
import { customContext } from '../components/context'; 


export default function Index() {

  const {likeList, updateLiskList, handleLikeBtn} = useContext(customContext);
  const router = useRouter();
  const [cate, setCate] = useState([]);
  const [tags, setTags] = useState([]);
	const [checkboxStatus, setCheckboxStatus] = useState(Array.from(22,() => false));
	const [filterVisible, setFilterVisible] = useState(false);


	 useEffect(() => {
	   setCate(filter(data,tags))
	  }, [data,tags]);


 const handleMobileClick = (tag) => {
  	if(tag == "filter"){
  		setFilterVisible(!filterVisible);
  	}
  	if(tag == "about"){
  		router.push('/about');
  	}
  }

	function filter(data=[],tags=[]){
		let transferedData = data.map((d) =>{
	 	let addProperty ={ispublic: false};
	 		let age_flag = 0 ;
			let mi_flag = 0 ;
			let cost_flag = 0 ;
			let season_flag = 0 ;

			for (var i = tags.length - 1; i >= 0; i--) {
					if(tags[i].includes("age-")){
							if(!age_flag == 1){
								if(d?.tags?.includes(tags[i])){
									age_flag=1;
								}else{
									age_flag=-1;
								}
							}
					}
					if(tags[i].includes("mi-")){
							if(mi_flag !== 1){
								if(d?.tags?.includes(tags[i])){
									mi_flag=1;
								}else{
									mi_flag=-1;
								}
							}
					}
					if(tags[i].includes("c-")){
							if(!cost_flag == 1){
								if(d?.tags?.includes(tags[i])){
									cost_flag=1;
								}else{
									cost_flag=-1;
								}
							}
					}
					if(tags[i].includes("s-")){
							if(!season_flag == 1){
								if(d?.tags?.includes(tags[i])){
									season_flag=1;
								}else{
									season_flag=-1;
								}
							}
					}
			}
		if(age_flag>=0 && mi_flag>=0 && cost_flag>=0 && season_flag >=0){
			addProperty={ispublic: true};
		}
	 	return({ ...d, ...addProperty })
	 }); 
		return transferedData;
	}

	function addTag(arr, tag) {
	  if (!arr.includes(tag)) {
	    arr.push(tag); // Add the element to the array
	  }
	  return arr;
	}

	function removeTag(arr, tag){
		return arr.filter(obj => obj!== tag);
	}

	const toggleCheckBoxStatus = (event, value) => {
		let updatedTags = tags
		if(event?.target?.checked){
				 updatedTags = addTag(tags,value);
			
		}else{
			   updatedTags = removeTag(tags,value);
		}
			setTags(updatedTags);
			setCate(filter(data,updatedTags))
  };

	

  const getList =()=>{
  		let list = []
		  for (var i = cate.length - 1; i >= 0; i--) {
		  		let hrefLink = "/content/"+cate[i].name;
		  		let img = "/images/"+cate[i].name.replace(/ /g, "_")+".png";
		  		let likeIcon = <FontAwesomeIcon icon={faHeartReg} />;
		  		let isLiked = false;

		  		if (likeList.includes(cate[i].name)) {
					  likeIcon =<FontAwesomeIcon icon={faHeartSolid} style={{ color: '#FF90BC' }}/>
					}

		  		if(cate[i].ispublic){
			  			list.push(
			  				<article className="style1" key={"list_"+cate[i].name}>
												<span className="image">
													<img src={img} alt="" />
												</span>
												<a href={hrefLink} target="_self" >
													<div className="content">
													</div>
												</a>
												<div className="likeBtnGroup">
													<button className="likeBtn" data-customproperty={cate[i].name} onClick={(e)=>handleLikeBtn(e)} >
														{likeIcon}
													</button>
														<span className="age-icon"> | Start Age {cate[i].age}</span>
													<span>{cate[i].name}</span>
													
												</div>
										</article>);
			  				
			  		}
		  		}

		  		if(list.length==0){
		  			list = 	[<article className="nofound">
												No result
										</article>]
		  		}
		  		return list;
		  }

  return (
  	<div id="search-page">
			<div className="search-paper">
				 	<Header />
		       <div className="trend-list">
		       		<div id="facetsearch" className={`filter ${filterVisible ? 'visible' : ''}`}>
		       			 <div className="filter-section" >
		       			 		<div className="filter-section-header">Age TO START</div>
		       			 		<div className="filter-section-options">
		       			 			<ul>
		       			 				<li>
		       			 						<input type="checkbox" id="age-3" value="age-3" 	onChange={(e)=>toggleCheckBoxStatus(e, "age-3")} />
		       			 						<label htmlFor="age-3"> 0 to 3 years</label>
		       			 				</li>
		       			 				<li>
		       			 					<input type="checkbox" id="age-4" value="age-4" 	onChange={(e)=>toggleCheckBoxStatus(e, "age-4")} />
		       			 						<label htmlFor="age-4"> 3 to 4 years</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="age-5" value="age-5" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-5")} />
		       			 						<label htmlFor="age-5">4 to 5 years</label></li>
		       			 				<li>
		       			 						<input type="checkbox" id="age-6" value="age-6" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-6")} />
		       			 						<label htmlFor="age-6">5 to 6 years </label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="age-7" value="age-7" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-7")} />
		       			 						<label htmlFor="age-7">6 to 7 years</label>
		       			 				</li>
		       			 				<li> 	<input type="checkbox" id="age-8" value="age-8" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-8")} />
		       			 						<label htmlFor="age-8">7 to 8 years</label></li>
		       			 						<li> 	<input type="checkbox" id="age-9" value="age-9" 	onChange={(e)=>toggleCheckBoxStatus(e,"age-9")} />
		       			 						<label htmlFor="age-9">older than 8 </label></li>
		       			 			</ul>
		       			 		</div>
		       			 </div>
		       			 <div className="line"></div>
		       			  <div className="filter-section" >
		       			 		<div className="filter-section-header">Point Of Interest</div>
		       			 		<div className="filter-section-options">
		       			 			<ul>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-body" value="mi-bodily-kinesthetic" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-bodily-kinesthetic")} />
		       			 						<label htmlFor="mi-body">Bodily Kinesthetic</label>
		       			 						 </li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-lm" value="mi-methematical" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-methematical")} />
		       			 						<label htmlFor="mi-lm">Logical Methematical</label>
		       			 				</li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-vs" value="mi-visual" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-visual")} />
		       			 						<label htmlFor="mi-vs">Visual Spatial</label>
		       			 						</li>
		       			 				<li>
		       			 				<input type="checkbox" id="mi-ms" value="mi-musical" 	onChange={(e)=>toggleCheckBoxStatus(e,"mi-musical")} />
		       			 						<label htmlFor="mi-ms">Musical</label>
		       			 				</li>
		       			 			</ul>
		       			 		</div>
		       			 </div>
		       			 <div className="line"></div>
		       			 <div className="filter-section" >
		       			 		<div className="filter-section-header">Cost</div>
		       			 		<div className="filter-section-options">
		       			 			<ul>
		       			 				<li>
		       			 						<input type="checkbox" id="cost1" value="c-$" 	onChange={(e)=>toggleCheckBoxStatus(e,"c-$")} />
		       			 						<label htmlFor="cost1">$</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="cost2" value="c-$$" 	onChange={(e)=>toggleCheckBoxStatus(e,"c-$$")} />
		       			 						<label htmlFor="cost2">$$</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="cost3" value="c-$$$" 	onChange={(e)=>toggleCheckBoxStatus(e,"c-$$$")} />
		       			 						<label htmlFor="cost3">$$$</label>
		       			 				</li>
		       			 			</ul>
		       			 		</div>
		       			 </div>
		       			 <div className="line"></div>
		       			 <div className="filter-section" >
		       			 		<div className="filter-section-header">Season</div>
		       			 		<div className="filter-section-options">
		       			 			<ul>
		       			 				<li>
		       			 						<input type="checkbox" id="spring" value="s-spring" 	onChange={(e)=>toggleCheckBoxStatus(e,"s-spring")} />
		       			 						<label htmlFor="spring">Spring</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="summer" value="s-summer" 	onChange={(e)=>toggleCheckBoxStatus(e,"s-summer")} />
		       			 						<label htmlFor="summer">Summer</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="fall" value="s-fall" 	onChange={(e)=>toggleCheckBoxStatus(e,"s-fall")} />
		       			 						<label htmlFor="fall">Fall</label>
		       			 				</li>
		       			 				<li>
		       			 						<input type="checkbox" id="winter" value="s-winter" 	onChange={(e)=>toggleCheckBoxStatus(e,"s-winter")} />
		       			 						<label htmlFor="winter">Winter</label>
		       			 				</li>
		       			 			</ul>
		       			 		</div>
		       			 </div>
		       		</div>
							<section className="tiles">
									 { getList()}
							</section>
							<SideInfoSection />
						</div>

						<div id="mobile-facetsearch">
		       			 	<div className="filter-section-header">
		       			 		<button onClick={()=>handleMobileClick("filter")}> 
		       			 		<FontAwesomeIcon icon={faSliders} style={{ width: "20px"}} fade /> 
		       			 		 </button>
		       			 	</div>
		       			
		       			 	<div className="filter-section-header">
		       			 		<button onClick={()=>handleMobileClick("about")}> 
		       			 		<FontAwesomeIcon icon={faCircleInfo} style={{ width: "20px" }} fade /> 
		       			 		</button>
		       			 		</div>
		        </div>	
			</div>
				
		</div>
  );
}