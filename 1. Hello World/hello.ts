class Hello {
	constructor(public hello: string) {}
	sayHello() {
		return '<h1> ' + this.hello + ' </h1>';
	}
}

var hello = new Hello("Hello, World!");

document.body.innerHTML = hello.sayHello();