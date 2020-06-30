import React from "react";
import PropTypes from "prop-types"
import {Card, CardHeader, CardContent, CardMedia, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";

const Question = (props) => {
    const {question, user} = props

    return (
        <Card className="question card">
            <CardHeader
                className="card-header"
                title={user.name + ' asks:'}
            />
            <div className="card-content">
                <CardMedia
                    className="card-content-media"
                    image={user.avatarURL}
                    title={user.id}
                    classes={{
                        img: "card-content-media-img"
                    }}
                />
                <CardContent
                    className="card-content-details"
                >
                    <Typography component="h6" variant="h6">
                        Would you rather
                    </Typography>
                    <p>
                        ... {question.optionOne.text} ...
                    </p>
                    <div>
                        <Button className="form-button block" onClick={() => props.handleViewResult(question)} variant="contained" color="primary">
                            View Result
                        </Button>
                    </div>
                </CardContent>
            </div>
        </Card>
    )
}

Question.propTypes = {
    question: PropTypes.object
}

const mapStateToProps = ({users}, ownProps) => {
    return {
        user: users[ownProps.question.author]
    }
}

export default connect(mapStateToProps)( Question )

