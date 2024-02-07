import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';


const TabsComponent = ()=> (
  <Tabs>
    <TabList>
      <Tab>Bodily Kinesthetic</Tab>
      <Tab>Visual Spatial</Tab>
      <Tab>Musical</Tab>
      <Tab>Mathematical</Tab>
    </TabList>

    <TabPanel>
        <section class="home-tiles">
        
			<article class="style1">
				<span class="image">
					<img src="/images/Formula_1_Racing.png" alt="" />
				</span>
				<a href="/content/Formula_1_Racing" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Archery.png" alt="" />
				</span>
				<a href="/content/Archery" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Golf.png" alt="" />
				</span>
				<a href="/content/Golf" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Fencing.png" alt="" />
				</span>
				<a href="/content/Fencing" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
        </section>
    </TabPanel>
    <TabPanel>
      <section class="home-tiles">
        
			<article class="style1">
				<span class="image">
					<img src="/images/Film_Maker.png" alt="" />
				</span>
				<a href="/content/Film Maker" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Photographer.png" alt="" />
				</span>
				<a href="/content/Photographer" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Drawing.png" alt="" />
				</span>
				<a href="/content/Drawing" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Jewelry_Maker.png" alt="" />
				</span>
				<a href="/content/Jewelry Maker" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
        </section>
    </TabPanel>
    <TabPanel>
     <section class="home-tiles">
        
			<article class="style1">
				<span class="image">
					<img src="/images/Accordion.png" alt="" />
				</span>
				<a href="/content/Accordion" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Street_Dance.png" alt="" />
				</span>
				<a href="/content/Street Dance" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Jazz_Dance.png" alt="" />
				</span>
				<a href="/content/Jazz Dance" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Ukulele.png" alt="" />
				</span>
				<a href="/content/Ukulele" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
        </section>
    </TabPanel>
    <TabPanel>
      <section class="home-tiles">
        	
			<article class="style1">
				<span class="image">
					<img src="/images/Mathematical_Olympiad.png" alt="" />
				</span>
				<a href="/content/Mathematical Olympiad" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Go.png" alt="" />
				</span>
				<a href="/content/Go" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Chess.png" alt="" />
				</span>
				<a href="/content/Chess" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Poker.png" alt="" />
				</span>
				<a href="/content/Poker" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
        </section>
    </TabPanel>
    <TabPanel>
      <section class="home-tiles">
        	
			<article class="style1">
				<span class="image">
					<img src="/images/Basketball.png" alt="" />
				</span>
				<a href="/content/Basketball" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Basketball.png" alt="" />
				</span>
				<a href="/content/Basketball" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Basketball.png" alt="" />
				</span>
				<a href="/content/Basketball" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
			<article class="style1">
				<span class="image">
					<img src="/images/Basketball.png" alt="" />
				</span>
				<a href="/content/Basketball" target="_self">
			        <div class="content"></div>
			    </a>
			</article>
        </section>
    </TabPanel>
  </Tabs>
);



export default function HomePage() {
  const router = useRouter();
  const handleLikeBtn=()=>{
    router.push('/explorer');
  }

	return (
	<div id="home">
			<div className="home-content">
			<Header/>
			<div className="hero-image">
				<img src="/images/home.png" alt="" />
        <div className="hero-text">
          <h1>Frustrated with finding out that kids' potential </h1>
          <p>
            We here to provide the development path for all kinds of activites and help you to get start the program searching. 
          </p>
          <button onClick={(e)=>handleLikeBtn(e)}>Explore Programs</button>
        </div>
			</div>
			<div className="dp-content">
				<h2>Development Pathway</h2>
				
            <p>
                  Many children identify their interests and talents at a very young age, 
          providing them with advantages 
            <br/>that benefit their future lives and careers, 
          unlike those who do not.
            <br/>
          Let's explore the available programs 
          to understand the various development pathways . Avoid being   <br/>
          uninformed parents  only consider the common activities like basketball, swimming, dancing and drawing, 
                      <br/>
                    Think like an expert in the fields, as there are countless other opportunities out there. 
                </p>
			</div>
			</div>
			<div className="home-list-program">
				<div className="home-content">
					<TabsComponent />
					<button onClick={(e)=>handleLikeBtn(e)}>Explore More</button>
				</div>
			</div>
			<div className="home-report">
				<div className="home-content">
				
					<div className="left">

						<p className="title">
							Enhanced by AI technology, designed to address key questions from parents
						</p>
						<ul>
							<li>
							<img src="/images/icon-info.png"/>Offer a comprehensive overview and advantages of engaging in this activity.</li>
							<li>
							<img src="/images/icon-time.png"/>Guidelines on the ideal age to join this activity and steps for initiating participation.</li>
							<li>
							<img src="/images/icon-pathway.png"/>Present a roadmap for progressing from beginner to professional in this field.</li>
							<li>
							<img src="/images/icon-cost.png"/>Provide an estimation of the time and financial investment required for this activity.</li>
				</ul>
					</div>
					<div className="right">
							<img src="/images/pathway.png" alt="" />
					</div>
				</div>
			</div>
				<div className="form">
							<iframe src="https://aa1536f2.sibforms.com/serve/MUIFAI2sb0Kb9d0YhmvLgVgAMnoYpgGaxi-INEy60vrf0dsWroXhKRpjT2LSlwkIWoUp6oxWOvVnZ_UToiQ4HOumxG1K5Fla67aQHxFudF2HcYcSAibX0v0gY-UM1giDo6qWUeTWBVawaCFBsQmYFG-grb1_5XFomGRT2XXoUN1hY1nI_OEgAVMVcN-90TC9yXtvXTTERUUdr3YX" frameborder="0" scrolling="auto" allowfullscreen ></iframe>
				</div>
				<div className="footer">
					<Footer />
			</div>
		</div>
			)
}