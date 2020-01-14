import styled from "styled-components";

import { color, device, f_c_sb } from "../../../../components/styles";

export const Section = styled.div`
	padding-top: 32px;
	padding-bottom: 72px;
`;

export const CalcBlock = styled.div`
	padding-bottom: 32px;
	margin: 24px auto 0;
    background: ${color.white};
    box-shadow: 8px 20px 30px #ECEFF7;
    border-radius: 10px;
    max-width: 588px;
    font-family: SF Pro Display;

    @media ${device.laptop} {
        max-width: 486px;
         margin: 24px 0 0 0;
    }
`;

export const CalcBlockResult = styled.div`
	margin: 24px auto 0;
    padding: 0 0 32px;
    background: ${color.white};
    box-shadow: 8px 20px 30px #ECEFF7;
    border-radius: 10px;
    max-width: 588px;
    font-family: SF Pro Display;

    @media ${device.laptop} {
    	position: absolute;
    	top: 60px;
    	right: 0;
        max-width: 282px;
        margin: 24px 0 0 0;
    }
`;

export const CalcContainer = styled.div`
	@media ${device.laptop} {
        padding-top: 60px;
        max-width: 792px;
        margin: 0 auto;
        position: relative;
    }
`

export const BlockTitle = styled.h4`
	padding: 32px 32px 0;
    font-size: 18px;
    line-height: 30px;
    color: ${color.black};
    font-weight: 600;
`;

export const BlockLine = styled.div`
	margin-top: 32px;
    width: 100%;
    opacity: 0.5;
    border: 0.5px solid #B3B3C6;
`;

export const ContainerPadding = styled.div`
	padding: 0 32px;	
`;

export const CalcStatusTitle = styled.p`
	padding: 32px 0 0;
	font-size: 14px;
	line-height: 30px;
	color: ${color.black};
	font-weight: 500;
`;

export const TaxTitle = styled.p`
	margin-top: 16px;
	font-family: SF Pro Display;
	font-size: 14px;
	line-height: 26px;
	color: ${color.darkGrey};
`;

export const TaxResult = styled.p`
	font-weight: 500;
	font-family: SF Pro Display;
	font-size: 24px;
	line-height: 40px;
	letter-spacing: 0.5px;
	color: ${color.black};
`;

export const ResultsTitle = styled.p`
	padding: 0 32px;
	margin-top: 24px;
	font-family: SF Pro Display;
	font-size: 14px;
	line-height: 24px;
	color: ${color.black};
`;

export const ResultsText = styled.p`
	padding: 0 32px;
	margin-top: 8px;
	font-family: SF Pro Display;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 20px;
	color: ${color.darkGrey};
`;