import React from 'react'

function Questions() {
  return (
    <div className='mt-10 pt-20 pb-4'>
        <div>
            <h1 className='text-4xl font-normal font-semibold'>Have Question?</h1>
            <div className='divider'></div>
        </div>
        <div className='rounded-lg'>
            <div className="collapse collapse-arrow bg-base-200  p-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-normal text-NewBlue">What is CineManage?</div>
                <div className="collapse-content font-normal text-richblack-100">
                    <p>CineManage is a platform that helps users manage their movie collections, track movies they're currently watching, and discover new movies.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  p-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-normal text-NewBlue">How do I sign up for an account?</div>
                <div className="collapse-content font-normal text-richblack-100">
                    <p>Click on the "Sign Up" button on the homepage and fill in the required details. You will receive a confirmation email to activate your account.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200  p-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-normal text-NewBlue">How do I log in to my account?</div>
                <div className="collapse-content font-normal text-richblack-100">
                    <p> Click on the "Sign In" button on the homepage and enter your email and password.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 p-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-normal text-NewBlue">How do I add a new movie to my collection?</div>
                <div className="collapse-content font-normal text-richblack-100">
                    <p>Navigate to the "Add Movie" section, enter the movie details, and click "Submit". The movie will be added to your collection.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 p-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium font-normal text-NewBlue">How do I delete a movie from my collection?</div>
                <div className="collapse-content font-normal text-richblack-100">
                    <p>Go to your movie collection, click on the movie you want to delete, and select the "Delete" option. Confirm the deletion to remove the movie from your collection.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Questions