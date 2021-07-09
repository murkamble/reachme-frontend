import React from "react"
import Avatar from '../Components/Avatar'

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }} >
                    <div>
                        <img style={{ width: '64px', height: '64px', margin: '10px' }} src="https://res.cloudinary.com/mayurkamble/image/upload/v1625477279/icon/ReachMe2_pnioxk.png" />
                    </div>
                    <div style={{ paddingTop: '15px' }}>
                        <h4 style={{ marginBottom: '.0rem' }}>ReachMe</h4>
                        <p style={{ marginTop: '0px' }}>Social Media Platforms</p>
                    </div>
                </div>
                <hr />

                <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ maxWidth: '700px' }}>
                        <div style={{ paddingTop: '10px' }}>
                            <div style={{ margin: '10px' }}><h5>App Description</h5></div>
                            <div style={{ textIndent: '100px' }}>
                                ReachMe is an Indian photo and video sharing social networking service created by Mayur Kamble.
                                The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging.
                                Posts can be shared publicly or with pre-approved followers.
                                Users can browse other users' content by tags and locations and view trending content.
                                Users can like photos and follow other users to add their content to a personal feed.
                            </div>
                        </div>

                        <div style={{ paddingTop: '10px' }}>
                            <div style={{ margin: '10px' }}><h5>App Developer</h5></div>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'center' }} >
                                    <div>
                                        <Avatar src='https://res.cloudinary.com/mayurkamble/image/upload/v1625831534/MyPhoto_fzim9w.jpg' size="supper-avatar" />
                                    </div>
                                    <div style={{ paddingTop: '15px', margin: '10px' }}>
                                        <h4 style={{ marginBottom: '.0rem' }}>Mayur Kamble</h4>
                                        <p style={{ marginTop: '0px' }}>Software Developer / Fullstack Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs