import React from 'react'
import ReviewsPage from '@/components/shared/Product-Details/Reviews/all-reviews'
import FilterComponent from '@/components/shared/Product-Details/Reviews/Filter'

export default function page() {
    return (
        <div>
            <div className="grid grid-cols-5 w-5/6 mx-auto hidden lg:grid min-h-screen ">
                <div className="col-span-1 bg-secondary mt-10 text-4xl mb-20">
                    <FilterComponent />
                </div>
                <div className="col-span-4">
                    <ReviewsPage />
                </div>
            </div>

        </div>
    )
}
