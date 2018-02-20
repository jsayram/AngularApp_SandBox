//Interface
export interface User {
		firstName: string,
		lastName: string,
		email: string,
		isActive?: boolean,
		//this is any because we want to put a date in that
		registered?: any,
		hide?: boolean
}
  


