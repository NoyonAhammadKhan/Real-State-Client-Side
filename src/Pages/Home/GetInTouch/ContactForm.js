import React from 'react';

const ContactForm = () => {
    return (
        <div className='mt-20'>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				
				<input type="text"  placeholder="Full Name" className="block w-full h-12 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
			</label>
			<label className="block">
				
				<input type="email" placeholder="Email Address" className="block h-12 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
			</label>
            <label className="block">
				
				<input type="phone" placeholder="Contact Number" className="block h-12 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
			</label>
			<label className="block">
				
				<textarea rows="3" placeholder='Messages' className="block w-full h-24 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded bg-yellow-500 focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
		</form>
	</div>
</section>
        </div>
    );
};

export default ContactForm;