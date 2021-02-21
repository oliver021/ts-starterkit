// typing ypur code

/**
*@class
*@description The sample class
*/
export default class SampleClass{
	public msg: string;

	constructor(_msg: string){
		this.msg = _msg;
	}

	/**
	*@function
	*@description The sample method
	*/
	getMessage(){
		return this.msg;
	}
}

/**
*@function
*@description the factory sample class
*/
export function factoryClass(msg: string){
	return new SampleClass(msg);
}