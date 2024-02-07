import React, { useState, createContext, useEffect} from 'react';


export const customContext = createContext(null);


const ContextProvider = ({ children }) => {
 const isLocalStorageAvailable = typeof localStorage !== 'undefined';
  

 	const [likeList, setLikeList] = useState([]);


 	useEffect(() => { 
 		if (isLocalStorageAvailable) {
	      const likeList = localStorage.getItem('likeList');
	    	setLikeList(likeList ? likeList.split(',') : []);
	    } else {
	      setLikeList([]); // Fallback if localStorage is not available
	    }
  	
  }, [])


	const updateLiskList =(newLikeList)=>{
		if(isLocalStorageAvailable){
   			localStorage.setItem('likeList', newLikeList);
    	}
   	 	setLikeList(newLikeList);
	}

	const handleLikeBtn=(e)=>{
		const likedActive = e.currentTarget.dataset.customproperty;
		let newLikeList = [...likeList];
		if (!newLikeList.includes(likedActive)) {
		  newLikeList.push(likedActive);
		}else{
			newLikeList=newLikeList.filter(item => item !== likedActive);
		}
		updateLiskList(newLikeList);
	}

  return (
    <customContext.Provider value={{ likeList, updateLiskList, handleLikeBtn }}>
      {children}
    </customContext.Provider>
  );
};

export default ContextProvider;
