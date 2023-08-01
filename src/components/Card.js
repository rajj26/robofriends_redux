import React from 'react';


// const Card = (props) => {
// 	return (
// 		<div className='tc bg-light-green dib br3 pa3 mx2 grow bw2 shadow-5'>   
// 		 <img alt='robots' src={`https://robohash.org/${props.id}?size=200x200`} />
// 		 <div>
// 		  <h2>{props.name}</h2>
// 		  <p>{props.email}</p>
// 		 </div>
// 		</div>
// 	);
// }

// instead of the above we can use destructureing like below:

// const Card = (props) => {
// 	const { name, email, id} = props;
// 	return (
// 		<div className='tc bg-light-green dib br3 pa3 mx2 grow bw2 shadow-5'>   
// 		 <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
// 		 <div>
// 		  <h2>{name}</h2>
// 		  <p>{email}</p>
// 		 </div>
// 		</div>
// 	);
// }

// or even like this for destructuring:

const Card = ({name, email, id}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 mx2 grow bw2 shadow-5'>   
		 <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
		 <div>
		  <h2>{name}</h2>
		  <p>{email}</p>
		 </div>
		</div>
	);
}




export default Card;