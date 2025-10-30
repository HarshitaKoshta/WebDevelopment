import React from 'react'

const Home = () => {
  let user="pihu"
  return (
    <div>
      helooooooooooo homeeeeeee
      <New name={user}/>
    </div>
  )
}

const New = ({name}) => {
  return (
    <div>
        {name}
    </div>
  )
}

export default Home