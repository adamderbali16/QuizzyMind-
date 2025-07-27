import React from 'react'
import {Brain, MoveRight} from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <Brain className='brain' size={100} color="#fff" />
        <div className='hero-container'>
            <h1 className='title'>QuizAce</h1>
            <p>Test your knowledge, challenge your mind, and ace every quiz with our interactive learning platform</p>
            <div className='hero-buttons'>
                <button className='getstarted-button'>Get started <MoveRight className='arrowButton'/> </button>
                <button className='signin-button'>Sign In</button>
            </div>
            <div className="hero-bottom">
                <div className='card'>
                    <h2 className='text1'>10K+</h2>
                    <p>Active Users</p>
                </div>
                <div className='card'>
                    <h2 className='text2'>50K+</h2>
                    <p>Quizzes Completed</p>
                </div>
                <div className='card'>
                    <h2 className='text3'>95%</h2>
                    <p>Satisfaction Rate</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
