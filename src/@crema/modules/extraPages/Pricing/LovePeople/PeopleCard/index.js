import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import {StyledHeading, StyledLearnBtn, StyledText} from './index.styled.js';
import {AiOutlineArrowRight} from 'react-icons/ai';
/* eslint-disable prettier/prettier */

const PeopleCard = ({data}) => {
  console.log(data);
  return (
    <Card style={{minHeight: 320}} align='left'>
      <img width= "106" height = "106" src={data.src} alt='crema-logo' />
      <StyledHeading>{data.heading}</StyledHeading>
      <StyledText>{data.text}</StyledText>
      <StyledLearnBtn type='link'>
        <span className='btn-text'>Xem thêm</span>
        <AiOutlineArrowRight className='icon' size={16} />
      </StyledLearnBtn>
    </Card>
  );
};

export default PeopleCard;

PeopleCard.propTypes = {
  data: PropTypes.object,
};
