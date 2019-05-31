export default function requestUrl({
	methodName = 'users.get', 
	params = 'user_ids=210700286&fields=photo_400',  
	v = '5.95'})  {

    return `https://api.vk.com/method/${methodName}?${params}&access_token=${localStorage.access_token}&v=${v}`
}