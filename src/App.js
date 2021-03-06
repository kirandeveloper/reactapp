import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'; 
import styles from './myStyles.module.css';  
import styled from 'styled-components'; 
import PropTypes from 'prop-types';   
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {  
         displayBio: true,
         data1: 'Enter first name',
         data2: '',
         msg: "Welcome to JavaTpoint", 

         personGoing: true,  
         numberOfPersons: 5, 
         companyName: '',

         value: 'coconut',

          content: "",

         data:   
         [  
            {             
               "name":"DNFS"             
            },  
            {            
               "name":"DDM"             
            },  
            {    
               "name":"Java Fullstack"          
            }  
         ],

         datak:[
            {
               id: 1,
               component: 'DNFS'               
            },
            {
               id: 2,
               component: 'DDM'               
            },
            {
               id: 3,
               component: 'JavaFS'               
            }
         ],

         items1: ['hello', 'world', 'click', 'me']  
      } 


      this.handleEvent = this.handleEvent.bind(this); 

      this.updateSetState = this.updateSetState.bind(this);   

      this.forceUpdateState = this.forceUpdateState.bind(this); 

      this.updateSubmit = this.updateSubmit.bind(this);  
      this.input = React.createRef();  

      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);

      this.handleInputChange = this.handleInputChange.bind(this);

      this.handleChange1 = this.handleChange1.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmit1 = this.handleSubmit1.bind(this);

      this.onValueChange = this.onValueChange.bind(this);
      this.formSubmit = this.formSubmit.bind(this);

      this.handleChange2 = this.handleChange.bind(this);
      this.handleSubmit2 = this.handleSubmit.bind(this);

      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);

      this.handleAdd = this.handleAdd.bind(this);  

   }  

   updateState(e) {
      this.setState({data2: e.target.value});
   }
   clearInput() {
      this.setState({data2: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }

   updateSubmit(event) {  
      alert('You have entered the UserName and CompanyName successfully.');  
      event.preventDefault();  
  }  

   componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 
  
    changeState() 
    { 
        this.setState({ hello : "Geek!" }); 
    } 

    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 

   forceUpdateState() {  
      this.forceUpdate();  
   };

    updateSetState() {  
       this.setState({  
          msg:"My first ReactJS tutorial"  
       });  
   }  

  //animation
   handleAdd() {  
    const newItems = this.state.items.concat([  
      prompt('Enter Item Name')  
    ]);  
    this.setState({items: newItems});  
  }  
  
  handleRemove(i) {  
    let newItems = this.state.items.slice();  
    newItems.splice(i, 1);  
    this.setState({items: newItems});  
  }  

    handleEvent(){  
    console.log(this.props);  
  }  

  handleEvent = () => {  
    console.log(this.props);  
  }  

  handleChange(event) {  
      this.setState({value: event.target.value});  
  }  
  handleSubmit(event) {  
      alert('You have submitted the input successfully: ' + this.state.value);  
      event.preventDefault();  
  }  

  handleSubmit1(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

   handleInputChange(event) {  
       const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       this.setState({  
           [name]: value  
       });  
  }  

  changeText(event) {  
        this.setState({  
            companyName: event.target.value  
        });  
    }  


   handleSubmitForm(event) {
    alert("Textarea Content: " + this.state.content);
    event.preventDefault();
  }
 
  handleChange1(event) {
    var value = event.target.value;
 
    this.setState({
      content: value
    });
  }
 
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  handleChange2(event) {
    this.setState({i_agree: !this.state.i_agree});
  }
     
  handleSubmit2(event) {
    console.log(this.state);
    event.preventDefault();
  }

  // Checkbox Initial State
  state = {
    isApple: false,
    isOrange: false,
    isBanana: false,
    isCherry: false,
    isAvocado: false
  };

  // React Checkboxes onChange Methods
  onChangeApple = () => {
    this.setState(initialState => ({
      isApple: !initialState.isAvocado,
    }));
  }

  onChangeOrange = () => {
    this.setState(initialState => ({
      isOrange: !initialState.isOrange,
    }));
  }

  onChangeBanana = () => {
    this.setState(initialState => ({
      isBanana: !initialState.isBanana,
    }));
  }

  onChangeCherry = () => {
    this.setState(initialState => ({
      isCherry: !initialState.isCherry,
    }));
  }

  onChangeAvocado = () => {
    this.setState(initialState => ({
      isAvocado: !initialState.isAvocado,
    }));
  }

  // Submit
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {  
    const mystyle = {  
      color: "Green",  
      backgroundColor: "lightBlue",  
      padding: "10px",  
      fontFamily: "Arial"  
    }; 

    const Div:any = styled.div`  
            margin: 20px;  
            border: 5px dashed green;  
            &:hover {  
            background-color: ${(props:any) => props.hoverColor};  
            }  
            `;  
    const Title = styled.h1`  
            font-family: Arial;  
            font-size: 35px;  
            text-align: center;  
            color: palevioletred;  
            `;  
    const Paragraph = styled.p`  
            font-size: 25px;  
            text-align: center;  
            background-Color: lightgreen;  
            `;  

    const bio = this.state.displayBio ? (  
            <div>  
               <p><h3>To define a state, you have to first declare a default set of values for defining the components initial state.</h3></p>   
            </div>  
              ) : null;  

    const defaultValuesByTopic = 
    {
      training: 'I would like some training',
      consulting: 'I have consulting needs',
      question: 'I have some questions',
    }


    return (  

      <div>  
        <h1>Welcome to ReactJS</h1>
        <hr/>
        <h3 style={{color: "White"}}>Inline CSS</h3>  
        <h3 style={mystyle}>Link CSS</h3>  
        <h3 className={styles.mystyle}>Embeded CSS</h3>  
        <p className={styles.parastyle}>Embeded CSS</p>  
               
            <Title>Styled Components Example</Title>  
            <p></p>  
            <Div hoverColor="Orange">  
                 <Paragraph>Hello JavaTpoint!!</Paragraph>  
         
           </Div>  
        <hr/>
        <h1>Class Components</h1>
        <div>  
                <StudentName/>  
                <ul>            
                    {this.state.data.map((item) => <List data = {item} />)}           
                </ul>  
        </div> 
        <hr/>
        <h1>Functional Components</h1>
        <Home/>  
        <About/>  
        <hr/>
        <h1> React State </h1>  
        { bio }  
        <h1> Default Props </h1>
        <div>  
            <h1> Welcome to {this.props.name} </h1>   
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
        </div>  
        <hr/>
        <h1> ReactJS Props Validator </h1>
        <div>  
              <h1>ReactJS Props validation example</h1>  
              <table className="table table-striped">  
                  <tr className="thead-light">  
                      <th>Type</th>  
                      <th>Value</th>  
                      <th>Valid</th>  
                  </tr>  
                <tr>  
                      <td>Array</td>  
                      <td>{this.props.propArray}</td>  
                      <td>{this.props.propArray ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>Boolean</td>  
                      <td>{this.props.propBool ? "true" : "False"}</td>  
                      <td>{this.props.propBool ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>Function</td>  
                      <td>{this.props.propFunc(5)}</td>  
                      <td>{this.props.propFunc(5) ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>String</td>  
                      <td>{this.props.propString}</td>  
                      <td>{this.props.propString ? "true" : "False"}</td>  
                  </tr>  
                  <tr>  
                      <td>Number</td>  
                      <td>{this.props.propNumber}</td>  
                      <td>{this.props.propNumber ? "true" : "False"}</td>  
                  </tr>  
             </table>  
        </div>  
        <hr/>
        <h1> ReactJS Constructor </h1>
        <h2>React Constructor Example</h2>  
        <input type ="text" class="form-control" value={this.state.data1} />  
        <button className="btn btn-success" onClick={this.handleEvent}>Please Click</button>  
         <p> Name: { this.state.data1 }</p> 
         <input type ="text" class="form-control" value={this.state.data1} />  
        <button className="btn btn-success" onClick={this.handleEvent}>Please Click</button>  
        <hr/>
        <h1>setState</h1>
        <div>  
             <h1>{this.state.msg}</h1>  
             <button className="btn btn-success" onClick = {this.updateSetState}>SET STATE</button>  
         </div>
        <hr/>
        <h1>forceUpdate</h1>
        <div>  
             <h1>Example to generate random number</h1>  
             <h3>Random number: {Math.random()}</h3>  
             <button  className="btn btn-info" onClick = {this.forceUpdateState}>ForceUpdate</button>  
         </div>  
        <hr/>
        <h1>React Component Life-Cycle</h1>
        <div> 
            <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
            <h2> 
             <a onClick={this.changeState.bind(this)}>Press Here!</a> 
            </h2> 
        </div>
        <hr/>
        <form onSubmit={this.updateSubmit}>  
            <h1>Uncontrolled Form Example</h1>  
            <label>Name:  
                <input type="text" className="form-control" ref={this.input} />  
            </label>  
            <label>  
                CompanyName:  
                <input type="text" className="form-control" ref={this.input} />  
            </label>  
            <input type="submit" value="Submit"  className="btn btn-success" />  
          </form>
        <hr/>
        <form onSubmit={this.handleSubmit}>  
            <h1>Controlled Form Example</h1>  
            <label>  
                Name:  
                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />  
            </label>  
            <input type="submit" value="Submit"  className="btn btn-success" />  
         </form>  
        <hr/>
        <form>  
              <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange}
                     />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input className="form-control" name="numberOfPersons" type="number"value={this.state.numberOfPersons}  
                 onChange={this.handleInputChange} />  
             </label>  
         </form>
        <hr/>
        <div>  
                <h2>Simple Event Example</h2>  
                <label htmlFor="name">Enter company name: </label>  
                <input className="form-control" type="text" id="companyName" onChange={this.changeText.bind(this)}/>  
                <h4>You entered: { this.state.companyName }</h4>  
            </div>
        <hr/>
        <form onSubmit={this.handleSubmit1}>
            <label>
              Pick your favorite flavor:
              <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" className="btn btn-success" />
          </form>
        <hr/>
        <form onSubmit={event => this.handleSubmitForm(event)}>
            <label>Content</label>
            <br />
            <textarea cols="45" rows="5"
              value={this.state.content}
              onChange={event => this.handleChange1(event)} className="form-control"  />
            <br />
            <input type="submit" value="Submit" className="btn btn-info" />
            <p>{this.state.content}</p>
          </form>
          <hr/>
          <form onSubmit={this.formSubmit}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={this.state.selectedOption === "Male"}
                  onChange={this.onValueChange}
                />
                Male
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Female"
                  checked={this.state.selectedOption === "Female"}
                  onChange={this.onValueChange}
                />
                Female
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Other"
                  checked={this.state.selectedOption === "Other"}
                  onChange={this.onValueChange}
                />
                Other
              </label>
            </div>
            <div>
              Selected option is : {this.state.selectedOption}
            </div>
          </form>
          <hr/>
          <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={this.state.i_agree}
                  onChange={this.handleChange}
                /> DNFS
              </label>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={this.state.i_agree}
                  onChange={this.handleChange}
                /> DDM
              </label>
               
              <input type="submit" value="Submit" className="btn btn-info" />
            </form>
            <form onSubmit={this.onSubmit}>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isApple}
                    onChange={this.onChangeApple}
                    className="form-check-input"
                  />
                  Apple
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isAvocado}
                    onChange={this.onChangeAvocado}
                    className="form-check-input"
                  />
                  Avocado
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isBanana}
                    onChange={this.onChangeBanana}
                    className="form-check-input"
                  />
                  Banana
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isCherry}
                    onChange={this.onChangeCherry}
                    className="form-check-input"
                  />
                  Cherry
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isOrange}
                    onChange={this.onChangeOrange}
                    className="form-check-input"
                  />
                  Orange
                </label>
              </div>

              <div className="form-group">
                <button className="btn btn-success">
                  Save
                </button>
              </div>
            </form>
          <hr/>
          <h1>Ref</h1>
          <p>when click on button input will be clear</p>
           <input className="form-control" value = {this.state.data2} onChange = {this.updateState} 
               ref = "myInput"></input> 
           <button className="btn btn-success" onClick = {this.clearInput}>CLEAR</button>
            
          <hr/>
          <h1>Key</h1>
          <div>
            <div>
               {this.state.datak.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>

          <hr/>
          <h1>Animation</h1>
          <div>
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false} >
                     
               <h1>My Element...</h1>
            </ReactCSSTransitionGroup>
          </div>  

          <hr/>
      </div>   
    );  
  }  
}  




class Home extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Home...</h1>  
         </div>  
      );  
   }  
}  
class About extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>About...</h1> 
         </div>  
      );  
   }  
}  

class StudentName extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>Course Detail</h1>  
         </div>  
      );  
   }  
}  
class List extends React.Component {  
   render() {  
      return (  
         <ul>            
            <li>{this.props.data.name}</li>   
         </ul>  
      );  
   }  
}  

class Content extends React.Component {
   render() {
      return (
         <div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
         </div>
      );
   }
}

App.defaultProps = {  
   name: "My first Props"  
}  

App.propTypes = {  
    propArray: PropTypes.array.isRequired,  
    propBool: PropTypes.bool.isRequired,  
    propFunc: PropTypes.func,  
    propNumber: PropTypes.number,  
    propString: PropTypes.string,   
}  
App.defaultProps = {  
    propArray: [1,2,3,4,5],  
    propBool: true,  
    propFunc: function(x){return x+5},  
    propNumber: 1,  
    propString: "Website Development",  
}  

export default App;  
