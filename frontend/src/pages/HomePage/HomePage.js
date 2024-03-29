import { React, useContext, useEffect } from 'react';
import banner from '../../image/banner.avif';
import { Link } from 'react-router-dom';
import styled, { css,keyframes } from 'styled-components';
import Popup from 'reactjs-popup'
import { device } from '../../const/devices';

const Root = styled.div`
    width: 100%;
    background: #fefff8;
`;

const SlideUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(250px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Action = styled.button`
    @media ${device.mobileXS} {
        width: 80%;
        height: 100px;
        padding: 26px;
        margin-top: 400px;
        background: #87D8C3;
        border-radius: 10px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
        line-height: 1;
        transition: transform 0.5s;
        z-index: 1;
        border: none;
        animation: ${SlideUp} 2.5s ease;
    };

    @media ${device.mobileS} {
        padding: 26px;
    };

    @media ${device.mobileM} {
        line-height: 1.5;
    };

    @media ${device.tablet} {
        width: 60%;
        line-height: 2;
    };
    @media ${device.laptopL} {
        width: 30%;
        margin-top: 400px;
    };

    &:hover {
        color: #fefff8;
        text-decoration: none;
        transform: scale(1.1);
    };
`;

const Banner = styled.section`
    width: 100%;
    height: 1000px;
    background: url(${banner}) no-repeat center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
        position: absolute;
        z-index: 1;
        margin-bottom: 400px;
        font-size: 80px;
        color: white;
        margin-left: 16px;
        font-family: 'Permanent Marker', cursive;
        animation: ${SlideUp} 2.1s ease;
    };

    &::after {
        content: '';
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    };

    @media ${device.mobileXS} {
        h1 {
            font-size: 80px;
        }
    };

    @media ${device.mobileL} {
        h1 {
            font-size: 90px;
        }
    };
    @media ${device.tablet} {
        h1 {
            font-size: 100px;
            text-align: center;
        }
    };
`;

const Content = styled.div`
    width: 100%;
    font-size: 50px;
    font-family: 'Permanent Marker', cursive;
    padding: 80px 20px;
    background: rgb(254, 255, 248);
`;

const Actions = styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
    background: rgb(254, 255, 248);
`;

const reuseButton = css`
    margin: 10px 10px;
    border-radius: 8px;
    padding: 20px 20px;
    text-align: center;
    color: black;
`;

const reuseHover = css`
    font-weight: bold;
    color: #fefff8;
`;

const PopupButton = styled.button`
    background: #fece35;
    border: none;
    ${reuseButton};
    width: 400px;

    &:hover {
        ${reuseHover}
    }
`;

export default function HomePage() {

    return (
        <Root>
            <Banner>
                <h1>When neighbors quarrel, lookers-on are more apt to add fuel than water. :)</h1>
                <Popup
                    trigger={<Action className='button'>Get Fuel Quote</Action>}
                    position='top center'
                    on = {'hover'}
                    reserve
                    nested
                >
                    {close => (
                        <div className='reserve'>
                            <PopupButton className='close' onClick={close}>
                                X
                            </PopupButton>
                            <Content className='content'>
                                {' '}
                                Do you want to continue reserve your table as guest?
                            </Content>
                            <Actions className='actions'>
                                <Link to="/register">
                                    <PopupButton className='botton' data-inline='true'>
                                        Register
                                    </PopupButton>
                                </Link>
                                <Link to="/login">
                                    <PopupButton className='botton' data-inline='true'>
                                        Login
                                    </PopupButton>
                                </Link>
                                <Link to="/reserve">
                                    <PopupButton className='botton' data-inline='true'>
                                        Continue as guest
                                    </PopupButton>
                                </Link>
                            </Actions>
                        </div>
                    )}
                </Popup>
            </Banner>
        </Root>
    )
}