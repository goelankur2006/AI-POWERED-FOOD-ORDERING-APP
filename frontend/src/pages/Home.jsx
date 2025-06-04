import React from 'react'
import Header from '../components/header'
import About from '../components/About'
import OurMenu from '../components/OurMenu'
import FoodDisplay from '../components/FoodDisplay'

const Home = () => {
  const [category, setCategory] = React.useState('All');
  return (
    <div>
        <Header/>
        <About/>
        <OurMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
    </div>
  )
}

export default Home