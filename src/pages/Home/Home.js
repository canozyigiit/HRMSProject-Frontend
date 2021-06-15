import React from 'react'
import BrowseLocalJobs from './BrowseLocalJobs'
import FeaturedJobs from './FeaturedJobs'
import Information from './Information'
import Search from './Search'

export default function Home() {
    return (
        <div>
            <Search/>
            <Information/>
            <FeaturedJobs/>
            <BrowseLocalJobs/>
        </div>
    )
}
