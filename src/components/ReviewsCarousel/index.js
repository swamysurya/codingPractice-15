import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentCurousalIndex: 0,
  }

  onChangeRightArrow = () => {
    this.setState(prevState => ({
      currentCurousalIndex: prevState.currentCurousalIndex + 1,
    }))
  }

  onChangeleftArrow = () => {
    this.setState(prevState => ({
      currentCurousalIndex: prevState.currentCurousalIndex - 1,
    }))
  }

  render() {
    const leftArrow =
      'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
    const rightArrow =
      'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'
    const {reviewsList} = this.props
    const noOfUsers = reviewsList.length
    const {currentCurousalIndex} = this.state

    const rightArrowClick = () => {
      if (currentCurousalIndex < noOfUsers - 1) {
        this.onChangeRightArrow()
      }
    }
    const leftArrowClick = () => {
      if (currentCurousalIndex > 0) {
        this.onChangeleftArrow()
      }
    }
    const {imgUrl, username, companyName, description} =
      reviewsList[currentCurousalIndex]
    return (
      <div className="backGround">
        <div className="curosalContainer">
          <button
            testid="leftArrow"
            className="arrowBrn"
            onClick={leftArrowClick}
          >
            <img src={leftArrow} className="arrowimg" alt="left arrow" />
          </button>
          <div className="reviewProfile">
            <h1 className="reviewName">Reviews</h1>
            <img className="profile" src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="review">{companyName}</p>
            <p className="review">{description}</p>
          </div>
          <button
            testid="rightArrow"
            className="arrowBrn"
            onClick={rightArrowClick}
          >
            <img src={rightArrow} className="arrowimg" alt="right arrow" />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
