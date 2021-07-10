import React from "react"
import { useSelector } from 'react-redux'

// class Installation extends React.Component {
    const Installation = () => {

        const { theme } = useSelector(state => state)

        // render() {
        return (
            <div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        <div style={{ paddingTop: '15px' }}>
                            <h4 style={{ marginBottom: '.0rem' }}>Installation</h4>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p>Please follow this steps.</p>
                        <ol>
                            <li>1) In the top right, click the Customize and control Google Chrome icon ( three dot ).</li>
                            <div style={{ width: 'calc(100% - 600px)', padding: '10px' }}><img style={{ width: '300px', filter: theme ? 'invert(1)' : 'invert(0)'}} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625834596/how-to-home-button-google-chrome-1_m7rf4s.jpg" /></div>
                            <li>2) Then click Install App.</li>
                            <div style={{ width: 'calc(100% - 800px)', padding: '10px' }}><img style={{ width: '200px', filter: theme ? 'invert(1)' : 'invert(0)'}} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625834614/WhatsApp_Image_2021-07-09_at_18.12.00_p2no3e.jpg" /></div>
                            <li>3) Finally, Click on Install.</li>
                            <div style={{ width: 'calc(100% - 800px)', padding: '10px' }}><img style={{ width: '200px', filter: theme ? 'invert(1)' : 'invert(0)'}} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625834623/WhatsApp_Image_2021-07-09_at_18.12.00_1_lsbggu.jpg" /></div>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
// }

export default Installation