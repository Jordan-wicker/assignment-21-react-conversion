const React = require('react')
const ReactDOM = require('react-dom')
const $ = require('jquery')

// console.log(React)

let HomeView = React.createClass({
   render: function(){
      let congressArr = this.props.userDataList.map(function(userObj, i){
         return <CongressMembers userDataObj={userObj} key={i}/>
      })

      return  (
               <div>
                  {congressArr}
               </div>
         )
      }
   })

let CongressMembers = React.createClass({
   render: function(){
      return (
         <div class="row">
            <div class="col-sm-4 col-md-4">
               <div class="thumbnail first-thumbs">
                  <h1>{this.props.userDataObj.first_name} {this.props.userDataObj.last_name}</h1>
                     <hr/>
                  <h3>{this.props.userDataObj.title} <br/><hr/> {this.props.userDataObj.party} <br/><hr/> {this.props.userDataObj.state_name}</h3>
                     <ul>
                        <li>email: {this.props.userDataObj.oc_email}</li>
                        <li>website: {this.props.userDataObj.website}</li>
                        <li><i class="fa fa-facebook fa-2x" aria-hidden="true"></i>: {this.props.userDataObj.facebook_id}</li>
                        <li><i class="fa fa-twitter fa-2x" aria-hidden="true"></i>: {this.props.userDataObj.twitter_id}</li>
                     </ul>
                      <p>Term end: {this.props.userDataObj.term_end}</p>
                  </div>
              </div>
          </div>

      )
   }
})



$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=ba0dd7a23259418a8759fa068598c309').then(function(serverRes){
   ReactDOM.render(<HomeView userDataList={serverRes.results}/>, document.querySelector('#app-container') )
})
