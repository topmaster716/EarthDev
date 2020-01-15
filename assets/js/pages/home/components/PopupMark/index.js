import React, { Component } from "react";
import Title from "../../../../components/form/title";
import MarkCard from "../../../../components/form/mark_card";
import Text from "../../../../components/form/text";
import Link from "../../../../components/form/link";

class PopupMark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Username",
            description:
                "I believe that each day is a challenge which could help to build the better future for us. Follow your dreams and don`t be afraid of difficulties...I believe that each day is a challenge which could help to build the better future for us. Follow your dreams and don`t be afraid of difficulties...I believe that each day is a challenge which could help to build the better future for us. Follow your dreams and don`t be afraid of difficulties... I believe that each day is a challenge which could help",
            link: "https://instagram.com/omilk/",
            linkIcon: "../../../../images/popup/link.png",
            seeMore: false,
            showPopup: true
        };

        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.setState(state => ({
            seeMore: !this.state.seeMore
        }));
    }

    render() {
        const { closePopup } = this.props;

        return (
            <MarkCard>
                <Title text={this.state.title} closePopup={closePopup} />
                <Text
                    text={this.state.description}
                    showMore={this.showMore}
                    seeMore={this.state.seeMore}
                />
                <Link
                    text={this.state.link}
                    link={this.state.link}
                    icon={this.state.linkIcon}
                />
            </MarkCard>
        );
    }
}

export default PopupMark;

// <div className="container-popup-mark">
// <div className="popup-mark">
// <h3 className="popup-user-name">Username</h3>
// <button type="button" className="popup-close-btn"></button>
// <p className="popup-user-text">I believe that each day is a challenge which could help to build the better future for us. Follow your dreams and don`t be afraid of difficulties.</p>
// <a className="popup-user-link" href="https://instagram.com/omilk/">https://instagram.com/omilk/</a>
// </div>
// </div>
