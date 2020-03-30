import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className='aboutContainer' style={aboutContainerStyle}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sagittis ligula, gravida lobortis purus. 
                    Etiam suscipit nulla a mollis pretium. Aliquam facilisis nunc ipsum, vitae malesuada arcu dapibus nec. 
                    Vivamus tincidunt vitae neque sit amet viverra. Cras non bibendum libero. Fusce semper mollis faucibus. 
                    Suspendisse consectetur turpis cursus egestas aliquet. Cras faucibus nunc libero, in dapibus ligula mollis et. 
                    Aliquam tristique nibh nibh, eu pellentesque libero commodo non. Mauris venenatis neque sit amet risus iaculis tincidunt at ut ex. 
                    Morbi dapibus id justo nec auctor. Integer feugiat tempor leo, sit amet sollicitudin tellus rhoncus non.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sagittis ligula, gravida lobortis purus. 
                    Etiam suscipit nulla a mollis pretium. Aliquam facilisis nunc ipsum, vitae malesuada arcu dapibus nec. 
                    Vivamus tincidunt vitae neque sit amet viverra. Cras non bibendum libero. Fusce semper mollis faucibus. 
                    Suspendisse consectetur turpis cursus egestas aliquet. Cras faucibus nunc libero, in dapibus ligula mollis et. 
                    Aliquam tristique nibh nibh, eu pellentesque libero commodo non. Mauris venenatis neque sit amet risus iaculis tincidunt at ut ex. 
                    Morbi dapibus id justo nec auctor. Integer feugiat tempor leo, sit amet sollicitudin tellus rhoncus non.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel sagittis ligula, gravida lobortis purus. 
                    Etiam suscipit nulla a mollis pretium. Aliquam facilisis nunc ipsum, vitae malesuada arcu dapibus nec. 
                    Vivamus tincidunt vitae neque sit amet viverra. Cras non bibendum libero. Fusce semper mollis faucibus. 
                    Suspendisse consectetur turpis cursus egestas aliquet. Cras faucibus nunc libero, in dapibus ligula mollis et. 
                    Aliquam tristique nibh nibh, eu pellentesque libero commodo non. Mauris venenatis neque sit amet risus iaculis tincidunt at ut ex. 
                    Morbi dapibus id justo nec auctor. Integer feugiat tempor leo, sit amet sollicitudin tellus rhoncus non.
                </p>
            </div>
        )
    }
}

const aboutContainerStyle = {
    position: 'relative',
    display: 'block',
    margin: '0px 50px',
    border: '1px solid #d9d9d9',
    borderRadius: '8px',
    background: ' #f2f2f2',
    gridTemplateColumns: '1fr 1fr 1fr',
    top: '100px',
    padding: '2em'
}

export default About;
