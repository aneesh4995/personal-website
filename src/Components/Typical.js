import React from 'react'
import Typical from 'react-typical'

class Type extends React.Component {
  render () {
    return (
      <Typical
        steps={['Hello all', 
        500, 
        'Welcome !', 
        500,
        'open to jobs titles',
        500,
        'Software Engineer',
        500,
        'Frontend Engineer',
        500,
        'Backend Engineer',
        500,
        'Devops Engineer',
        500,
        'Full-Stack Engineer',
        500,
        'Please feel free',
        500,
        'to contact me ',
        500,
        'for any exciting offers',
        500,
        'Thank You',
        500
        ]}
        loop={Infinity}
        wrapper="h2"
      />
    )
  }
}

export default Type;