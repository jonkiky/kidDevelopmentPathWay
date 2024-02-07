import { useState, useEffect } from "react";
import { InfinitySpin } from 'react-loader-spinner';

export default function Section(props){

	 const [result, setResult] = useState({
	 	loading: true,
	 	status: "n/a",
	 	message: ""
	 });

	 useEffect(() => {
	 	async function getData(props){
	 		const response = await fetch("/api/generate", {
							        method: "POST",
							        headers: {
							          "Content-Type": "application/json",
							        },
							        body: JSON.stringify({ 
							        	system: props.prompts_system,
							        	user: props.prompts_user
							         }),
							      });

		      const data = await response.json();
		      
		      if (response.status !== 200) {
		        throw data.error || new Error(`Request failed with status ${response.status}`);
		        setResult({
		        	loading:false,
		        	status:"404",
		        	message: `Request failed with status ${response.status}`
		        })

		      }else{
		      		setResult({
		        	loading:false,
		        	status:"200",
		        	message: data?.result?.choices[0]?.message?.content?? ""
		        });
		      }
		  }

		  if(props.content&&props.content!==""){
	 		setResult({
		        	loading:false,
		        	status:"200",
		        	message: props.content
		    })
		 	}else{
			 getData(props);
		  	}
		  },
	[props])

    
    let reponsebody = ""

    if(result.loading){
    	reponsebody=<>
    		<p>loading.... <InfinitySpin width='200' color="#4fa94d" /> </p>
   		</>
    }else{
    	reponsebody = <div className="sections"><div dangerouslySetInnerHTML={{ __html: result.message }} /></div>
    }

	return reponsebody;
}