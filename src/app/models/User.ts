//Interface
export interface User {
		firstName: string,
		lastName: string,
		age?: number,
		address?: {
			street?: string,
			city?: string, 
			state?: string
		},
		
		isActive?: boolean,
		//this is any because we want to put a date in that
		registered?: any
}



