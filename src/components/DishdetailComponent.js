import React from "react";
import { Card, CardBody, CardTitle, CardImg,  CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

    function  RenderComments({comments}){
        if(comments != null){
        const formatter = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "2-digit" });
        const review = comments.map( comment =>{
            return(
                <div key={comment.id} className="list-unstyled">
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



    function RenderDish({dish}){
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

    const Dishdetail = (props) => {

        if (props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish = {props.dish}/>
                        <RenderComments comments = {props.comments}/> 
                    </div>   
                </div>
            );
        }
        else{
            return (<div></div>);
        }

    }
    

export default Dishdetail;