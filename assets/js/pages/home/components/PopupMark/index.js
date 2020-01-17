import React, { useState } from "react";
import Title from "../../../../components/form/title";
import MarkCard from "../../../../components/form/mark_card";
import Text from "../../../../components/form/text";
import Link from "../../../../components/form/link";

function PopupMark(props) {
    const { closePopup } = props;
    const [seeMore, setSeeMore] = useState(false);

    function showMore() {
        setSeeMore(!seeMore);
    }

    return (
        <MarkCard>
            <Title text="Username" closePopup={closePopup} />
            <Text
                text="I believe that each day is a challenge which could help to build the better future for us. Follow your dreams and don`t be afraid of difficulties...I believe that each day is a challenge which could help to build the better future for us. Follow your dreams and don`t be afraid of difficulties...I believe that each day is a challenge which could help to build the better future for us. Follow your dreams and don`t be afraid of difficulties... I believe that each day is a challenge which could help"
                showMore={showMore}
                seeMore={seeMore}
            />
            <Link
                text="https://instagram.com/omilk/"
                link="https://instagram.com/omilk/"
                icon="../../../../images/popup/link.png"
            />
        </MarkCard>
    );
}

export default PopupMark;
