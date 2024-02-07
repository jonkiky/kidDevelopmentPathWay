import { useEffect, useState } from 'react';
import Link from 'next/link';
import RadarChart from '../components/RadarChart';



export default function Talent() {
	 const [radarChart, setRadarChart] =useState(<RadarChart />)
// State to store selected answers for each question
   const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    question11: '',
    question12: '',
    question13: '',
    question14: '',
    question15: '',
    question16: '',
    question17: '',
    question18: '',
    question19: '',
    question20: '',
    question21: '',
    question22: '',
    question23: '',
    question24: '',
    question25: '',
    question26: '',
    question27: '',
    question28: '',
    question29: '',
    question30: '',
    question31: '',
    question32: '',
    question33: '',
    question34: '',
    question35: '',
    question36: '',
    question37: '',
    question38: '',
    question39: '',
    question40: '',
    question41: '',
    question42: '',
    question43: '',
    question44: '',
    question45: '',
  });

  // Function to handle answer selection
  const handleAnswerSelect = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));

    setRadarChart(<RadarChart />)
  };

  
  const questions = [
    'Do your child enjoys telling and writing stories?',
    'Do your child has an extensive vocabulary for their age?',
    'Do your child prefers reading books over playing physical games?',
    'Do your child has a strong memory for names, places, and trivia?',
    'Do your child expresses themselves eloquently and is persuasive with words?',
    'Do your child shows interest in solving puzzles and logic problems?',
    'Do your child is curious about how things work and often asks questions related to logic?',
    'Do your child enjoys learning and discussing mathematical concepts?',
    'Do your child is able to reason through complex problems and come up with solutions?',
    'Do your child likes to categorize or organize things by different attributes?',
    'Do your child enjoys drawing, painting, or creating visual art?',
    'Do your child is skilled at imagining and thinking in three dimensions?',
    'Do your child is good at puzzles and has an excellent sense of direction?',
    'Do your child likes to build models or participate in crafting activities?',
    'Do your child tends to visualize things in their mind very clearly?',
    'Do your child has a good sense of rhythm and timing?',
    'Do your child can easily remember melodies and enjoys singing or humming along to music?',
    'Do your child shows interest in playing a musical instrument?',
    'Do your child responds emotionally to music?',
    'Do your child often taps or makes rhythmic sounds unconsciously?',
    'Do your child excels in sports or physical activities?',
    'Do your child uses body language effectively to communicate?',
    'Do your child enjoys hands-on activities, like constructing or building?',
    'Do your child has good hand-eye coordination and is skilled at tasks requiring precision?',
    'Do your child is often described as "being on the move" and actively exploring the world around them?',
    'Do your child is highly sociable and enjoys being around other people?',
    'Do your child is sensitive to other people’s moods and feelings?',
    'Do your child often takes a leadership role in group settings?',
    'Do your child enjoys teaching or helping others learn new things?',
    'Do your child is skilled at resolving conflicts and negotiating with others?',
    'Do your child has a deep understanding of their own strengths and weaknesses?',
    'Do your child often reflects on their experiences and learns from them?',
    'Do your child has a strong sense of self-motivation and sets personal goals?',
    'Do your child displays a strong independence in learning and completing tasks?',
    'Do your child has diverse interests and likes to explore new ideas and subjects?',
    'Do your child loves being outdoors and has a keen interest in nature?',
    'Do your child can recognize patterns and differences in natural environments?',
    'Do your child has an affinity for taking care of plants or animals?',
    'Do your child enjoys studying topics related to the natural world, like biology or environmental science?',
    'Do your child is curious about weather phenomena and other natural occurrences?',
  ];

  const answerOptions = ['Strong Agree', 'Agree', 'Natural', 'Disagree', 'Strong Disagree'];

  return (
	<div id="talent-section">
	    <div id="search-logo"> 
	    <Link href="/">
	      <span className="symbol">
	        <img src="https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo.png" alt="" />
	      </span>
	    </Link>
	    <span className="home-header-title">
	    	Kids Activites Hub
	    </span>
	  </div>
	<div className="talent-content">
		<div className="questions border">
				 <div>
      <h3>Child Talents Questionnaire</h3>
      <form>
        {questions.map((question, index) => (
          <div key={index} className={index % 2 === 0 ? 'question even-line' : 'question odd-line'}>
            <p>{question}</p>
            <div className="question-options">
              {answerOptions.map((option, optionIndex) => (
                <label key={optionIndex}>
                  <input
                    type="radio"
                    name={`question${index + 1}`}
                    value={option}
                    checked={answers[`question${index + 1}`] === option}
                    onChange={() => handleAnswerSelect(`question${index + 1}`, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </form>
    </div>
		</div>
		<div className="questions-right border">
				<div className="left ">
						<div className="mi border">
							{radarChart} 
						</div>
				</div>
				<div className="right">
					<div className="mi-explain border">
              <h3>What is Logical-Mathematical</h3>

							<p>Multiple Intelligences is a theory by Howard Gardner proposing that intelligence is not a single entity but a combination of distinct abilities. Gardner initially identified seven intelligences, including linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, and intrapersonal. He later added naturalist intelligence. This theory suggests that individuals can excel in different ways, and traditional measures like IQ may not capture the full spectrum of human abilities.</p>
					 </div>
			
				</div>
			    <div className="activities border">
           <h3>Kids Activities for Logical-Mathematical Development</h3>

            <ul>
                <li><strong>Puzzle Solving:</strong> Engage children in age-appropriate puzzles to enhance problem-solving skills.</li>
                <li><strong>Board Games:</strong> Play board games that involve strategy and counting to promote logical thinking.</li>
                <li><strong>Number Games:</strong> Introduce fun number games and activities to improve numerical skills.</li>
                <li><strong>Building Blocks:</strong> Encourage creative building with blocks, fostering spatial and mathematical understanding.</li>
                <li><strong>Mathematical Storybooks:</strong> Read books that incorporate math concepts to make learning enjoyable.</li>
                <li><strong>Counting Games:</strong> Create activities that involve counting objects, helping with basic arithmetic.</li>
                <li><strong>Shape Recognition:</strong> Teach children about different shapes through interactive games and exercises.</li>
                <li><strong>Measurement Activities:</strong> Involve kids in measuring ingredients during cooking or measuring objects around the house.</li>
                <li><strong>Math Apps and Games:</strong> Explore educational apps and games designed to enhance mathematical skills in a playful manner.</li>
                <li><strong>Logical Reasoning Puzzles:</strong> Introduce puzzles that require logical reasoning, such as Sudoku for kids.</li>
            </ul>
          </div>
			  <div className="development-path border">
           <h3>Development Path</h3>

            <ul>
                <li><strong>Puzzle Solving:</strong> Engage children in age-appropriate puzzles to enhance problem-solving skills.</li>
                <li><strong>Board Games:</strong> Play board games that involve strategy and counting to promote logical thinking.</li>
                <li><strong>Number Games:</strong> Introduce fun number games and activities to improve numerical skills.</li>
                <li><strong>Building Blocks:</strong> Encourage creative building with blocks, fostering spatial and mathematical understanding.</li>
                <li><strong>Mathematical Storybooks:</strong> Read books that incorporate math concepts to make learning enjoyable.</li>
                <li><strong>Counting Games:</strong> Create activities that involve counting objects, helping with basic arithmetic.</li>
                <li><strong>Shape Recognition:</strong> Teach children about different shapes through interactive games and exercises.</li>
                <li><strong>Measurement Activities:</strong> Involve kids in measuring ingredients during cooking or measuring objects around the house.</li>
                <li><strong>Math Apps and Games:</strong> Explore educational apps and games designed to enhance mathematical skills in a playful manner.</li>
                <li><strong>Logical Reasoning Puzzles:</strong> Introduce puzzles that require logical reasoning, such as Sudoku for kids.</li>
            </ul>
          </div>

          <div className="career border">
           <h3>career</h3>

            <ul>
                <li><strong>Puzzle Solving:</strong> Engage children in age-appropriate puzzles to enhance problem-solving skills.</li>
                <li><strong>Board Games:</strong> Play board games that involve strategy and counting to promote logical thinking.</li>
                <li><strong>Number Games:</strong> Introduce fun number games and activities to improve numerical skills.</li>
                <li><strong>Building Blocks:</strong> Encourage creative building with blocks, fostering spatial and mathematical understanding.</li>
                <li><strong>Mathematical Storybooks:</strong> Read books that incorporate math concepts to make learning enjoyable.</li>
                <li><strong>Counting Games:</strong> Create activities that involve counting objects, helping with basic arithmetic.</li>
                <li><strong>Shape Recognition:</strong> Teach children about different shapes through interactive games and exercises.</li>
                <li><strong>Measurement Activities:</strong> Involve kids in measuring ingredients during cooking or measuring objects around the house.</li>
                <li><strong>Math Apps and Games:</strong> Explore educational apps and games designed to enhance mathematical skills in a playful manner.</li>
                <li><strong>Logical Reasoning Puzzles:</strong> Introduce puzzles that require logical reasoning, such as Sudoku for kids.</li>
            </ul>
          </div>
      
			
		</div>
	</div>
	</div>
  );
}