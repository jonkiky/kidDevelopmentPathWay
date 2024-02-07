import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from "../../components/header";
import Section from "../../components/section";
import SideInfoSection from "../../components/sideInfoSection"


export default function page() {

const [data, setData] = useState([]);

  const router = useRouter();
	const sport = router.query?.slug;
		if(sport==""){
	  	router.push('/404');
	  }

  useEffect(() => {
  	if(sport){
  			fetchContent(sport);
  	};
    
  }, [sport]);


  const fetchContent = function(sport){
  	fetch('../../data/'+sport.replace(/ /g, '_')+'.json')
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setData(localContent(jsonData));
      })
      .catch((error) => {
        setData(error);
      });
  }

  const localContent = function(jsonData){
  	return buildContentFromRes(jsonData.data)
  }

  const buildContentFromRes = function(jsonData){
   let outputBody = [];
	  for(var i = 0; i<=jsonData.length-1; i++){
	  	if(!(jsonData[i].hide&&jsonData[i].hide)){
	  				let content = jsonData[i].response?jsonData[i].response:"" ;
	  	outputBody.push(	<>
	  					<div className="content-header">{jsonData[i].title}</div>
	  					<Section
	  						title={jsonData[i].title}
					  		prompts_system={jsonData[i].system} 
					  		prompts_user={jsonData[i].query}
					  		content ={content}
					  	/>
					 </>)
	  		}
	  	}
	
	  return outputBody;
  }


	return (

	<div id="search-page">
			<div className="search-paper">
				 	<Header link={"/explorer"}/>
				 	<div className="trend-list">
			      <div className="inner" id="content-sections">
									{data}
						</div>
						<SideInfoSection redirect={"/explorer"}/>
					</div>
			</div>
		</div>
			)
}