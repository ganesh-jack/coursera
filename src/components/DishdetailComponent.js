import React, {Component} from "react";
import { Card, CardBody, CardTitle, CardImg,  CardText } from "reactstrap";

class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    renderComments(comments){
        if(comments != null){
        console.log(comments);
        const formatter = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "2-digit" });
        const review = comments.map( comment =>{
            return(
                <div className="list-unstyled">
                    <li>{comment.comment}</li>
                    <br/>
                    <li>-- {comment.author} , {formatter.format(new Date(comment.date))}</li>
                    <br/>
                </div>
            )});

        return(
        <div  className="col-12 col-md-5 m-1">
            <h4><b>Comments</b></h4>
            {review}
        </div>)
        }
        else{
            return(<div></div>)
        }
    }



    renderDish(dish){
        return(
            <div  className="col-12 col-md-5 m-1">   
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle><b>{dish.name}</b></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render(){

       if (this.props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)} 
                    {this.renderComments(this.props.dish.comments)} 
                </div>   
            </div>
        );}
    else{
        return (<div></div>);
    }

    }
    
}

export default Dishdetail;