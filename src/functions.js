export const formatDate = (string) => {
	let options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(string).toLocaleDateString([], options);
};

export const getYear = (string) =>{
	return new Date(string).getFullYear();
};