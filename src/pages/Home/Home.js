import React from 'react'
import CreateAnAccount from './CreateAnAccount'
import FeaturedJobs from './FeaturedJobs'
import Information from './Information'
import Search from './Search'
import Team from "../../layouts/Footer/Team"

export default function Home() {
    return (
        <div>
            <Search/>
            <Information/>
            <FeaturedJobs/>
            <CreateAnAccount/>
            
        </div>
    )
}
