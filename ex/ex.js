class App extends Component {

    getClassName(temperature){
      if(temperature < 15){
        return "freezing" 
      }
  
      else if(temperature > 15 && temperature < 30){
        return "fair"
      }
  
      else{
        return "hell-scape"
      }
  
    }
  
    showCompany(name , revenue){
      return <div>
                <span>{name} makes {revenue} every year.</span>
              </div>
    }
    render() {
      // let companies = [
      //   { name: "Tesla", revenue: 140 },
      //   { name: "Microsoft", revenue: 300 },
      //   { name: "Google", revenue: 600 }]
  
      //    return companies.map(item => item =  this.showCompany(item.name ,item.revenue))
  
      let temp= this.getClassName(34)
  
      return <div className={temp}>{temp}</div>
  
      }
  }