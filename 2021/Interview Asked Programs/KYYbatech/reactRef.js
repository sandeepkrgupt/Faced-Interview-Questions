import React form 'react';

class App extends React.Component {
	constructor(props) {
	super(props);
	ref = React.createRef();
	this.state = {
		count: 0;
	}
	}
	showMessage = () => {
	 this.setState({
		count: this.state.count +1 
	 })
	 if(this.state.count %2 === 0) {
	  this.ref(Test1).focus();
	  
	 } else {
	  this.ref(Te)
	 }
	 
	}
	
	render () {
		return(<div>
		<button onClick={this.showMessage}>++</button>
		{ this.state.count % 2 === 0 ? 
		(<h1> this is even {this.state.count} </h1>)
			: 
		(<h1>This is odd {this.state.count})
		}
		</div>
		<input type="text" ref="Text1" value="text1" onFocus={}/>
		<input type="text" ref="Text2" value="text2" />
		)
	}
}

export default App;