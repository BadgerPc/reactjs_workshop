import React from 'react'
import Header from './components/header'
import UserForm from './components/user-form'
import UserInfo from './components/user-info'
import Repositories from './components/repositories'
import fetchData from './data-fetcher'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: {} , loading: false}
    //this.fetchRepoDetail = this.fetchRepoDetail.bind(this);
  }

  render() {
    return (
        <div>
          <Header />
          <UserForm initialValue={this.props.initialValue} onClick={this.fetchRepoDetail.bind(this)}/>
          {
            this.state.loading ? <UserInfo name="loading..." /> : null
          }

          {(this.state.data.name && !this.state.loading ? <div>
              <UserInfo
                name={this.state.data.name}
                avatar={this.state.data.avatar}
                url={this.state.data.url}
                description={this.state.data.description}
              />
              <Repositories repos={this.state.data.repos} />
          </div> : null )}
        </div>
      )
  }

  componentDidMount(){
    fetchData(this.props.initialValue).then( (data) => {
      this.setState({data: data, loading: false}) 
    });
  }

  fetchRepoDetail(username){
    console.log(username);
    this.setState({loading: true});

    fetchData(username).then( (data) => {
      this.setState({data: data, loading: false}) 
    });
  }
}
export default App
