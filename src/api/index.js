export const apiCall = ({ 
	method,
	params,
}) => {
	const promise = () => new Promise((resolve, reject) => {
		// eslint-disable-next-line no-undef
		VK.Api.call(method, { v:'5.95', ...params}, r => resolve(r) )
	})

	return promise().then(
		response => response
	)
}

// export const get = async ({
// 	url,
// 	options = {},
// 	headers = {},
//   }) => {
// 	const response = await fetch(url, {
// 	  method: "GET",
// 	  mode: "cors",
// 	  headers: {
// 		...headers,
// 	  },
// 	  ...options,
// 	});
	
// 	return await response.json();
// }

// export const post = async ({
//   url,
//   body = {},
//   options = {},
//   headers = {},
// }) => {
//   const response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     body: JSON.stringify(body),
//     headers: {
//       'Content-Type': 'application/json',
//       ...headers,
//     },
//     ...options,
//   });

//   return await response.json();
// }

