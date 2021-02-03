export const formatDate = (string) => {
	let options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(string).toLocaleDateString([], options);
};

export const fullDate = (string) =>{
		let options = { year: "numeric", month: "numeric", day: "numeric" };
		return new Date(string).toLocaleDateString([], options);
}

export const getYear = (string) =>{
	return new Date(string).getFullYear();
};

export const convertTime = (num) => {
	let hours = Math.floor(num/60);
	let min =Math.ceil((num/60 - hours)*60)
	return hours+'h '+ min+"m"
};