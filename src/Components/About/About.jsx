import React from 'react'
import './About.css'
import {Brain, Trophy, Users, Zap, Star } from 'lucide-react'
const About = () => {
  return (
    <div className='about'>
        <h1 className='title'>Why Choose QuizAce?</h1>
        <p>Experience the future of learning with our cutting-edge quiz platform</p>
        <div className="cards-container">
            <div className="card">
                <Brain className='icon' size={65}/>
                <h3>Smart Quizzes</h3>
                <p>AI-powered questions that adapt to your learning style</p>
            </div>
            <div className="card">
                <Trophy className='icon' size={65}/>
                <h3>Score Tracking</h3>
                <p>Track your progress and see your improvement over time</p>
            </div>
            <div className="card">
                <Users className='icon' size={65}/>
                <h3>Community</h3>
                <p>Join thousands of learners and compete on leaderboards</p>
            </div>
            <div className="card">
                <Zap className='icon' size={65}/>
                <h3>Instant Results</h3>
                <p>Get immediate feedback and detailed explanations</p>
            </div>
        </div>
        <div className="about-bottom">
            <h2>Ready to Test Your Knowledge?</h2>
            <p>Join thousands of learners and start your quiz journey today</p>
            <button>Start Learning Now <Star/></button>
        </div>
    </div>
  )
}

export default About
