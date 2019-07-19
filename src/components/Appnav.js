import React,{Component} from 'react'
import '../App.css'

export default class Appnav extends Component{
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Patient Data</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">All Patients <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Visits</a>
      </li>

    </ul>
  </div>
</nav>
            </div>
        )
    }
}