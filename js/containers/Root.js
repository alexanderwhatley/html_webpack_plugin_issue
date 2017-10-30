import React from 'react'

class Root extends React.Component {
	componentDidMount(){
		$.ajax({
			url: '/hi',
			type: 'POST'
		});
		/*fetch('/api/hi',{
			credentials: 'same-origin',
			method: 'POST'
		});*/
	}
	render() {
		return (
			<h1>Hell, poop.</h1>
		);
	}
}

export default Root;
